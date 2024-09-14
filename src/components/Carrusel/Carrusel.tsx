import { Carousel } from "flowbite-react";
import img1 from "../../assets/img/guitarra_01.png";
import img2 from "../../assets/img/guitarra_02.jpg";
import img3 from "../../assets/img/guitarra_03.jpg";

import { Button } from "flowbite-react";

const Carrusel = () => {
  return (
    <div className="w-4/5 mx-auto h-[620px]">
      <Carousel>
        <img src={img1} alt="Imagen 1" />
        <img src={img2} alt="Imagen 2" />
        <img src={img3} alt="Imagen 3" />
      </Carousel>
    </div>
  );
};

export default Carrusel;
