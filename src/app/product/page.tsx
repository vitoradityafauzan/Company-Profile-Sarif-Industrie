import Image from "next/image";

export default function Product() {
    return (
        <div>
            <h1>Products</h1>
            <Image src="/Sarif-Retinal.png" alt="Retinal Prosthesis" width={400} height={400} />
        </div>
    )
}