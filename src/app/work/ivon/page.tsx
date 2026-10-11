import { CaseStudyPage, getProjectMetadata } from "@/components/CaseStudyPage";

export const metadata = getProjectMetadata("ivon");

export default function Page() {
  return <CaseStudyPage slug="ivon" />;
}
