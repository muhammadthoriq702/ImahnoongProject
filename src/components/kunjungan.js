import React from "react";
import Photo1 from "../images/Pengamatan Okultasi.png";
import Photo2 from "../images/Outing Madrasah.jpg";
import Photo3 from "../images/Sekolah Alam.jpg";
import Navbar_kunjungan from "./navbar_kunjungan";

// export default function kunjungan()
const Kunjungan = () => {
  // const{ id }=useParams();
  return (
    <div>
      <Navbar_kunjungan />
      {/* <p> Nilai param {id} </p> */}
      <section>
        <div class="bg-gradient-to-b from-[#] via-[#b1ddcb] to-white mx-auto max-w-screen-2xl items-center justify-center px-10 py-8">
          <div class="flex justify-center">
            <h1 class="text-[#024428] mt-14 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl items-center justify-center">
              Kunjungan Eduwisata
            </h1>
          </div>
          <center>
            <span class=" inline-block justify-center items-center md:h-[4px] h-[3px] w-[40px] md:w-[200px] bg-gray-900 rounded-[5px] p"></span>
            <a
              href="https://wa.me/6285220056193"
              target="_blank"
              class="mt-10 block lg:mr-3 px-4 py-2 lg:py-2 text-black lg:bg-gray-300 lg:rounded-full hover:text-white hover:bg-[#024428] hover:transition hover:ease-in-out delay-100 w-[200px] text-center"
            >
              Kontak Kunjungan!
            </a>
          </center>

          <div class="md:mx-40 mx-4  mt-8 grid grid-cols-1  gap-x-16 gap-y-16 lg:grid-rows-1 lg:grid-cols-2 ">
            <div className="bg-gradient-to-b from-[#b1ddcb] to-[#e2f1eb] bg-opacity-75  lg:pb-6 lg:border-[2px] lg:rounded-3xl border-black">
              <div class="mx-0 my-0 ">
                <h1 class=" font-semibold font-serif relative mt-5 m-auto h-6 lg:px-16 text-[15] lg:text-[20px] leading-6 text-black rounded-xl lg:pb-16">
                  <center>Pengamatan Okultasi Bintang oleh Pluto</center>
                </h1>
                <img
                  alt="Trainer"
                  src={Photo1}
                  class="items-center mx-auto shadow-md shadow-[#000000e9] lg:h-[230px] lg:w-[300px] h-[250px] w-[300px] object-cover rounded-xl"
                />
                <div class="lg:px-10 pt-5 pb-3 px-0">
                  <p class="text-justify mt-3 mr-7 lg:pl-10 ">
                    Mahasiswa peserta Pengantar Astronomi Prodi Fisika UNPAR
                    berkesempatan untuk mencoba mengamati okultasi bintang
                    GaiaER3 6852184815383389824 oleh Planet Pluto pada malam
                    hari tanggal 1 Juni 2022. Selain mencoba melakukan
                    pengamatan, para mahasiswa juga melakukan kegiatan lainnya
                    seperti menonton film edukasi astronomi di Mushollatorium.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#b1ddcb] to-[#e2f1eb] bg-opacity-75  lg:pb-6 lg:border-[2px] lg:rounded-3xl border-black">
              <div class="mx-0 my-0 ">
                <h1 class=" font-semibold font-serif relative mt-5 m-auto h-6 lg:px-16 text-[15] lg:text-[20px] leading-6 text-black rounded-xl lg:pb-16">
                  <center>Outing Madrasah Aliyah Al-Inayah Bandung</center>
                </h1>
                <img
                  alt="Trainer"
                  src={Photo2}
                  class="items-center mx-auto shadow-md shadow-[#000000e9] lg:h-[230px] lg:w-[300px] h-[250px] w-[300px] object-cover rounded-xl"
                />
                <div class="lg:px-10 pt-5 pb-3 px-0">
                  <p class="text-justify mt-3 mr-7 lg:pl-10 ">
                    Antusias siswa - siswi Aliyah mengenal kalender Hijriyah pun
                    ketentuannya, juga praktek Rukyat Matahari mengamati
                    fenomena Bintik Hitamnya... dan praktek Rukyat Hilal tgl 1
                    Rabiul Awwal 1444 H yg belum beruntung karna awan tebal
                    menghalangi. Terima kasih banyak berkenan kunjung
                    menyaksikan Mushollatorium. Semoga semakin "penasaran"
                    (curious) terhadap ilmu & pengetahuan alam semesta
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#b1ddcb] to-[#e2f1eb] bg-opacity-75  lg:pb-6 lg:border-[2px] lg:rounded-3xl border-black">
              <div class="mx-0 my-0 ">
                <h1 class=" font-semibold font-serif relative mt-5 m-auto h-6 lg:px-16 text-[15] lg:text-[20px] leading-6 text-black rounded-xl lg:pb-16">
                  <center>Sekolah Alam Kebun Tumbuh</center>
                </h1>
                <img
                  alt="Trainer"
                  src={Photo3}
                  class="items-center mx-auto shadow-md shadow-[#000000e9] lg:h-[230px] lg:w-[300px] h-[250px] w-[300px] object-cover rounded-xl"
                />
                <div class="lg:px-10 pt-5 pb-3 px-0">
                  <p class="text-justify mt-3 mr-7 lg:pl-10 ">
                    Anak² mencoba memahami darimana asal energi bahan bakar
                    alternatif itu bisa didapat dengan mengurangi pencemaran
                    alam dan memanfaatkan alam hingga titik terkecil yang bisa
                    kita usahakan, meskipun alam semesta menyediakan energi
                    melimpah tanpa batas ehehe.. Terus bereksplorasi dan
                    mengembangjan alam ya kawan karna Bumi adalah kebun, Surga
                    bagi kita tumbuh untuk menjadi bagian dari Alam Jagat Raya.
                    <br></br>
                    #SekolahAlamKebunTumbuh
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#b1ddcb] to-[#e2f1eb] bg-opacity-75  lg:pb-6 lg:border-[2px] lg:rounded-3xl border-black">
              <div class="mx-0 my-0 ">
                <h1 class=" font-semibold font-serif relative mt-5 m-auto h-6 lg:px-16 text-[15] lg:text-[20px] leading-6 text-black rounded-xl lg:pb-16">
                  <center>Outing Madrasah Aliyah Al-Inayah Bandung</center>
                </h1>
                <img
                  alt="Trainer"
                  src={Photo2}
                  class="items-center mx-auto shadow-md shadow-[#000000e9] lg:h-[230px] lg:w-[300px] h-[250px] w-[300px] object-cover rounded-xl"
                />
                <div class="lg:px-10 pt-5 pb-3 px-0">
                  <p class="text-justify mt-3 mr-7 lg:pl-10 ">
                    Antusias siswa - siswi Aliyah mengenal kalender Hijriyah pun
                    ketentuannya, juga praktek Rukyat Matahari mengamati
                    fenomena Bintik Hitamnya... dan praktek Rukyat Hilal tgl 1
                    Rabiul Awwal 1444 H yg belum beruntung karna awan tebal
                    menghalangi. Terima kasih banyak berkenan kunjung
                    menyaksikan Mushollatorium. Semoga semakin "penasaran"
                    (curious) terhadap ilmu & pengetahuan alam semesta
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="bg-gradient-to-b from-[#] via-[#056b40] to-white mx-auto max-w-screen-2xl items-center justify-center px-[280px] py-8">
            <div class="md:mx-40 mx-4  mt-0 grid grid-cols-1  gap-x-32 gap-y-32 lg:grid-rows-1 lg:grid-cols-1 k">
              <div className="bg-gradient-to-b from-[#b1ddcb] to-[#e2f1eb] bg-opacity-75  lg:pb-6 lg:border-[2px] lg:rounded-3xl border-black">
                <div class="mx-0 my-0 ">
                  <h1 class=" font-semibold font-serif relative mt-5 m-auto h-6 lg:px-16 text-[15] lg:text-[20px] leading-6 text-black rounded-xl lg:pb-16">
                    <center>Sekolah Alam Kebun Tumbuh</center>
                  </h1>
                  <img
                    alt="Trainer"
                    src={Photo3}
                    class="items-center mx-auto shadow-md shadow-[#000000e9] lg:h-[230px] lg:w-[300px] h-[250px] w-[300px] object-cover rounded-xl"
                  />
                  <div class="lg:px-10 pt-5 pb-3 px-0">
                    <p class="text-justify mt-3 mr-7 lg:pl-10 ">
                      Anak² mencoba memahami darimana asal energi bahan bakar
                      alternatif itu bisa didapat dengan mengurangi pencemaran
                      alam dan memanfaatkan alam hingga titik terkecil yang bisa
                      kita usahakan, meskipun alam semesta menyediakan energi
                      melimpah tanpa batas ehehe.. Terus bereksplorasi dan
                      mengembangjan alam ya kawan karna Bumi adalah kebun, Surga
                      bagi kita tumbuh untuk menjadi bagian dari Alam Jagat Raya.<br></br>
                      #SekolahAlamKebunTumbuh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};
export default Kunjungan;
