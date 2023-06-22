import { groq } from "next-sanity";
import { client } from "../lib/client";
import { project } from "@/types/project";

export async function getProjects(): Promise<project[]> {
  return client.fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,

        }`
  );
}
