import { useState } from "react";
import Camisetas2 from "../assets/camisetas2.png";
import Camisetas from "../assets/camisetas.png";

const CamisetaPequena = () => {
    const [hovered, setHovered] = useState(false);

    return ( 
        <>
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center hover:shadow-2xl">
                <img
                    src={hovered ? Camisetas2 : Camisetas}
                    alt="Camiseta"
                    className="w-20 h-20 m-12 hover:scale-110 cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                />
            </div>
        </>
     );
}
 
export default CamisetaPequena;