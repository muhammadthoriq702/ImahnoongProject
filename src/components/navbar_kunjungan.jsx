import React from "react";
import { SiFacebook } from "react-icons/si";
import Photo1 from "../images/imahnoong.png";
import { useState } from "react";

function Navbar_kunjungan() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);
  return (
    <div class="w-full md:fixed z-50 backdrop-blur-sm shadow-transparent">
      <div class="flex flex-col lg:flex-row justify-between py-4 px-4 ">
        <div class="flex items-center justify-between px-4 py-4 lg:py-0  ">
          <div>
            <a href="#" class="font-semibold uppercase text-gray-900">
              <img alt="Man" src={Photo1} class="h-14 w-30  object-cover" />
            </a>
          </div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="font-  semibold text-gray-900 focus:outline-none block lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  class={!isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
                <path
                  class={isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          class={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row py-4 lg:py-0`}
        >
          <div class="flex place-items-end lg:items-center flex-col lg:flex-row">
            <a
              onClick={() => setIsClick(!isClick)}
              href="/"
              class=" {isClick ? 'block' : 'hidden'} block lg:mr-3 px-4 py-2 lg:py-2 text-black lg:bg-gray-300 lg:rounded-full hover:text-white hover:border-b-2  hover:border-gray-300 hover:bg-[#024428] hover:transition hover:ease-in-out delay-100 focus:bg-[#024428]"
            >
              Beranda
            </a>
            <a
              href="/fasilitas"
              class="block lg:mr-3 px-4 py-2 lg:py-2 text-black lg:bg-gray-300 lg:rounded-full hover:text-white hover:border-b-2  hover:border-gray-300 hover:bg-[#024428] hover:transition hover:ease-in-out delay-100 focus:bg-[#024428]"
            >
              Fasilitas
            </a>
            <a
              href="/penjualan&pembelian"
              class="block lg:mr-3 px-4 py-2 lg:py-2 text-black lg:bg-gray-300 lg:rounded-full hover:text-white hover:border-b-2  hover:border-gray-300 hover:bg-[#024428] hover:transition hover:ease-in-out delay-100 focus:bg-[#024428]"
            >
              Penjualan & Peminjaman
            </a>
            <a
              href="/kunjungan"
              class="block px-4 py-2 lg:py-2 text-white lg:bg-[#024428] lg:rounded-full hover:text-white hover:border-b-2  hover:border-gray-300 hover:bg-[#024428] hover:transition hover:ease-in-out delay-100 focus:bg-[#024428]"
            >
              Kunjungan Eduwisata
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar_kunjungan;
