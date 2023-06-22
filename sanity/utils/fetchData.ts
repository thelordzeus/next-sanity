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

export async function getProject(slug: string): Promise<project> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,

        }`,
    { slug: slug }
  );
}
