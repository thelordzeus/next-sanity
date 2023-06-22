import { getProjects } from "@/sanity/utils/fetchData";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Zeus!
        </span>
      </h1>
      <p className="mt-5 text-3xl text-gray-300">
        Hello everyone! check out my projects!
      </p>
      <h2 className="mt-24 font-bold text-gray-300 text-3xl">My Projects</h2>
      <div className=" mt-5 grid md:grid-cols-2 lg:grid-col-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition duration-500 ease-in-out"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">
              {project.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
