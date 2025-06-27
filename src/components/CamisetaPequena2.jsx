import { useState } from "react";
import Calcas2 from "../assets/calcas2.png";
import Calcas from "../assets/calcas.png";

const CamisetaPequena2 = () => {
    const [hovered, setHovered] = useState(false);

    return ( 
        <>
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center hover:shadow-2xl">
                <img
                    src={hovered ? Calcas2 : Calcas}
                    alt="Camiseta"
                    className="w-20 h-20 m-12 hover:scale-110 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                />
            </div>
        </>
     );
}
 
export default CamisetaPequena2;