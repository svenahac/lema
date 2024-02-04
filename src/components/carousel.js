import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <Carousel
      children="9"
      loop="true"
      className="rounded-xl w-11/12 lg:w-1/2 mt-5"
    >
      <img
        src={require("../images/main.jpg")}
        alt="Outside"
        className="h-full w-full object-cover"
      />
      <img
        src={require("../images/1.png")}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={require("../images/2.png")}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src={require("../images/3.png")}
        alt="Outside"
        className="h-full w-full object-cover"
      />
      <img
        src={require("../images/4.png")}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={require("../images/5.png")}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src={require("../images/6.png")}
        alt="Outside"
        className="h-full w-full object-cover"
      />
      <img
        src={require("../images/7.png")}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={require("../images/8.png")}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
