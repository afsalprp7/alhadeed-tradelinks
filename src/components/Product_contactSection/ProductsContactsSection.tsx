import "./style.css";
import React from "react";


import ProductDialog from "@/utils/dialogue";
import { images } from "@/hardcodedData/home";

function ProductsContactsSection() {

  return (
    <div className="p-10 space-y-10">
      <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#0000CC]  to-[#F48C8C] bg-clip-text text-transparent">
        PRODUCTS - What We Deliver?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((product, index) => (
          <ProductDialog
            key={index}
            image={product.image}
            name={product.name}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsContactsSection;
