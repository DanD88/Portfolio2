import React from "react";
import '../index.css'

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [confirm, setConfirm] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => setConfirm("Message was sent!"))
      .catch((error) => console.log(error));
  }

  
  return (
      <div id="contact" className="container lg:w-1/2 px-4 py-2 mx-auto bg-gray-200 lg:px-20 my-8 rounded-lg shadow-lg sm:w-full">
        <form 
        netlify 
        name="contact"
        onSubmit={handleSubmit}
        className="flex flex-col md:py-8 mt-8 md:mt-0 ">
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 text-center">
            Contact me
          </h2>
          
          <p className="leading-relaxed mb-5 text-gray-800 text-center">
            Looking forward to hearing from you. I am available for hire!
          </p>
          
          <div className="relative mb-4">
            <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-900"> 
            Name
            </label> 
            <input
            type="text"
            id="name"
            name="name"
            className="text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setName(e.target.value)}
            placeholder="What's your name?"
            required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-md text-gray-800"> 
            Email
            </label> 
            <input
            type="email"
            id="email"
            name="email"
            className="text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-100 dark:placeholder-gray-800 dark:focus:ring-blue-900 dark:focus:border-blue-900"
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="What's your email?"
            required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-md text-gray-800"> 
            Message
            </label> 
            <textarea
            type="text"
            id="message"
            name="message"
            className="block p-2.5 w-full text-md text-black bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white dark:placeholder-gray-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave a comment..."
            required
            />
          </div>
          <button 
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-600 border-0 py-2 px-6 focus:outline-none focus:ring-blue-300 rounded-lg text-lg w-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
          >
            Submit
          </button>
          <div className="text-center text-white  ">{confirm}</div>
        </form>
        

      </div>
    );
  }



