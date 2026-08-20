import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { loadExportedDataModule } from "./load-data-module.mjs";

const substantiveRoles = new Set(["primary-record", "independent-reporting", "rights-context"]);

function issuesFor(caseStudy, publicationHistory, knownSlugs, researchCandidateSlugs) {
  const issues = [];
  const sourceRoles = new Set(caseStudy.sources.map((source) => source.role));
  const sourceDomains = new Set(caseStudy.sources.map((source) => new URL(source.url).hostname));

  if (!caseStudy.title || !caseStudy.artist || !caseStudy.summary) issues.push("missing identifying copy");
  if (caseStudy.documentedRecord.length < 2) issues.push("fewer than two documented records");
  if (caseStudy.editorialReading.length < 2) issues.push("fewer than two editorial paragraphs");
  if (!caseStudy.questionAnswer) issues.push("missing direct evidence conclusion");
  if ((caseStudy.analysisSections?.length ?? 0) < 2) issues.push("fewer than two page-specific analysis sections");
  if (caseStudy.analysisSections?.some((section) => !section.title || section.paragraphs.length < 2)) {
    issues.push("incomplete page-specific analysis section");
  }
  if (caseStudy.limitations.length < 3) issues.push("fewer than three explicit limitations");
  if (!publicationHistory?.publishedOn || !publicationHistory?.lastReviewedOn) {
    issues.push("missing publication history");
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(publicationHistory.publishedOn) || !/^\d{4}-\d{2}-\d{2}$/.test(publicationHistory.lastReviewedOn)) {
    issues.push("publication history must use ISO dates");
  }
  if (caseStudy.sources.length < 3) issues.push("fewer than three sources");
  if (sourceDomains.size < 2) issues.push("fewer than two source domains");
  if ([...sourceRoles].filter((role) => substantiveRoles.has(role)).length < 2) {
    issues.push("fewer than two substantive evidence roles");
  }
  if (caseStudy.sources.some((source) => !source.label || !source.note || !source.url.startsWith("https://"))) {
    issues.push("incomplete source citation");
  }
  const relatedProfileTypes = new Set((caseStudy.relatedProfiles ?? []).map((profile) => profile.type));
  const hasRelatedProfiles = relatedProfileTypes.has("artist") && relatedProfileTypes.has("song");
  if (!hasRelatedProfiles && !caseStudy.researchCandidate) {
    issues.push("missing related artist and song records or research candidate");
  }
  if (caseStudy.researchCandidate && !researchCandidateSlugs.has(caseStudy.researchCandidate.slug)) {
    issues.push("references an unknown research candidate");
  }
  if ((caseStudy.relatedCaseStudies?.length ?? 0) < 1) issues.push("missing related case study");
  if (caseStudy.relatedCaseStudies?.some((related) => related.slug === caseStudy.slug || !knownSlugs.has(related.slug))) {
    issues.push("invalid related case study");
  }

  return issues;
}

const caseStudies = await loadExportedDataModule(resolve("src/data/caseStudies.ts"), "caseStudies");
const caseStudyPublicationHistory = await loadExportedDataModule(
  resolve("src/data/caseStudies.ts"),
  "caseStudyPublicationHistory"
);
const knownSlugs = new Set(caseStudies.map((caseStudy) => caseStudy.slug));
const researchCandidates = JSON.parse(await readFile(resolve("data/research-candidates.json"), "utf8")).candidates ?? [];
const researchCandidateSlugs = new Set(researchCandidates.map((candidate) => candidate.slug));
const invalid = caseStudies.map((caseStudy) => ({
  slug: caseStudy.slug,
  issues: issuesFor(caseStudy, caseStudyPublicationHistory[caseStudy.slug], knownSlugs, researchCandidateSlugs)
}))
  .filter((entry) => entry.issues.length > 0);

if (caseStudies.length < 10) {
  throw new Error(`Case study audit failed: expected at least 10 published case studies, found ${caseStudies.length}.`);
}

if (invalid.length > 0) {
  throw new Error(`Case study audit failed: ${JSON.stringify(invalid)}`);
}

console.log(`Case study audit: ${caseStudies.length} published articles meet the source and limits standard.`);
