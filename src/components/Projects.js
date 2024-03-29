
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-200 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
        <div className="flex flex-col w-full mb-4 p-4">
          <h1 className="sm:text-4xl text-3xl font-medium title-font my-4 text-gray-800">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            
          </p>
        </div>

        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-wrap -mx-8">
            {projects.map((project) => (
              <div key={project} className="p-2 sm:w-1/2 w-full">
                <div className="mb-4 w-full h-full bg-gray-100 rounded-lg shadow-lg dark:bg-gray-100 dark:border-gray-700 bg-gray-100 rounded-lg">
                  <a href={project.link}>
                  <img width={462} height={263}
                    alt="gallery"
                    className="mb-4 rounded-t-lg"
                    src={project.icon}
                  />
                  </a>
                  <h2 className="text-lg underline font-semibold text-gray-900 text-center">
                    {project.subtitle}

                  </h2>
                  <h1 className="title-font text-lg text-gray-900 font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-gray-900">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>

        {/* <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.icon}
              className="w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.icon}
                />
                <div className="px-10 py-20 relative z-10 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div> */}
      </div>
    </section>
  );
}
