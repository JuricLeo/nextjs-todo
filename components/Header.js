import React, { useEffect, useState } from "react";
import Modal from "./Modal";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="sticky top-0 left-0 w-full flex items-center justify-between p-4 bg-inherit border-b border-solid border-white">
        <h1 className="text-3xl select-none sm:text-6xl">Todo List</h1>
        <i
          onClick={() => {
            setOpenModal(true);
          }}
          className="fa-regular fa-user text-xl sm:text-3xl duration-200 hover:opacity-40 cursor-pointer"
        ></i>
      </div>
    </>
  );
}
