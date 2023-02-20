import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Header() {
  return (
    <div className="flex justify-between items-center">
      {/*Logo*/}
      <div>
        <Image src="/logo.png" width={127} height={61} alt="ayagigs__logo" />
      </div>
      <div className="flex space-x-12 items-center">
        <nav>
          <ul className="flex space-x-6">
            <Link className="text-gray-200" href="#">About us</Link>
            <Link className="text-gray-200" href="#">Program</Link>
          </ul>
        </nav>
        <ConnectButton  />
      </div>
    </div>
  );
}

export default Header;
