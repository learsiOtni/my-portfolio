"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Links from "../Links/Links";

export default function SmallMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const outsideModalRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    const handleOutsideModal = (e: MouseEvent) => {
      if (outsideModalRef && outsideModalRef.current === e.target) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 576 && isOpen) {
        document.body.style.overflow = "auto";
        setIsOpen(false);
      }
    };

    const current = outsideModalRef.current;
    current?.addEventListener("click", handleOutsideModal);

    window.addEventListener("resize", handleResize);
    return () => {
      current?.removeEventListener("click", handleOutsideModal);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div
          className="fixed top-0 left-0 w-full h-full bg-slate-100/20 z-10 overflow-hidden"
          ref={outsideModalRef}
        >
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            onClick={toggleMenu}
            className="cursor-pointer absolute p-5 top-0 right-0"
          />

          <nav
            id="small-menu"
            className="absolute top-12 right-0 bg-[#0f182d] rounded h-[80%] w-[200px]"
          >
            <ul className="p-5 flex flex-col gap-10 items-end">
              <Links onItemClick={toggleMenu} noActiveLink />
            </ul>
          </nav>
        </div>
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          size="lg"
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      )}
    </>
  );
}
