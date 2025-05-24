"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export function SheetSidebar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <FaBars className="text-gray-600" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="text-blue-800">ALHADEED TRADE LINKS</div>
          </SheetTitle>
          <SheetDescription>
            <span className="flex flex-col  space-y-5 mt-5">
              <Link
                href="/#top"
                scroll={true}
                className="hover:text-blue-800 transition"
                onClick={handleClose}
              >
                About Us
              </Link>
              <Link
                href="/#products"
                scroll={true}
                className="hover:text-blue-800 transition"
                onClick={handleClose}
              >
                Products
              </Link>
              <Link
                href="/#contacts"
                scroll={true}
                className="hover:text-blue-800 transition"
                onClick={handleClose}
              >
                Contact Us
              </Link>
            </span>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
