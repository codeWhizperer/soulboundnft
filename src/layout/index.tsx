import Footer from "@components/Footer";
import Header from "@components/Header";
import React from "react";

function Layout({ children }:any) {
  return (
    <>
      <header className="p-4 md:p-12 lg:p-6 border-b-4 mb-12 border-b-gray-200">
        <Header />
      </header>
      <main className="">{children}</main>

      {/* <footer className="p-4 md:4 lg:p-4 pt-4 border-t-4  border-t-gray-200">
        <Footer />
        <p className="text-white mt-24 text-center">&#169;Copyright {new Date().getFullYear()}</p>
      </footer> */}
    </>
  );
}

export default Layout;
