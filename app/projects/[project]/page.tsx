import { getProject } from "@/sanity/utils/fetchData";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { project: string };
};
export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);
  return (
    <div className="max-w-3xl mx-auto py-20">
      <header className="flex items-center justify-between ">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl  drop-shadow-sm font-extrabold">
          {project.title}
        </h1>

        <a
          href={project.url}
          title="view project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition duration-500 ease-in-out"
        >
          View Project
        </a>
      </header>

      {/* content goes here  */}
      <div>
        <PortableText value={project.content} />
      </div>

      {/* image goes here  */}
    </div>
  );
}
