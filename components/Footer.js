import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center items-center gap-5 py-3 text-3xl">
      <a>
        <i class="fa-brands fa-instagram duration-200 hover:opacity-40 cursor-pointer"></i>
      </a>
      <a>
        <i class="fa-brands fa-linkedin duration-200 hover:opacity-40 cursor-pointer"></i>
      </a>
      <a>
        <i class="fa-brands fa-github duration-200 hover:opacity-40 cursor-pointer"></i>
      </a>
    </div>
  );
}
