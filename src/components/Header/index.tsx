import React from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Header() {
  return (
    <div className="flex justify-end items-center">
      <div className="flex space-x-12 items-center">
        <nav>
          <ul className="flex space-x-6">
            <Link className="text-gray-200" href="/">Home</Link>
          </ul>
        </nav>
        <ConnectButton  />
      </div>
    </div>
  );
}

export default Header;
