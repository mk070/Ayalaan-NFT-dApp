import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../images/logo.png";

function Footer() {
  return (
    <div>
      <div className="bg-black flex items-center" color="white" style={{color:"white !important"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{color:"white"}} className="flex items-center justify-between h-16">
            <h3 color="white">Madhan © 2024 </h3>
          </div>
        </div>
      
      </div>
    </div>
  );
}
export default Footer;
