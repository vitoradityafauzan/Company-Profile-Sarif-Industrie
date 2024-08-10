import { ProductCard } from "@/components/productCard";
import { getProducts } from "@/lib/products";
import { IBlogs } from "@/type";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Sarif Industries | Products",
    description: "In This Page, Contain Catalog Of Our Best-Selling Augmentations",
    icons: {icon: "/Sariflogoblack.png"},
  };

export default async function Product() {
  const augs = await getProducts();

  return (
    <div className="flex flex-col gap-24 px-4 md:px-20 lg:px-32 mt-6 lg:mt-14 text-center items-center">
      <h1 className="text-4xl">Augmentation Catalog</h1>
      {augs.map((item: IBlogs) => {
        return <ProductCard key={item.sys.id} title={item.fields.title} image={item.fields.image.fields.file.url} content={item.fields.content.content[0].content[0].value} />;
      })}

      <div className="w-full flex flex-col gap-4">
        <h1 className="text-xl font-bold">Get Your Augmentation At Your Nearest L.I.M.B Clinic</h1>
        <h1>Brought to you by Versalife</h1>
        <div className="grid grid-cols-2 gap-4 mx-auto border-x-2 rounded-lg p-4 h-28 w-4/6 md:h-36 lg:w-3/6 xl:w-2/6 2xl:h-44">
          <div className="w-full h-auto relative">
            <Image src="/VersaLife.png" alt="versa life" fill />
          </div>
          <div className="w-full h-auto relative">
            <Image src="/LIMB2.png" alt="versa life" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
