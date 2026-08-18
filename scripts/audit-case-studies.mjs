const substantiveRoles = new Set(["primary-record", "independent-reporting", "rights-context"]);

function issuesFor(caseStudy) {
  const issues = [];
  const sourceRoles = new Set(caseStudy.sources.map((source) => source.role));
  const sourceDomains = new Set(caseStudy.sources.map((source) => new URL(source.url).hostname));

  if (!caseStudy.title || !caseStudy.artist || !caseStudy.summary) issues.push("missing identifying copy");
  if (caseStudy.documentedRecord.length < 2) issues.push("fewer than two documented records");
  if (caseStudy.editorialReading.length < 2) issues.push("fewer than two editorial paragraphs");
  if (caseStudy.limitations.length < 3) issues.push("fewer than three explicit limitations");
  if (!caseStudy.reviewedOn) issues.push("missing review date");
  if (caseStudy.sources.length < 3) issues.push("fewer than three sources");
  if (sourceDomains.size < 2) issues.push("fewer than two source domains");
  if ([...sourceRoles].filter((role) => substantiveRoles.has(role)).length < 2) {
    issues.push("fewer than two substantive evidence roles");
  }
  if (caseStudy.sources.some((source) => !source.label || !source.note || !source.url.startsWith("https://"))) {
    issues.push("incomplete source citation");
  }

  return issues;
}

const { caseStudies } = await import("../src/data/caseStudies.ts");
const invalid = caseStudies.map((caseStudy) => ({ slug: caseStudy.slug, issues: issuesFor(caseStudy) }))
  .filter((entry) => entry.issues.length > 0);

if (caseStudies.length < 10) {
  throw new Error(`Case study audit failed: expected at least 10 published case studies, found ${caseStudies.length}.`);
}

if (invalid.length > 0) {
  throw new Error(`Case study audit failed: ${JSON.stringify(invalid)}`);
}

console.log(`Case study audit: ${caseStudies.length} published articles meet the source and limits standard.`);
