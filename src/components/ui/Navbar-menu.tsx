"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link, { LinkProps } from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 12,
  stiffness: 120,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  className = "",
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div 
      onMouseEnter={() => setActive(item)} 
      className={`relative group ${className}`}
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer 
          text-black
          text-base
          font-bold
          dark:text-white 
          group-hover:text-pink-500 
          transition-colors 
          duration-300
          ml-1
          "
          
      >
        {item}
      </motion.p>
      <AnimatePresence>
        {active === item && children && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={transition}
            className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2 z-50"
          >
            <motion.div
              layoutId="active"
              className="
                bg-white 
                dark:bg-neutral-900 
                backdrop-blur-md 
                rounded-2xl 
                overflow-hidden 
                border 
                border-black/10 
                dark:border-white/10 
                shadow-2xl
                "
            >
              <motion.div
                layout
                className="w-max h-full p-4"
              >
                {children}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className = "",
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={`
        relative 
        rounded-full 
        border 
        border-transparent 
        dark:bg-neutral-950 
        bg-white/80 
        backdrop-blur-md
        shadow-lg 
        flex 
        justify-center 
        items-center 
        space-x-6 
        px-10 
        py-4 
        ${className}
      `}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  className = "",
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  className?: string;
}) => {
  return (
    <Link 
      href={href} 
      className={`
        flex 
        items-center 
        space-x-4 
        p-3 
        rounded-lg 
        hover:bg-neutral-100 
        dark:hover:bg-neutral-800 
        transition-all 
        duration-300 
        ${className}
      `}
    >
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="
          flex-shrink-0 
          rounded-md 
          shadow-lg 
          transition-transform 
          group-hover:scale-105
        "
      />
      <div>
        <h4 className="
          text-xl 
          font-bold 
          mb-1 
          text-neutral-800 
          dark:text-neutral-100 
          group-hover:text-pink-600 
          transition-colors
        ">
          {title}
        </h4>
        <p className="
          text-neutral-600 
          text-sm 
          max-w-[12rem] 
          dark:text-neutral-400
        ">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  children, 
  className = "", 
  ...rest
}: React.PropsWithChildren<LinkProps> & { className?: string }) => {
  return (
    <Link
      {...rest}
      className={`
        text-neutral-700 
        dark:text-neutral-200 
        hover:text-pink-500 
        dark:hover:text-pink-400
        font-bold 
        transition-colors 
        duration-300 
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

const NavbarMenu = { MenuItem, Menu, ProductItem, HoveredLink };

export default NavbarMenu;
