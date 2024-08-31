"use client";

import Test from './Test';
import TestArray from '../Test/TestArray';

function QuestTable() {


  return (
    <div className='w-full h-full border-2 border-rose-500 text-center'>
      {TestArray.map((item, index) => (
          <Test key={index} object={item}/>
      ))}
    </div>
    /* <div>
      <details open={openDetail === 0} onToggle={() => handleToggle(0)}>
        <summary>Detalle 1</summary>
        <p>Contenido del detalle 1.</p>
      </details>

      <details open={openDetail === 1} onToggle={() => handleToggle(1)}>
        <summary>Detalle 2</summary>
        <p>Contenido del detalle 2.</p>
      </details>

      <details open={openDetail === 2} onToggle={() => handleToggle(2)}>
        <summary>Detalle 3</summary>
        <p>Contenido del detalle 3.</p>
      </details>
    </div> */
  

  );
}

export default QuestTable;
