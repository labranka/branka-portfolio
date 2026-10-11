import { CaseStudyPage, getProjectMetadata } from "@/components/CaseStudyPage";

export const metadata = getProjectMetadata("lunara");

export default function Page() {
  return <CaseStudyPage slug="lunara" />;
}
