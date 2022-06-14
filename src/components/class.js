  <nav className="w-full flex flex-wrap bg-black items-center justify-between px-2 py-3 navbar-expand-lg">
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
          href="#about">Daniel Davidson</a>
          <button
          className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button" onclick="toggleNavbar('example-collapse-navbar')">
          <i className="text-white">
          <MenuIcon classNameName="mx-auto inline-block w-10 mb-4" />
          </i>
        </button>
      </div>
      
      <div className="lg:flex flex-grow             items-center hidden"
            id="example-collapse-navbar">
        
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:red-600" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#resume">
              Resume
            </a>
          </li>
          
          <li className="flex items-center">
            <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#pablo"><i className="text-orange-500 fab fa-facebook text-lg leading-lg "></i><span
                className="lg:hidden inline-block ml-2">Share</span></a>
          </li>
          
          <li className="flex items-center">
            <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#pablo">
              <i className="text-orange-500 fab fa-twitter text-lg leading-lg "></i>
              <span className="lg:hidden inline-block ml-2">Tweet</span>
            </a>
          </li>
          
          <li className="flex items-center">
            <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#pablo">
              <i className="text-orange-500 fab fa-instagram text-lg leading-lg "></i>
              <span className="lg:hidden inline-block ml-2">Share</span>
            </a>
          </li>
      
        </ul>
        
      </div>
    </div>
  </nav>