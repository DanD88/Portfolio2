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
      .then(() => setConfirm("Message sent!"))
      .catch((error) => console.log(error));
  }

  
  return (
      <div id="contact" className="container lg:w-1/2 px-4 py-2 mx-auto bg-gray-700 lg:px-20 my-8 rounded sm:w-full">
        <form 
        netlify 
        name="contact"
        onSubmit={handleSubmit}
        className=" flex flex-col md:py-8 mt-8 md:mt-0 ">
          <h2 className="text-white sm:text-4x1 text-3x1 mb-1 font-medium title-font uppercase text-center">
            Contact me
          </h2>
          <p className="leading-relaxed mb-5 text-center">
            Looking forward to hearing from you. I am available for hire!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"> 
            Name
            </label> 
            <input
            type="text"
            id="name"
            name="name"
            className="md-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setName(e.target.value)}
            placeholder="What's your name?"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-200"> 
            Email
            </label> 
            <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="What's your email?"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-200"> 
            Message
            </label> 
            <textarea
            type="text"
            id="message"
            name="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave a comment..."
            />
          </div>
          <button 
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-600 border-0 py-2 px-6 focus:outline-none focus:ring-blue-300 rounded-lg text-lg w-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
          >
            Submit
          </button>
        </form>
        <div>{confirm}</div>

      </div>
    );
  }



