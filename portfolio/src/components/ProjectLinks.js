import React from "react";
import { projectLink } from "../data";

export default function Project_Links() {
  return (
    <div>
 
        <div className="text-center w-full">
          
          <h1 className="sm:text-4xl text-3xl font-medium title-font my-4 text-white">
            More Projects
          </h1>
          
        </div>

<div className="flex flex-wrap justify-center text-center ">
{projectLink.map((projectLink) => (
  <div key={projectLink} className="p-2 text-center">
    <a 
    href={projectLink.link} 
    className="title-font text-lg hover:text-sky-400 font-medium text-white mb-3">
      {projectLink.title}
    </a>
    <img 
    alt="gallery" 
    className="hover:bg-red-600 circle rounded-full mt-2 	cursor:pointer" src={projectLink.image} />
  </div>
))}
</div>
</div>
  );
}



     