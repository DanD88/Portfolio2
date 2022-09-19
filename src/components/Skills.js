import React from "react";
import { skills } from "../data";
import '../index.css'

function Skills() {
  return (
      <section id="skills">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="text-center mb-10 p-4">
            <h1 className="sm:text-4xl text-3xl font-medium title-font my-4 text-gray-800">
              Skills &amp; Technologies
            </h1>

          </div>
          <div className="skill-icons place-content-center flex flex-row mb-10">
            <div>
            <img width={150} height={150}
                 className="flex w-auto h-auto"
                 alt="html logo"
                 src={require('./../images/icons/icons8-html-5.png')}
               />
            </div>
            <div>
            <img  width={150} height={150}
                  className="flex w-auto h-auto"
                  alt="css logo"
                  src={require('./../images/icons/icons8-css3.png')}
                />
            </div>
            <div>
            <img  width={150} height={150}
                  className="flex w-auto h-auto"
                  alt="javascript logo"
                  src={require('./../images/icons/icons8-javascript.png')}
                />
            </div>
            <div>
            <img  width={150} height={150}
                  className="flex w-auto h-auto"
                  alt="react logo"
                  src={require('./../images/icons/icons8-react.png')}
                />
            </div>
            <div>
            <img  width={150} height={150}
                  className="flex  w-auto h-auto"
                  alt="wordpress logo"
                  src={require('./../images/icons/icons8-wordpress.png')}
                />
            </div>
            <div>
            <img  width={150} height={150}
                  className="flex  w-auto h-auto"
                  alt="bootstrap logo"
                  src={require('./../images/icons/icons8-bootstrap.png')}
                />
            </div>
            
          </div>
          <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
               <div className="px-6 py-8 relative z-10 w-full h-full bg-gray-100 rounded-lg shadow-lg bg-gray-100 dark:hover:bg-gray-200">
                  
                  <h1 className="title-font text-lg font-bold text-black mb-3">
                    {skill.title}
                  </h1>
                  <p className="leading-relaxed text-black">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Skills;


