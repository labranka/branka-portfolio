import { CaseStudyPage, getProjectMetadata } from "@/components/CaseStudyPage";

export const metadata = getProjectMetadata("wall-of-art");

export default function Page() {
  return <CaseStudyPage slug="wall-of-art" />;
}
