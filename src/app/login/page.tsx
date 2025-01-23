
"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import UserAuth from "./UserAuthentication"; // Import the UserAuth form

import "../globals.css";

export default function AuthenticationPage() {
  const imagePath = "/login.webp"; // Path to the background image

  return (
    <>
      <div
        className="container relative h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${imagePath})` }} 
      >
        {/* Position the login box manually */}
        <div className="absolute top-[20%] right-[10%] max-w-sm w-full p-8 z-10">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6">
            {/* Include the UserAuth component here */}
            <UserAuth />
          </div>
        </div>
      </div>
    </> 
  );
}
