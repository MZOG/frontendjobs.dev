"use client";
import Container from "./container";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const categories = [
    {
      name: "React",
      href: "/",
    },
    {
      name: "Vue",
      href: "/",
    },
    {
      name: "Angular",
      href: "/",
    },
    {
      name: "Svelte",
      href: "/",
    },
    {
      name: "Next.js",
      href: "/",
    },
    {
      name: "Nuxt.js",
      href: "/",
    },
  ];
  return (
    <Container>
      <header>
        <nav
          aria-label="Global"
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between py-6 transition-all"
          )}
        >
          <div className="flex lg:flex-1 justify-between items-center">
            <div className="flex gap-10 items-center">
              <Link
                href="/"
                className="group flex gap-5 md:gap-10 items-center grow-0"
              >
                <span className="sr-only">Trener</span>
                <span className="font-medium !leading-none">
                  Front End Jobs
                </span>
              </Link>

              <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                <Popover className="relative">
                  <PopoverButton className="flex items-center gap-x-1 text-sm/6">
                    Categories
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-4 text-gray-300"
                    />
                  </PopoverButton>

                  <PopoverPanel
                    transition
                    className="absolute -left-20 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="p-2 grid grid-cols-2 gap-1">
                      {categories.map((category, index) => {
                        return (
                          <Link
                            key={index}
                            href="/"
                            className="block rounded-lg p-3 text-sm/4 hover:bg-gray-100"
                          >
                            {category.name}
                          </Link>
                        );
                      })}
                    </div>
                  </PopoverPanel>
                </Popover>
              </PopoverGroup>
            </div>
            <Button className="hidden lg:block">Post new job</Button>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              MENU
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent className="px-5 pb-10">
            <DrawerHeader className="text-left px-0 py-2">
              <DrawerTitle className="mb-5">Opcje</DrawerTitle>
            </DrawerHeader>
            <div className="space-y-4">
              <p>eko</p>
            </div>
          </DrawerContent>
        </Drawer>
      </header>
    </Container>
  );
}
