export type EvidenceRole =
  | "primary-record"
  | "independent-reporting"
  | "rights-context"
  | "identity-context";

export type ResearchRecord = {
  reviewedOn: string;
  author: string;
  modelInputs: string[];
  limitations: string[];
};

export const publisher = {
  ownerName: "Andrei Olaru",
  editorName: "Andrei Olaru",
  tradingAs: "Made By Kreativ",
  entityType: "Individual",
  location: "Bucharest, Romania",
  contactEmail: "info@howmuchmusic.com",
  correctionsUrl: "/contact/"
};

export function isSubstantiveEvidenceRole(role?: EvidenceRole) {
  return role === "primary-record" || role === "independent-reporting" || role === "rights-context";
}

export function hasDocumentedResearch(record?: ResearchRecord) {
  return Boolean(
    record?.author &&
      record.reviewedOn &&
      record.modelInputs.length >= 2 &&
      record.limitations.length >= 2
  );
}
