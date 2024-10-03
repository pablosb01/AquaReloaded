"use client";

import Test from './Test';
import TestArray from '../Test/TestArray';
import TestJSON from "../Test/TestJSON.json"

function QuestTable() {


  return (
    <div className='w-full h-full border-2 border-rose-500 text-center'>
      {TestJSON.map((item, index) => (
          <Test key={index} object={item}/>
      ))}
    </div>
  );
}

export default QuestTable;
