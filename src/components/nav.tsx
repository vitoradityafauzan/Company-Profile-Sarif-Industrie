import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Image from "next/image";

export default function Nav() {
  return ( 
    // bg-transparent backdrop-blur-sm bg-[#8C6723]
    <div className="w-full h-fit ">
      <Navbar fluid className="bg-transparent backdrop-blur-sm	 p-4 ">
        <NavbarBrand as={Link} href="/">
          <Image src="/sariflogoblack.png" className="mr-3" width={44} height={44} alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-lg sm:text-2xl font-bold text-[#0D0D0D]">SARIF INDUSTRIES</span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse className="mr-8">
          <NavbarLink as={Link} href="/" className="text-white font-bold hover:bg-[#b1b1b1] md:text-lg  md:hover:text-[#0D0D0D]">
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="/about" className="text-white font-bold hover:bg-[#b1b1b1] md:text-lg md:hover:text-[#0D0D0D]">
            About
          </NavbarLink>
          <NavbarLink as={Link} href="#" className="text-white font-bold hover:bg-[#b1b1b1] md:text-lg  md:hover:text-[#0D0D0D]">
            Products
          </NavbarLink>
          <NavbarLink as={Link} href="/team" className="text-white font-bold hover:bg-[#b1b1b1] md:text-lg  md:hover:text-[#0D0D0D]">
            Teams
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
    // <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
    //       <Image src="/Sariflogo-crop.png" className="mr-3" width={37} height={37} alt="Flowbite React Logo" />
    //       <span className="self-center text-2xl font-semibold whitespace-nowrap ">Sarif Industries</span>
    //     </a>
    //     <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    //       <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">
    //         Get started
    //       </button>
    //       <button
    //         data-collapse-toggle="navbar-sticky"
    //         type="button"
    //         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
    //         aria-controls="navbar-sticky"
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
    //         </svg>
    //       </button>
    //     </div>
    //     <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    //       <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
    //         <li>
    //           <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
