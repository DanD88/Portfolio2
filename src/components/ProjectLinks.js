import React from "react";
import { projectLink } from "../data";

export default function Project_Links() {
  return (
    <div>
 
        <div className="text-center w-full p-4">
          
          <h1 className="sm:text-4xl text-3xl font-medium title-font my-4 text-gray-800">
            More Projects
          </h1>
          
        </div>

<div className="flex flex-wrap justify-center text-center ">
{projectLink.map((projectLink) => (
  <div key={projectLink} className="p-2 text-center">
    <a 
    href={projectLink.link} 
    className="title-font text-lg hover:text-sky-400 font-medium text-gray-900 mb-6">
      {projectLink.title}
    </a>
    <img width={80} height={80}
    alt="gallery" 
    className="bg-gray-300 p-2 circle rounded-full mt-2 	cursor:pointer" src={projectLink.image} />
  </div>
))}
</div>
</div>
  );
}



     