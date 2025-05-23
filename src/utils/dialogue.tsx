import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProductDialogProps {
  image: StaticImageData;
  name: string;
  description : string ;
}

const ProductDialog = ({ image, name , description }: ProductDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-200 cursor-pointer">
          <Image
            src={image}
            alt="productImages"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-1 text-xl font-bold left-5">
            <h1 className="text-black">
              {name}
            </h1>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            <Image src={image} alt={name} width={300} height={200} />
            <span className="mt-4">{description}</span>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
