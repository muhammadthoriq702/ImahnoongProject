import React from "react";
import Photo1 from "../images/nehen.png";
import Photo2 from "../images/musholatorium.png";
import Photo3 from "../images/anakanak.png";
import Photo4 from "../images/p2mend.jpg";
// import js from "./components/js-show-on-scroll"

// import Photo5 from '../images/mokaku.jpeg'
// import Photo6 from '../images/mokaku2.jpeg'
// import Photo7 from '../images/mokaku3.jpeg'
// import Photo8 from '../images/mokaku4.jpg'

export default function photo() {
  return (
    <div class="">
      {/* <p> Nilai param {id} </p> */}
      <section>
        <center>
          <div class=" mx-auto max-w-screen-2xl items-center justify-center px-10 py-8">
            <div class="flex justify-center">
              {/* <div className='bg-gray-900 mb-5 h-1 flex justify-center'></div> */}
              <h2 class=" text-red-600 mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl items-center justify-center ">
                Program
              </h2>
              <h2 class="text-[#024428] mt-1  ml-[8px] text-2xl font-extrabold uppercase tracking-wide lg:text-3xl items-center justify-center ">
                Unggulan
              </h2>
            </div>
            <span class=" inline-block justify-center items-center md:h-[4px] h-[3px] w-[150px] md:w-[220px] bg-gray-900 rounded-[5px]"></span>

            <div class="md:mx-48 mx-4  mt-8 grid grid-cols-1 justify-center items-center gap-x-16 gap-y-8 lg:gap-y-16 lg:grid-cols-3">
              <div class="">
                <div class="rounded-3xl group relative block bg-black hover:scale-110 transition ease-in-out delay-100">
                  <img
                    alt="Developer"
                    src={Photo1}
                    class="rounded-3xl shadow-md shadow-[#024428] absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-50"
                  />

                  <div class="relative p-8">
                    <div class="mt-0">
                      <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p class="text-sm font-semibold text-white opacity-100">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Omnis perferendis hic asperiores quibusdam
                          quidem voluptates doloremque reiciendis nostrum harum.
                          Repudiandae?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center ">
                  <h1 class="font-semibold font-serif relative mt-5 m-auto h-6  px-4 text-[20px] leading-6 text-black rounded-xl">
                    Nehen
                  </h1>
                </div>
              </div>

              <div class="">
                <div class="rounded-3xl group relative block bg-black hover:scale-110 transition ease-in-out delay-100">
                  <img
                    alt="Developer"
                    src={Photo2}
                    class="rounded-3xl shadow-md shadow-[#024428] absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-50"
                  />

                  <div class="relative p-8">
                    <div class="mt-0">
                      <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p class="text-sm font-semibold text-white opacity-100">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Omnis perferendis hic asperiores quibusdam
                          quidem voluptates doloremque reiciendis nostrum harum.
                          Repudiandae?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center ">
                  <h1 class="font-semibold font-serif relative mt-5 m-auto h-6  px-4 text-[20px] leading-6 text-black rounded-xl">
                    Musholatorium
                  </h1>
                </div>
              </div>

              <div class="">
                <div class="rounded-3xl group relative block bg-black hover:scale-110 transition ease-in-out delay-100">
                  <img
                    alt="Developer"
                    src={Photo3}
                    class="rounded-3xl shadow-md shadow-[#024428] absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-50"
                  />

                  <div class="relative p-8">
                    <div class="mt-0">
                      <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p class="text-sm font-semibold text-white opacity-100">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Omnis perferendis hic asperiores quibusdam
                          quidem voluptates doloremque reiciendis nostrum harum.
                          Repudiandae?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center ">
                  <h1 class="font-semibold font-serif relative mt-5 m-auto h-6  px-4 text-[20px] leading-6 text-black rounded-xl">
                    Nebang
                  </h1>
                </div>
              </div>

              {/* <div className='hover:scale-110 transition ease-in-out delay-100'>
                  <img
                    src={Photo2}
                    alt="Trainer"
                    title="Tempat Ibadah sekaligus Planetarium"
                    
                    class="shadow-lg shadow-[#000000e9] -mt-3 h-[230px] w-[300px] object-cover rounded-3xl "
                    />
                  <div class="flex justify-center">
                  <h1
                    class="font-semibold font-serif relative mt-5 m-auto h-6  px-4 text-[20px] leading-6 text-black rounded-xl"
                    >
                    Musholatorium
                  </h1>
                </div>
            </div>
            <div className='hover:scale-110 transition ease-in-out delay-100'>

                  <img
                    src={Photo3}
                    title="Neropong Bareng"
                    
                    class="shadow-lg shadow-[#000000e9]  -mt-3 h-[230px] w-[300px] object-cover rounded-3xl "
                    />
                  <div class="flex justify-center">
                  <h1
                    class="font-semibold font-serif relative mt-5 m-auto h-6  px-4 text-[20px] leading-6 text-black rounded-xl"
                    >
                    NeBang
                  </h1>
                </div>
            </div> */}
            </div>
          </div>
        </center>
      </section>
    </div>
  );
}