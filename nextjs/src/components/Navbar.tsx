"use client";
import Image from "next/image"
import { useEffect, useState } from "react";

const Navbar = () => {

  const [name, setName] =useState("");
  const [email, setEmail] =useState("");




  useEffect(() => {
    if (typeof window !== "undefined") {
      // const name = localStorage.getItem("name");
      // setName(name || "noname");
      const name = localStorage.getItem("name");
      const email = localStorage.getItem("email");

      setName(name || "");
      setEmail(email || "");
    }
  }, []);


  return (
    <div className='flex items-center justify-between p-4'>
      {/* ICONS AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className='flex flex-col'>
          <span className="text-xs leading-3 font-medium">{name}</span>
          <span className="text-[10px] text-gray-500 text-right">{email}</span>
        </div>
        <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full" />
      </div>
    </div>
  )
}

export default Navbar