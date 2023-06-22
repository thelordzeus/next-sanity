import { getProjects } from "@/sanity/utils/fetchData";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hello I'm{" "}
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
          <div
            key={project._id}
            className="border border-gray-500 rounded-lg p-3"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={250}
                height={100}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
