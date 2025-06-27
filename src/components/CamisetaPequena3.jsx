import { useState } from "react";
import Tenis2 from "../assets/tenis2.png";
import Tenis from "../assets/tenis.png";

const CamisetaPequena3 = () => {
    const [hovered, setHovered] = useState(false);

    return ( 
        <>
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center hover:shadow-2xl">
                <img
                    src={hovered ? Tenis2 : Tenis}
                    alt="Camiseta"
                    className="w-20 h-20 m-12 hover:scale-110 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                />
            </div>
        </>
     );
}
 
export default CamisetaPequena3;