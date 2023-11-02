"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import logo from "@/public/images/logo.jpg";
import Image from "next/image";
import "./menubar.scss";

export default function Header() {


  const [className, setClassName] = useState('normal'); // Set your initial class name here

  // useEffect(() => {
  //   // Add a scroll event listener
  //   const handleScroll = () => {
  //     if (window.scrollY > 80) {
  //       setClassName('changed'); // Change the class name when scrolled more than 80 pixels
  //     } else {
  //       setClassName('normal'); // Revert the class name when scrolled back up
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  function ToggleFunction() {
    className===""? setClassName("menu-active"):setClassName("")

    
  }


  return (
    // <header className={`absolute w-full z-30`}>
    //   <div className="max-w-6xl mx-auto px-4 sm:px-6">
    //     <div className="flex items-center justify-between h-20 logoHeaderMenu">
    //       <div className="logoCls">
    //         <Image src={logo} alt="Logo" />
    //       </div>

    //       {/* Desktop navigation */}
    //       <nav className="hidden md:flex md:grow">
    //         {/* Desktop sign in links */}
    //         <ul className="flex grow justify-end flex-wrap items-center">
    //           <li>
    //             <Link
    //               href="/"
    //               className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out menuText"
    //             >
    //               Contact
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/"
    //               className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out menuText"
    //             >
    //               Services
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/"
    //               className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out menuText"
    //             >
    //               About Us
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/"
    //               className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out menuText"
    //             >
    //               Services
    //             </Link>
    //           </li>
    //           {/* <li>
    //             <Link
    //               href="/"
    //               className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
    //             >
    //               Sign up
    //             </Link>
    //           </li> */}
    //         </ul>
    //       </nav>

    //       <MobileMenu />
    //     </div>
    //   </div>
    // </header>
    <div className={className}>
      <nav className="navbar">
  <div className="logo">
    <Image src={logo} alt="Logo" />
  </div>

  <div className="push-left">
    <button id="menu-toggler" data-className="menu-active" className="hamburger" onClick={ToggleFunction}>
      <span className="hamburger-line hamburger-line-top"></span>
      <span className="hamburger-line hamburger-line-middle"></span>
      <span className="hamburger-line hamburger-line-bottom"></span>
    </button>

    <ul id="primary-menu" className="menu nav-menu">
      <li className="menu-item current-menu-item"><a className="nav__link"  href="#">Home</a></li>
      <li className="menu-item dropdown"><a className="nav__link"  href="#">About</a></li>
      <li className="menu-item dropdown"><a className="nav__link"  href="#">Contact</a></li>
      <li className="menu-item "><a className="nav__link"  href="#">Blog</a></li>
    </ul>


  </div>
</nav>
    </div>
  );
}
