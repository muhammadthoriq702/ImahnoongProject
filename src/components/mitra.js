import React from "react";
import Photo1 from "../images/Kementerian Agama.png";
import Photo2 from "../images/BUMN.png";
import Photo3 from "../images/Pertamina.png";
import Photo4 from "../images/Alumni ITB.png";
import Photo5 from "../images/PUPT ITB.png";
import Photo6 from "../images/Alumni ITB .png";

export default function Mitra() {
  return (
    <div>
      <section>
        <div class="mt-10 mx-auto max-w-screen-2xl px-10 pt-0 pb-8 text-center">
          <h1 class="text-[#024428] mt-1 text-xl font-extrabold uppercase tracking-wide lg:text-xl items-center justify-center">
            MITRA IMAHNOONG
          </h1>
          <span class=" inline-block justify-center items-center md:h-[4px] h-[3px] w-[150px] md:w-[100px] bg-gray-900 rounded-[5px]"></span>
          <center>
            <div class="w-[50%] mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-6 items-end">
              <div className="hover:scale-105">
                <img src={Photo1} alt="Trainer" />
              </div>

              <div className="hover:scale-105">
                <img src={Photo2} alt="Trainer" />
              </div>

              <div className="w-[70%] mx-auto hover:scale-105">
                <img src={Photo3} alt="Trainer" />
              </div>

              <div className="hover:scale-105">
                <img src={Photo4} alt="Trainer" />
              </div>

              <div className="hover:scale-105">
                <img src={Photo5} alt="Trainer" />
              </div>

              <div className="w-[70%] mx-auto hover:scale-105">
                <img src={Photo6} alt="Trainer" />
              </div>
            </div>
          </center>
        </div>
      </section>
    </div>
  );
}
