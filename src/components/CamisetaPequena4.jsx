import { useState } from "react";
import Headphones2 from "../assets/headphones2.png";
import Headphones from "../assets/headphones.png";

const CamisetaPequena4 = () => {
    const [hovered, setHovered] = useState(false);

    return ( 
        <>
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center hover:shadow-2xl">
                <img
                    src={hovered ? Headphones2 : Headphones}
                    alt="Camiseta"
                    className="w-20 h-20 m-12 hover:scale-110 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                />
            </div>
        </>
     );
}
 
export default CamisetaPequena4;