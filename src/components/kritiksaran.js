import "../App.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

const Kritiksaran = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [kritik, setKritik] = useState("");

  const handleSubmit = () => {
    const data = {
      name: name,
      email: email,
      kritik: kritik,
    };

    console.log(data);

    Axios.post("http://localhost:8000/api/register", data)
      .then(() => {
        alert("Sukses mengirim Kritik dan Saran");
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div class="mx-auto">
      <center>
        <div name="">
          <h2 class=" text-[#024428] mt-5 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl items-center justify-center ">
            Lokasi Kami
          </h2>
          <span class=" inline-block justify-center items-center md:h-[4px] h-[3px] w-[100px] md:w-[150px] bg-gray-900 rounded-[5px] mb-6 mt-2"></span>
        </div>

        <div className="items-center  lg:pb-0 lg:border-[2px] lg:rounded-3xl border-black w-full lg:w-[905px]">
          <iframe
            className=" mx-auto rounded-2xl lg:rounded-3xl w-[390px] h-[300px] lg:w-[900px] lg:h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.484943678282!2d107.61640271468922!3d-6.832310295062199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e127020be60b%3A0x407817eebb5c1bc1!2sImahnoong!5e0!3m2!1sen!2sid!4v1672445265857!5m2!1sen!2sid"
       
          ></iframe>
        </div>
        <br></br>
        <div class=" w-[300px] md:w-[500px] rounded-[30px] mx-auto  overflow-hidden">
          <div class="mx-auto pt-2 pb-6">
            <div class=" justify-center">
              {/* <div className='bg-gray-900 mb-5 h-1 flex justify-center'></div> */}
              <div name="flex">
                <h2 class="text-[#024428] mt-1  ml-[8px] text-2xl font-extrabold uppercase tracking-wide lg:text-3xl items-center justify-center ">
                  Kritik & Saran
                </h2>
                <span class=" inline-block justify-center items-center md:h-[4px] h-[3px] w-[100px] md:w-[150px] bg-gray-900 rounded-[5px] mb-6 mt-2"></span>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="border border-gray-400 py-2 px-4 rounded-xl w-[250px] lg:w-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>

                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  placeholder="Masukkan Nama Anda"
                  class="outline-none w-[250px] lg:w-96 pl-2"
                ></input>
              </div>
              <div class="border border-gray-400 py-2 px-4 rounded-xl w-[250px] lg:w-full flex items-center mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>

                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="Masukkan E-mail Anda"
                  class="w-[250px] lg:w-96 pl-2 outline-none"
                ></input>
              </div>
              <div class="border border-gray-400 py-2 px-4 rounded-xl w-[250px] lg:w-full mx-auto  flex items-center mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="text"
                  id="kritik"
                  value={kritik}
                  onChange={(event) => setKritik(event.target.value)}
                  required
                  placeholder="Kritik dan Saran Anda"
                  class="w-[250px] lg:w-96 outline-none pl-2"
                ></input>
              </div>
              <div class="mt-7">
                <button class="w-[40%] md:w-1/4 bg-[#024428] hover:bg-[#447662] py-2 rounded-xl text-white hover:text-gray-100 font-bold text-lg">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Kritiksaran;
