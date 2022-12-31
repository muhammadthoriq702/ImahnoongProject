import Artikel from "./artikel";
import Mitra from "./mitra";
import Programunggul from "./programunggul";
import Bannerr from "./bannerr";
import React from "react";
import Kritiksaran from "./kritiksaran";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar_main from "./navbar_main";

const main = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div className='overflow-hidden'>
      <Navbar_main />
      <Bannerr />
      <Artikel />
      <Programunggul />
      <Kritiksaran/>
      <Mitra />
    </div>
  );
};

export default main;
