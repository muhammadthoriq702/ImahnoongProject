import React from "react";
import Photo1 from "../images/Gso Straight.jpg";
import Photo2 from "../images/Celectron Teleskop.jpg";
import Photo3 from "../images/Eyepiece Baader.jpg";
import Photo4 from "../images/Kamera Atik Kit.jpg";
import Navbar_penjualan from "./navbar_penjualan";

const Penjualan = () => {
  // const{ id }=useParams();
  return (
    <section>
      <Navbar_penjualan />
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 text-center">
        <header>
        <h1 class="text-[#024428] mt-10 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl items-center justify-center">
              Penjualan & Peminjaman
            </h1>
          <span class=" inline-block justify-center md:h-[4px] h-[3px] w-[150px] md:w-[200px] bg-gray-900 rounded-[5px]"></span>

          <p class="mt-4 text-gray-500">
            Menyediakan peralatan Astronomi di Indonesia yang dikelola oleh
            alumnus Astronomi ITB. Berbekal pengalaman selama 10 tahun bekerja
            di Observatorium Bosscha, kami siap membantu anda untuk memperoleh
            peralatan yang paling sesuai untuk kebutuhan anda. Kami tidak semata
            menjual peralatan, namun kami membantu untuk memilih barang yang
            paling sesuai untuk keperluan Anda.
          </p>
        </header>

        <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <a
              href="https://tokoteleskop.com/one/finder-scope/281-gso-8x50mm-straight-through-achromatic-finder-white.html?search_query=gso+straight&results=28"
              target="_blank"
              class="block overflow-hidden group"
            >
              <img src={Photo1} />

              <div class="relative pt-3 bg-white">
                <h3 class="text-l text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Gso Straight
                </h3>
              </div>
            </a>
          </li>

          <li>
            <a
              href="https://tokoteleskop.com/"
              target="_blank"
              class="block overflow-hidden group"
            >
              <img src={Photo2} />

              <div class="relative pt-3 bg-white">
                <h3 class="text-l text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Celectron Teleskop
                </h3>
              </div>
            </a>
          </li>

          <li>
            <a
              href="https://tokoteleskop.com/one/diagonal-eyepiece/291-baader-2-clicklock-diagonal-mirror-m68-thread.html?search_query=baader&results=4"
              target="_blank"
              class="block overflow-hidden group"
            >
              <img src={Photo3} />

              <div class="relative pt-3 bg-white">
                <h3 class="text-l text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Eyepiece Baader
                </h3>
              </div>
            </a>
          </li>

          <li>
            <a
              href="https://tokoteleskop.com/one/home/85-atik-one-90-integrated-kit.html?search_query=atik&results=4"
              target="_blank"
              class="block overflow-hidden group"
            >
              <img src={Photo4} />

              <div class="relative pt-3 bg-white">
                <h3 class="text-l text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Kamera Atik Kit
                </h3>
              </div>
            </a>
          </li>
        </ul>
        <center>
        <a
          href="https://tokoteleskop.com/"
          target="_blank"
          class="mt-10 block lg:mr-3 px-4 py-2 lg:py-2 text-black lg:bg-gray-300 lg:rounded-full hover:text-white hover:border-b-2  hover:border-gray-300 hover:bg-[#024428] hover:transition hover:ease-in-out delay-100 w-[200px] text-center"
        >
          Lihat Selengkapnya!
        </a>
        </center>
      </div>
    </section>
  );
};
export default Penjualan;
