"use client"

import React, { useState } from "react"
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/Navbar-menu"
import { cn } from "@/utils/cn"
import Link from "next/link"

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div
      className={cn("fixed top-8 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/about"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Decorations">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/birthday-decoration">
              Birthday Decoration
            </HoveredLink>
            <HoveredLink href="/anniversary-decoration">
              Anniversary Decoration
            </HoveredLink>
            <HoveredLink href="/kids-birthday-decoration">
              Kids Birthday Decoration
            </HoveredLink>
            <HoveredLink href="/special-occasion-decorations">
              Special Occasion Decorations
            </HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
