import { useNavigate } from "react-router-dom";
import { CarouselDefault } from "../components/carousel";

export default function En() {
  const navigate = useNavigate();
  const navigateToSi = () => {
    navigate("/si");
  };
  return (
    <div className="text-center">
      <button className="w-10 fixed top-1 right-1" onClick={navigateToSi}>
        <img src={require("../images/slovenia.png")}></img>
      </button>
      <header className="bg-main bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="font-heading font-regular text-5xl">Tiny House LeMa</h1>
      </header>
      <div className="flex flex-col items-center justify-center">
        <h2 className="mt-5 font-body text-3xl">About The Mobile House</h2>
        <img
          className="mt-5 w-5/12 md:w-1/6"
          src={require("../images/logo.png")}
        ></img>
        <div className="font-body p-5 lg:text-xl lg:pl-40 lg:pr-40">
          <p className="mb-1 lg:mb-5">
            With great persistence, dedication, care, and a decade of weaving
            and shaping the idea of setting up a cottage, in the year 2024 we
            proudly realized and began to tell a tourist tale.
          </p>
          <p className="mb-1 lg:mb-5">
            The cottage, which we named LeMa, is found in an idyllic location in
            the peaceful village of Rašica near Velike Lašče, situated between
            cities Ljubljana and Kočevje. Surrounded by nature, it offers a
            unique living experience that combines comfort and relaxation or
            enjoyment while spending time actively. The place can be a perfect
            starting point for exploring the surrounding area, as the best
            natural beauties, hiking and cycling trails, and sights of Velike
            Lašče, Rašica, Turjak, and the surrounding areas can be found
            nearby.
          </p>
          <p className="mb-1 lg:mb-5">
            The village of Rašica also offers a rich cultural heritage, as it is
            best known as the birthplace of Primož Trubar, the father of the
            Slovenian written language. Guests can visit historical sites, a
            museum, and an art gallery at the Trubar homestead.
          </p>
          <p className="mb-1 lg:mb-5">
            Beautiful nature, a wide selection of tourist activities, and good
            people are today united in a common brand called Velikolaška, the
            land of picturesque stories. Opportunities and possibilities abound
            here.
          </p>
          <p>Welcome!</p>
        </div>
        <a href="mailto:lea.kopac4@gmail.com?subject=Mobile House Reservation">
          <button
            className="border-nonde inline-block rounded-md text-white bg-btn p-4 no-underline text-base my-1 hover:bg-btnHover"
            type="button"
          >
            Send Inquiry
          </button>
        </a>
        <div className="flex flex-col lg:flex-row font-body mt-5 lg:text-xl lg:pl-32 lg:pr-32">
          <div className="lg:w-1/2 lg:mr-10">
            <h3 className="font-bold mb-1">Address</h3>
            <p className="mb-1">Rašica 73</p>
            <p className="mb-1">1315 Velike Lašče</p>
            <p>Slovenia</p>
          </div>
          <div className="mt-5 lg:mt-0 lg:w-1/2">
            <h3 className="font-bold mb-1">Contact</h3>
            <p className="mb-1">+386 41 356 066</p>
            <p className="mb-1">lea.kopac4@gmail.com</p>
            <a
              className="text-btn hover:text-btnHover"
              href="https://velikolaska.si/slo/tic"
              target="_blank"
            >
              Tourist Information Center Velike Lašče
            </a>
          </div>
        </div>
        <h2 className="mt-5 font-body text-3xl">Image Gallery</h2>
        <CarouselDefault />
        <h2 className="mt-5 font-body text-3xl">Our Location</h2>
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
