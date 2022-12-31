import React from "react";
import Photo1 from "../images/Fasilbiogas.jpg";
import Photo2 from "../images/Mushollatorium.jpg";
import Photo3 from "../images/saung noong 1.jpg";
import Photo4 from "../images/saung noong 2 (lama).png";
import Photo5 from "../images/saung noong 2 (revisi).jpg";
import Navbar_fasil from "./navbar_fasil";

export default function fasilitas() {
  return (
    <div>
      <Navbar_fasil />
      <section class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:items-center">
          <div class="mx-auto max-w-x1 text-center">
            <h1 class="text-[#024428] mt-8 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl items-center justify-center">
              Fasilitas
            </h1>
            <span class=" inline-block justify-center items-center md:h-[4px] h-[3px] w-[150px] md:w-[100px] bg-gray-900 rounded-[5px]"></span>
            <div class="max-w-5xl px-4 py-8">
              <p>
                Sebagai sebuah Observatorium, Imahnoong saat ini dilengkapi
                dengan sejumlah perangkat potable dan dua rumah teleskop
                permanen. Planetarium/Musholatorium tersedia untuk fasilitas
                presentasi dan rumah ibadah. Tersedia juga reaktor BioGas dan
                ruang pertemuan.
              </p>
              <br></br>
              <section class="rounded-lg bg-gray-100 p-8">
                <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                  <img
                    src={Photo1}
                    class="aspect-square w-full rounded-lg object-cover"
                  />

                  <blockquote class="sm:col-span-2">
                    <h1 class="mt-1 text-2xl font-extrabold text-black sm:ml-3 text-left ">
                      <span class="mt-1 hidden h-px w-6 bg-black sm:inline-block sm:text-2xl"></span>
                      BIOGAS
                    </h1>
                    <p class="mt-1 text-m font-medium text-left">
                      <strong>Model Biogas :</strong> Biogas Digester Plant /
                      Pengurai Biogas Tanam<br></br>
                      <strong>Kapasitas Reaktor :</strong> 500L dan 3000L
                      <br></br>
                      <strong>Efisiensi Gas :</strong> 40 menit dan 120 menit
                      menggunakan kompor tekanan rendah<br></br>
                      <strong>Pengisian :</strong> 1 kg Sampah Organic + 1 L Air
                      dan 3 Kg sampah Organik + 3 L Air setiap hari<br></br>
                      <strong>Interval Produksi Gas :</strong> Kurleb 5 jam dan
                      7 jam<br></br>
                      <strong>Rencana pengembangan :</strong> <br></br>
                      <li>
                        Menciptakan kebiasaan memilah sampah Organik dan
                        non-organik
                      </li>
                      <li>Membangun dapur umum / dapur darurat</li>
                      <li>
                        Pemanfaatan limbah Biogas menjadi pupuk kompos dan cair
                      </li>
                    </p>
                  </blockquote>
                </div>
              </section>

              <section class="rounded-lg bg-gray-100 p-8">
                <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                  <img
                    src={Photo2}
                    class="aspect-square w-full rounded-lg object-cover"
                  />
                  <blockquote class="sm:col-span-2">
                    <h1 class="mt-1 text-2xl font-extrabold text-black sm:ml-3 text-left ">
                      <span class="mt-1 hidden h-px w-6 bg-black sm:inline-block sm:text-2xl"></span>
                      MUSHOLATORIUM
                    </h1>
                    <p class="mt-1 text-m font-medium text-left">
                      <strong>Model :</strong> Classic Planetarium <br></br>
                      <strong>Sistem Projektor :</strong> Projektor Tunggal{" "}
                      <br></br>
                      <strong>Sistem Kontrol :</strong> Shira Universe Pro{" "}
                      <br></br>
                      <strong>Sistem Audio :</strong> Stereo 5.1 <br></br>
                      <strong>Resolusi Display :</strong> 2K <br></br>
                      <strong>Bentuk atap :</strong> Kubah Permanen <br></br>
                      <strong>Dimensi bangunan :</strong> dia. 600cm x 400cm{" "}
                      <br></br>
                      <strong>Kapasitas :</strong> 30 - 40 Dewasa / 50 anak-anak{" "}
                      <br></br>
                      <strong>Rencana kedepan :</strong> <br></br>
                      <li>Pembangunan Jejaring Mushollatorium Indonesia</li>
                      <li>Pembuatan Film Fulldome Planetarium</li>
                      <li>Dubbing film Fulldome</li>
                      <strong>Aktivitas saat ini :</strong> menerima kunjungan
                      pembelajaran Astronomi bagi sekolah, Perguruan tinggi dan
                      instansi terkait
                    </p>
                  </blockquote>
                </div>
              </section>

              <section class="rounded-lg bg-gray-100 p-8">
                <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                  <img
                    src={Photo3}
                    class="aspect-square w-full rounded-lg object-cover"
                  />

                  <blockquote class="sm:col-span-2">
                    <h1 class="mt-1 text-2xl font-extrabold text-black sm:ml-3 text-left ">
                      <span class="mt-1 hidden h-px w-6 bg-black sm:inline-block sm:text-2xl"></span>
                      SAUNG NOONG I
                    </h1>
                    <p class="mt-1 text-m font-medium text-left">
                      <strong>Model :</strong> Sliding Roof (double Reel)
                      <br></br>
                      <strong>Ukuran :</strong> 2.2 x 3,3 Meter<br></br>
                      <strong>Sitem Atap :</strong> Motorize with IoT<br></br>
                      <strong>Teleskop :</strong> GSO 12”<br></br>
                      <strong>Mount :</strong> iOptron CEM120<br></br>
                      <strong>Obyek :</strong> Bulan – Bintang – Deep Space
                      Objects <br></br>
                      <strong>Rencana Pengembangan :</strong> <br></br>
                      <li>Remote Control</li>
                      <strong>Kondisi Saat ini :</strong> <br></br>
                      <li>Berfungsi dengan baik</li>
                    </p>
                  </blockquote>
                </div>
              </section>

              <section class="rounded-lg bg-gray-100 p-8">
                <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                  <img
                    src={Photo4}
                    class="aspect-square w-full rounded-lg object-cover"
                  />
                  <blockquote class="sm:col-span-2">
                    <h1 class="mt-1 text-2xl font-extrabold text-black sm:ml-3 text-left ">
                      <span class="mt-1 hidden h-px w-6 bg-black sm:inline-block sm:text-2xl"></span>
                      SAUNG NOONG II (Lama)
                    </h1>
                    <p class="mt-1 text-m font-medium text-left">
                      <strong>Model :</strong> Double Sliding Roof<br></br>
                      <strong>Ukuran :</strong> 1,5 x 2 Meter<br></br>
                      <strong>Sitem Atap :</strong> Manual<br></br>
                      <strong>Teleskop :</strong> Refractor 70mm <br></br>
                      <strong>Mount :</strong> iOptron CEM60<br></br>
                      <strong>Obyek :</strong> Bulan – Bintang – Deep Space
                      Objects <br></br>
                      <strong>Rencana Pengembangan :</strong> <br></br>
                      <li>Sistem Atap Pengembangan IoT</li>
                      <strong>Kondisi Saat ini :</strong> <br></br>
                      <li>Sedang Pemeliharaan</li>
                    </p>
                  </blockquote>
                </div>
              </section>

              <section class="rounded-lg bg-gray-100 p-8">
                <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                  <img
                    src={Photo5}
                    class="aspect-square w-full rounded-lg object-cover"
                  />
                  <blockquote class="sm:col-span-2">
                    <h1 class="mt-1 text-2xl font-extrabold text-black sm:ml-3 text-left ">
                      <span class="mt-1 hidden h-px w-6 bg-black sm:inline-block sm:text-2xl"></span>
                      SAUNG NOONG II (Baru)
                    </h1>
                    <p class="mt-1 text-m font-medium text-left">
                      <strong>Model :</strong> Double Sliding Roof<br></br>
                      <strong>Ukuran :</strong> 1,5 x 2 Meter<br></br>
                      <strong>Sitem Atap :</strong> Manual<br></br>
                      <strong>Teleskop :</strong> Refractor 70mm <br></br>
                      <strong>Mount :</strong> iOptron CEM60<br></br>
                      <strong>Obyek :</strong> Bulan – Bintang – Deep Space
                      Objects <br></br>
                      <strong>Rencana Pengembangan :</strong> <br></br>
                      <li>Sistem Atap Pengembangan IoT</li>
                      <strong>Kondisi Saat ini :</strong> <br></br>
                      <li>Sedang Pemeliharaan</li>
                    </p>
                  </blockquote>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
