import { ICardProduct } from "@/type";
import { FC } from "react";
import Image from "next/image";

export const ProductCard: FC<ICardProduct> = ({ title, image, content }) => {
  return (
    <div className="flex flex-col lg:w-4/6 gap-5 border-y-4 rounded-lg border-white text-white py-2">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="w-full h-fit p-8 rounded-md bg-white relative">
        <img src={`https:${image}`} alt="product image" className="w-full" />
      </div>
      <p className="text-md font-semibold">{content}</p>
    </div>
  );
};
