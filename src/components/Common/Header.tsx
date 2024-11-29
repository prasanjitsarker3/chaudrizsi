/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { RiMenu2Fill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { RootState } from "../Redux/store";
import { logOut } from "../Redux/authSlice";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(
    (state: RootState) => state.auth.accessToken
  );
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logOut());
    router.push("/");
    router.refresh();
  };

  return (
    <motion.header
      className={`${
        scrolling ? "bg-white fixed  w-full z-40" : "w-full z-40 fixed"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={`${scrolling ? " w-full pt-0" : "w-full md:pt-8 pt-0"}`}>
        <div className="w-full mx-auto flex justify-between items-center md:px-0 px-4 ">
          {/* First Div */}
          <div className="flex-1 mx-auto flex md:justify-start 2xl:justify-center items-center py-3 2xl:pl-0 md:pl-16">
            <div className="flex items-center gap-3">
              <Link
                href={"/"}
                className={`text-xl md:text-3xl 2xl:text-3xl font-bold vigaRegular  uppercase ${
                  scrolling ? " primaryColor" : "text-white"
                }`}
              >
                Chaudri cpa
              </Link>
            </div>
          </div>

          {/* Second Div*/}
          <div className="hidden md:block flex-1 flex justify-center items-center md:py-3 2xl:py-5 bg-white">
            <div className="flex justify-center items-center text-center gap-3">
              <h1 className="text-lg primaryColor cursor-pointer">Home</h1>
              <h1 className="text-lg text-slate-700 cursor-pointer hover:text-[#e24707]">
                About
              </h1>
              <h1 className="text-lg text-slate-700 cursor-pointer hover:text-[#e24707]">
                Services
              </h1>
              <h1 className="text-lg text-slate-700 cursor-pointer hover:text-[#e24707]">
                Case
              </h1>
              <h1 className="text-lg text-slate-700 cursor-pointer hover:text-[#e24707]">
                FAQ
              </h1>
              <h1 className="text-lg text-slate-700 cursor-pointer hover:text-[#e24707]">
                Blog
              </h1>
              <h1 className="text-lg text-slate-700 cursor-pointer hover:text-[#e24707]">
                Contact
              </h1>
            </div>
          </div>

          {/* Third Div */}
          <div className="hidden md:block flex-1 pr-16  md:py-[0.55rem] 2xl:py-[0.79rem] bg-white">
            <div className=" flex justify-center gap-3 items-center">
              <button className="border border-[#e24707] primaryBg text-white md:py-1 2xl:py-2 rounded-full px-8">
                Make a Payment
              </button>
              {accessToken ? (
                <button
                  onClick={handleLogout}
                  className="border border-[#e24707] primaryColor md:py-1 2xl:py-2 rounded-full px-8"
                >
                  logout
                </button>
              ) : (
                <Link href={"/login"}>
                  <button className="border border-[#e24707] primaryColor md:py-1 2xl:py-2 rounded-full px-8">
                    login
                  </button>
                </Link>
              )}
            </div>
          </div>

          <button
            className={`${
              scrolling ? "md:hidden text-slate-800" : "md:hidden text-white"
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <RiMenu2Fill size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden md:hidden"
      >
        <div className="flex flex-col items-center bg-white dark:bg-slate-800 pb-32 space-y-3">
          <h1 className="text-lg primaryColor cursor-pointer">Home</h1>
          <h1 className="text-lg text-slate-700 cursor-pointer hover:text-[#e24707]">
            About
          </h1>
          <h1 className="text-lg text-slate-700 cursor-pointer hover:text-[#e24707]">
            Services
          </h1>
          <h1 className="text-lg text-slate-700 cursor-pointer hover:text-[#e24707]">
            Case
          </h1>
          <h1 className="text-lg text-slate-700 cursor-pointer hover:text-[#e24707]">
            FAQ
          </h1>
          <h1 className="text-lg text-slate-700 cursor-pointer hover:text-[#e24707]">
            Blog
          </h1>
          <h1 className="text-lg text-slate-700 cursor-pointer hover:text-[#e24707]">
            Contact
          </h1>
          <div className=" flex justify-center gap-3 items-center">
            <button className="border border-[#e24707] primaryBg text-white py-2 md:py-1 2xl:py-2 rounded-full px-8">
              Make a Payment
            </button>
            {accessToken ? (
              <button
                onClick={handleLogout}
                className="border border-[#e24707] primaryColor py-2 md:py-1 2xl:py-2 rounded-full px-8"
              >
                logout
              </button>
            ) : (
              <Link href={"/login"}>
                <button className="border border-[#e24707] primaryColor py-2 md:py-1 2xl:py-2 rounded-full px-8">
                  login
                </button>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
