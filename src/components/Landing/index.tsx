import React from "react";
import Image from "next/image";
import {
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

function Landing() {
  const router = useRouter();
  const { data, write } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: "0x3c3079aB5510148E241e2277F46800a8389e60b7",
    abi: [
      {
        inputs: [],
        name: "certMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    functionName: "certMint",
    onError(err: any) {
      console.log("error:",err?.data)
      toast.error(err?.data.message);
    },
  });

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(data) {
      router.push(`https://testnets.opensea.io/account`);
    },
    onError(err) {
      // console.log(err.message);
      toast.error(err?.message);
    },
  });

  return (
    <>
     <ToastContainer />
    <section className="container mx-auto">
      <div className="grid items-center md:grid-cols-2 md:gap-x-12 lg:grid-cols-2 lg:gap-x-12 mb-24">
        <div className="p-2 md:p-6 lg:p-0 text-center md:text-left lg:text-left">
          <h2 className="text-gray-200 md:text-medium md:leading-medium lg:text-large lg:leading-large font-black">
            Grab your
            <br /> Soul-bound certificate{" "}
          </h2>
          <p className="text-gray-200 md:text-xs lg:text-small lg:leading-small my-4">
            This is only open to the approved addresses and
            <br /> can’t be transferred out once minted.
          </p>
          <button
            disabled={isLoading}
            onClick={() => write?.()}
            className="bg-[#3BD6B2] text-gray-200  px-24 py-4 rounded-full"
          >
            {isLoading ? "Minting" : "Mint Certificate"}
          </button>
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
    </section>
    </>
  );
}

export default Landing;
