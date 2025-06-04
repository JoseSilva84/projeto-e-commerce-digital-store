import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Section from "./Section";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Carrosel = () => {
    return ( 
        <Carousel showThumbs={false} autoPlay infiniteLoop transitionTime={300} interval={2000}>
            <Section />
            <Section2 />
            <Section3 />
        </Carousel>
     );
}
 
export default Carrosel;