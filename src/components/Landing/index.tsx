import React from "react";
import Image from "next/image";
import Link from "next/link";

function Landing() {
  return (
    <section className="container mx-auto">
      <div className="grid items-center md:grid-cols-2 md:gap-x-12 lg:grid-cols-2 lg:gap-x-12 mb-24">
        <div className="p-2 md:p-6 lg:p-0 text-center md:text-left lg:text-left">
          <h2 className="text-gray-200 md:text-medium md:leading-medium lg:text-large lg:leading-large font-black">
            Grab your
            <br /> Soul-bound certificate{" "}
          </h2>
          <p className="text-gray-200 md:text-xs lg:text-small lg:leading-small my-4">
            Get your digital digital certificate here to prove that you have
            undergone one of Ayagigs professional trainings.This is only open to
            the approved addresses and can’t be transferred out once minted
          </p>
        </div>

        <div>
          <Image
            src="/desktop.png"
            width={539}
            height={573}
            alt="desktop__svg"
          />
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-x-2 lg:grid lg:grid-cols-2 lg:gap-x-2 items-center mb-24">
        <div>
          <Image src="/card.png" width={539} height={573} alt="card__svg" />
        </div>
        <div className="text-center md:text-left lg:text-left">
          <p className="md:text-2xl lg:text-medium text-gray-200  font-black lg:leading-medium">
            Verify Talent’s
            <br /> Skill sets easily
          </p>

            <Link href={"/mint"}>
            <button className="bg-[#3BD6B2] text-gray-200 mt-11 px-24 py-4 rounded-full">Mint Certificate</button>
            </Link>
          
        </div>
      </div>
    </section>
  );
}

export default Landing;
