"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/images/png-clipart-logo-graphics-booking-com-font-trip-icon-blue-text.png";

const Header = () => {
  return (
    <header className="bg-blue-700">
      {" "}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>

            <Image width={200} src={logo} alt="logo image"></Image>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
