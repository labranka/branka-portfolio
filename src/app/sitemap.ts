import type { MetadataRoute } from "next";
import { featuredProjects } from "@/content/case-studies";
import { siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...featuredProjects.map(({ project }) => ({ url: siteUrl + "/work/" + project.slug, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
