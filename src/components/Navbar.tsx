"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HoveredLink,
  Menu,
  MenuItem,
} from "@/components/ui/Navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 12,
  stiffness: 120,
  restDelta: 0.001,
  restSpeed: 0.001,
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={cn(
        isMobile
          ? "fixed top-0 inset-x-0 bg-black shadow-lg z-50 py-4 px-6"
          : "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      {isMobile ? (
        <div className="flex items-center justify-between text-white">
          <Link href={"/"}>
            <div className="font-bold text-lg">Dev Decoration</div>
          </Link>
          <button
            className="md:hidden transition-transform duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      ) : (
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <Link href={"/about"}>
            <MenuItem setActive={setActive} active={active} item="About" />
          </Link>
          <MenuItem setActive={setActive} active={active} item="Decorations">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/birthday-decoration">Birthday Decoration</HoveredLink>
              <HoveredLink href="/anniversary-decoration">Anniversary Decoration</HoveredLink>
              <HoveredLink href="/special-occasion-decorations">Special Occasion Decorations</HoveredLink>
            </div>
          </MenuItem>
          <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact" />
          </Link>
        </Menu>
      )}
      {isMenuOpen && isMobile && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={transition}
            className="absolute top-full left-0 w-full bg-white rounded-b-2xl shadow-lg z-10 px-6 py-4 flex flex-col space-y-4"
          >
            <Link href={"/"} onClick={closeMenu}>
              <MenuItem setActive={setActive} active={active} item="Home" />
            </Link>
            <Link href={"/birthday-decoration"} onClick={closeMenu}>
              <MenuItem setActive={setActive} active={active} item="Birthday Decoration" />
            </Link>
            <Link href={"/anniversary-decoration"} onClick={closeMenu}>
              <MenuItem setActive={setActive} active={active} item="Anniversary Decoration" />
            </Link>
            <Link href={"/special-occasion-decorations"} onClick={closeMenu}>
              <MenuItem setActive={setActive} active={active} item="Special Occasion Decorations" />
            </Link>
            <Link href={"/about"} onClick={closeMenu}>
              <MenuItem setActive={setActive} active={active} item="About" />
            </Link>
            <Link href={"/contact"} onClick={closeMenu}>
              <MenuItem setActive={setActive} active={active} item="Contact" />
            </Link>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default Navbar;
