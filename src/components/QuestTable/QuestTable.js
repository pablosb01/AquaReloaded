"use client";

import { useState } from "react";

export default function QuestTable() {
  const [toggle, useToggle] = useState(false);
  const [menuToggle, useMenuToggle] = useState(true);

  function handleOpenMenu() {
    useToggle(true);
  }
  function handleCloseAll() {
    useToggle(false);
  }
  function handleClick(e) {
    handleCloseAll();
  }

  return (
    <>
      <div>
        {toggle ? (
          <button onClick={handleClick}>Click me</button>
        ) : (
          <button onClick={handleOpenMenu}>click me</button>
        )}
        <div
          className={`bg-black w-full h-[100px] ${toggle ? "block" : "hidden"}`}
        ></div>
      </div>
      <div>
        {toggle ? (
          <button onClick={handleClick}>Click me</button>
        ) : (
          <button onClick={handleOpenMenu}>click me</button>
        )}
        <div
          className={`bg-black w-full h-[100px] ${toggle ? "block" : "hidden"}`}
        ></div>
      </div>
    </>
  );
}
