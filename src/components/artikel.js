import React from "react";
import Photo1 from "../images/gerhana.jpg";
import Photo2 from "../images/samagaha.jpg";
import Photo3 from "../images/pasarramadhan.jpg";
import Photo4 from "../images/malam.jpg";

// export default function product()
const Product = () => {
  // const{ id }=useParams();
  return (
    <div>
      {/* <p> Nilai param {id} </p> */}
      <section>
        <div class="bg-gradient-to-b from-[#] via-[#b1ddcb] to-white mx-auto max-w-screen-2xl items-center justify-center px-10 py-8">
          <div class="flex justify-center">
            <h2 class=" text-[#024428] mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl items-center justify-center ">
              Artikel
            </h2>
          </div>
          <center>
            <span class=" inline-block justify-center items-center md:h-[4px] h-[3px] w-[40px] md:w-[80px] bg-gray-900 rounded-[5px] p"></span>
          </center>

          <div class="md:mx-40 mx-4  md:mt-8 grid grid-cols-1 justify-center items-center gap-x-16 gap-y-16 lg:grid-rows-4">
            <div className=" md:bg-gradient-to-b from-[#b1ddcb] to-[#e2f1eb] bg-opacity-75 lg:pb-6 lg:border-[2px] lg:rounded-3xl border-black">
              <div class="mx-0 my-0 ">
                <h1 class=" font-semibold font-serif relative mt-5 m-auto h-6 lg:px-16 text-[15] lg:text-[20px] leading-6 text-black rounded-xl">
                  <center>Gerhana Matahari Total</center>
                </h1>
                <div class="lg:flex lg:px-10 pt-5 pb-3 px-0">
                  <img
                    alt="Trainer"
                    src={Photo1}
                    class=" shadow-md shadow-[#000000e9] lg:h-[230px] lg:w-[300px] h-[190px] w-[300px] object-cover rounded-xl"
                  />

                  <p class="text-justify mt-3 lg:pl-10 ">
                    Gerhana Matahari Total tahun 2016 Memecahkan rekor muri
                    Kacamata Gerhana Terbesar. Ukuran yang menyerupai 'Buto Ijo'
                    Raksasa Pemakan Matahari dengan panjang 960 cm dan lebar 60
                    cm. Kacamata ini didesai meiliki 9 lubang, setiap lubang
                    dipasangi filter berbahan Black Polimer Neutral Densitu
                    (ND)-5 sehingga dijamin aman. Kacamata ini menghabiskan
                    biaya sekitar Rp 50-60 juta, yang mahal terdapat pada
                    penggunaan bahan akrilik sebagai bingkai kacamatanya,
                    ditambah dengan harga filter kacamata yang mencapai Rp15
                    juta.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:bg-gradient-to-b from-[#b1ddcb] to-[#e2f1eb] bg-opacity-75 lg:pb-6 lg:border-[2px] lg:rounded-3xl border-black">
              <div class="mx-0 my-0">
                <h1 class=" font-semibold font-serif relative mt-5 m-auto h-6 lg:px-16 text-[15] lg:text-[20px] leading-6 text-black rounded-xl">
                  <center>Samagaha</center>
                </h1>
                <div class="lg:flex lg:px-10 pt-5 pb-3 px-0">
                  <img
                    alt="Trainer"
                    src={Photo2}
                    class=" shadow-md shadow-[#000000e9] lg:h-[230px] lg:w-[300px] h-[300px] w-[300px] object-cover rounded-xl"
                  />

                  <p class="text-justify mt-3 lg:pl-10 ">
                    "Samagaha - Sebuah Kisah Tentang Gerhana", adalah sebuah
                    film animasi pendek berformat <i> fulldome digital </i>{" "}
                    hasil kerjasama antara Imahnoong dan Amphibi Studio yang
                    disutradarai oleh Rizky BR. Film ini bercerita tentang
                    sepasang kakak adik Ndari dan Ndaru bersama teman-temannya
                    yang menyaksikan secara langsung peristiwa gerhana bulan.
                    Mereka mengira bulan sedang dimakan raksasa jahat bernama
                    Batara Kala. Apa yang sebenarnya sedang terjadi? Benarkah
                    bulan dimakan raksasa? Cari tahu jawabannya dalam film ini.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:bg-gradient-to-b from-[#b1ddcb] to-[#e2f1eb] bg-opacity-75 lg:pb-6 lg:border-[2px] lg:rounded-3xl border-black">
              <div class="mx-0 my-0">
                <h1 class=" font-semibold font-serif relative mt-5 m-auto h-6 lg:px-16 text-[15] lg:text-[20px] leading-6 text-black rounded-xl">
                  <center>Pasar Purnama tahun</center>
                </h1>
                <div class="lg:flex lg:px-10 pt-5 pb-3 px-0">
                  <img
                    alt="Trainer"
                    src={Photo3}
                    class=" shadow-md shadow-[#000000e9] lg:h-[230px] lg:w-[300px] h-[300px] w-[300px] object-cover rounded-xl"
                  />

                  <p class="text-justify mt-3 lg:pt-5 lg:pl-10 ">
                    Pasar Purnama digelar saar bulan Purnama. Kegiatan ini baru
                    dapat digelar sebanyak 3 kali. Terakhir diselenggarakan
                    tahun 2019 bertepatan dengan bulan Ramadhan. Berbagai macam
                    jajanan hingga produk kerajinan tangan warga sekitar tersaji
                    dengan baik. Bukan hanya berbelanja dan kuliner, tetapi
                    pengunjung bisa menyaksikan fenomena luar angkasa melalui
                    Observatorium Mini yang ada di Imahnoong.
                  </p>
                </div>
                <div class=" prose max-w-none group-open:hidden"></div>
              </div>
            </div>

            <div className="md:bg-gradient-to-b from-[#b1ddcb] to-[#e2f1eb] bg-opacity-75 lg:pb-6 lg:border-[2px] lg:rounded-3xl border-black">
              <div class="mx-0 my-0">
                <h1 class=" font-semibold font-serif relative mt-5 m-auto h-6 lg:px-16 text-[15] lg:text-[20px] leading-6 text-black rounded-xl">
                  <center>Malam Pengamatan IMAHNOONG</center>
                </h1>
                <div class="lg:flex lg:px-10 pt-6 pb-3 px-0">
                  <img
                    alt="Trainer"
                    src={Photo4}
                    class="shadow-md shadow-[#000000e9] lg:h-[230px] lg:w-[300px] h-[300px] w-[300px] object-cover rounded-xl"
                  />

                  <p class="text-justify mt-3 lg:pt-12 lg:pl-10 ">
                    Backyard Observatory & Mushollatorium Jadikan liburan teman
                    teman lebih berbeda, Meneropong objek langit malam, mengenal
                    lebih dekat hangatnya gelap langit malam bertabur cahaya
                    Bulan berhias Bintang
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Product;
