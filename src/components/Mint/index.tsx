import React from "react";
import Image from "next/image";
import AppMetaData from "@components/Metadata";
import "react-toastify/dist/ReactToastify.css";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
} from "wagmi";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

function MintCertificate() {
  const router = useRouter();
  const { address } = useAccount();
  const { config } = usePrepareContractWrite({
    address: "0x9CC30BBa8D4Bbf4274d4d31f1F50f45cB33fa8be",
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
  });

  const { write, data } = useContractWrite(config);
  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(data) {
      router.push(`https://testnets.opensea.io/account`);
    },
    onError(err) {
      console.log(err)
      toast.error(err?.message);
    },
  });
  return (
    <>
      <AppMetaData />
      <ToastContainer />
      <section className="flex justify-center my-32">
        <div>
          <p className="text-gray-200 font-bold my-4 text-center md:text-medium-x lg:text-medium-x font-black">
            Mint Certificate
          </p>
          <div>
            <Image src="/avatar.png" width={502} height={381} alt="mint__svg" />
          </div>
          <div className="flex justify-center">
            <button
              disabled={!write || isLoading}
              onClick={() => write?.()}
              className="text-gray-200 bg-[#3BD6B2] my-12 px-12 py-2 rounded-full font-bold "
            >
              {isLoading ? "Minting" : "Mint"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default MintCertificate;
