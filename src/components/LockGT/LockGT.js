'use client';

import GTInfo from "./GTInfo";

const { useState } = require("react");

function LockGT(){

    const [toggle, setToggle] = useState(false)

    function handleGTShow(){
        setToggle(!toggle)
        console.log("uwu")
    }

    return(
        <div className="w-full border-2 border-rose-500 p-4 text-center">
            <button className={`font-bold loca-link ${toggle ? 'text-amber-500' : ''}`} onClick={handleGTShow}>{toggle ? '- CONDICIONES GENERALES' : '+ CONDICIONES GENERALES'}</button>
                <div>
                    {toggle ?
                        <GTInfo/>
                        :
                        ''
                    }
                </div>
        </div>

    )
}

export default LockGT