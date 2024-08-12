'use client';

import Test from "./Test";
import TestLockersArray from "../Test/TestLockersArray";

function QuestTableLock(){

    return (
        <div className='w-full h-full border-2 border-rose-500 text-center'>
      {TestLockersArray.map((item, index) => (
          <Test key={index} object={item}/>
      ))}
    </div>
    )
}

export default QuestTableLock;