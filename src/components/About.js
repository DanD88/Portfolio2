import React from "react";
import "../index.css";

// import incognito from './../images/incognito.png'

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Danny.
            <br className="hidden lg:inline-block" /> I love to build websites.
          </h1>
          <p className="mb-8 leading-relaxed">
            Adaptable recent college graduate with an Associate's of Technology
            in Web Development. With over 3 years of experience in Web
            Development, I am the perfect fit for your project. I specialize in
            building websites that will increase your businesses content and
            sales leads. With the skills needed to enhance your online presence
            to help improve the future of your business.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-sky-700 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={require('./../images/incognito.png')}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
