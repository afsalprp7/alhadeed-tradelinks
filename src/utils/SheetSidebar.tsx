import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";


export function SheetSidebar() {
  return (
    <Sheet>
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
              <a href="#top" className="hover:text-blue-800 transition">
                About Us
              </a>
              <a href="#products" className="hover:text-blue-800 transition">
                Products
              </a>
              <a href="#contact" className="hover:text-blue-800 transition">
                Contact Us
              </a>
            </span>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
