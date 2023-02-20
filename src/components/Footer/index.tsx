import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="md:flex md:justify-between lg:flex items-center my-6 lg:justify-between">
      <div className="mb-4 md:mb-0 lg:mb-0 ">
        <Image src="/logo.png" width={127} height={61} alt="ayagigs__logo" />
      </div>

      <div>
        <nav>
          <p className="text-gray-200 font-bold">Contacts</p>
          <ul className="grid grid-cols-2 gap-x-12">
            <Link className="text-gray-200" href="#">
              Email
            </Link>
            <Link className="text-gray-200" href="#">
              Linkedin
            </Link>
            <Link className="text-gray-200" href="#">
              Instagram
            </Link>
            <Link className="text-gray-200" href="#">
              Twitter
            </Link>
          </ul>
        </nav>
      </div>
      <div>
        <p className="text-gray-200 my-4">Join Our NewsLetter</p>
        <div className="relative">
          <input
            type="email"
            className="outline-none border-none bg-[#0080FA] rounded-full w-[80%] text-gray-200 px-6 py-2 pr-12"
            placeholder="email address"
          />
          <button className="bg-[#3BD6B2] text-gray-200 rounded-full px-6 py-2 absolute right-1">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
