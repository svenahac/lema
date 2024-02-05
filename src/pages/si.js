import { useNavigate } from "react-router-dom";
import { CarouselDefault } from "../components/carousel";

export default function Si() {
  const navigate = useNavigate();
  const navigateToEn = () => {
    navigate("/en");
  };

  return (
    <div className="text-center">
      <button className="w-10 fixed top-1 right-1" onClick={navigateToEn}>
        <img src={require("../images/united-kingdom.png")}></img>
      </button>
      <header className="bg-main bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="font-heading font-regular text-5xl">Tiny House LeMa</h1>
      </header>
      <div className="flex flex-col items-center justify-center">
        <h2 className="mt-5 font-body text-3xl">O Mobilni Hiški</h2>
        <img
          className="mt-5 w-5/12 md:w-1/6"
          src={require("../images/logo.png")}
        ></img>
        <div className="font-body p-5 lg:text-xl lg:pl-40 lg:pr-40">
          <p className="mb-1 lg:mb-5">
            Z veliko vztrajnostjo, predanostjo, skrbnostjo ter desetletjem
            tkanja in oblikovanja ideje o postavitvi hiške, smo v letu 2024 s
            ponosom uresničili in pričeli pripovedovati turistično zgodbo.
          </p>
          <p className="mb-1 lg:mb-5">
            Hiška, ki smo jo poimenovali LeMa, se nahaja na idilični lokaciji v
            mirnem kraju Rašica pri Velikih Laščah, na poti med Ljubljano in
            Kočevjem. Obdana z naravo ponuja edinstveno izkušnjo bivanja, ki
            združuje udobje in sprostitev ali uživanje ob aktivnem preživljanju
            časa. Kraj je lahko popolno izhodišče za raziskovanje okolice, saj
            se v bližini nahajajo številne naravne lepote, pohodne in kolesarske
            poti ter znamenitosti Velikih Lašč, Rašice, Turjaka in okoliških
            krajev.
          </p>
          <p className="mb-1 lg:mb-5">
            Vas Rašica ponuja tudi bogato kulturno dediščino, saj je najbolj
            poznana kot rojstni kraj očeta slovenskega knjižnega jezika Primoža
            Trubarja. Gostje imate možnost obiskati zgodovinske znamenitosti,
            muzej in umetniško galerijo na Trubarjevi domačiji.
          </p>
          <p className="mb-1 lg:mb-5">
            Prelepa narava, pestra izbira turističnih aktivnosti in dobri ljudje
            so danes združeni v skupno blagovno znamko poimenovano Velikolaška,
            dežela slikovitih zgodb. Priložnosti in možnosti je namreč pri nas
            na pretek.
          </p>
          <p>Vabljeni!!</p>
        </div>
        <a href="mailto:lea.kopac4@gmail.com?subject=Rezervacija Mobilne Hiške">
          <button
            className="border-nonde inline-block rounded-md text-white bg-btn p-4 no-underline text-base my-1 hover:bg-btnHover"
            type="button"
          >
            Pošlji Povpraševanje
          </button>
        </a>
        <div className="flex flex-col lg:flex-row font-body mt-5 lg:text-xl lg:pl-32 lg:pr-32">
          <div className="lg:w-1/2 lg:mr-10">
            <h3 className="font-bold mb-1">Naslov</h3>
            <p className="mb-1">Rašica 73</p>
            <p className="mb-1">1315 Velike Lašče</p>
            <p>Slovenia</p>
          </div>
          <div className="mt-5 lg:mt-0 lg:w-1/2">
            <h3 className="font-bold mb-1">Kontakt</h3>
            <p className="mb-1">+386 41 356 066</p>
            <p className="mb-1">lea.kopac4@gmail.com</p>
            <a
              className="text-btn hover:text-btnHover"
              href="https://velikolaska.si/slo/tic"
              target="_blank"
            >
              Turistično Informativni Center Velike Lašče
            </a>
          </div>
        </div>
        <h2 className="mt-5 font-body text-3xl">Galerija Slik</h2>
        <CarouselDefault />
        <h2 className="mt-5 font-body text-3xl">Naša Lokacija</h2>
        <div className="flex justify-center items-cent w-11/12 lg:w-1/2 mb-5">
          <a
            target="_blank"
            href="https://www.google.com/maps/dir//Oddajanje+mobilne+hi%C5%A1ke+Lea+Poga%C4%8Dnik+Kopa%C4%8D+s.p.,+Ra%C5%A1ica+73,+1315+Velike+La%C5%A1%C4%8De/@45.8551483,14.6241779,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4764d9669da6986f:0x97f8ece1016220be!2m2!1d14.6259554!2d45.8552185?entry=ttu"
          >
            <img
              className="rounded-md mt-5 block"
              src={require("../images/map.png")}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
