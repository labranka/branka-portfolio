import { CaseStudyPage, getProjectMetadata } from "@/components/CaseStudyPage";

export const metadata = getProjectMetadata("printworks-platform");

export default function Page() {
  return <CaseStudyPage slug="printworks-platform" />;
}
