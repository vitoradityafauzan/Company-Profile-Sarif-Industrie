import { Footer } from "flowbite-react";
import Link from "next/link";

export default function Foot() {
  return (
    <div className="w-full bg-[#b1b1b1] mt-10 ">
      <Footer container className="rounded-none bg-transparent">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand href="https://www.eidosmontreal.com/games/deus-ex-human-revolution/" src="/Sariflogoblack.png" alt="Sarif Ind. Logo" name="Sarif Industries" />
            <Footer.LinkGroup>
            <Footer.Link as={Link} href="/" className="text-white text-lg  md:hover:bg-transparent">
            Home
          </Footer.Link>
          <Footer.Link as={Link} href="/about" className="text-white text-lg">
            About
          </Footer.Link>
          <Footer.Link as={Link} href="/product" className="text-white text-lg">
            Products
          </Footer.Link>
          <Footer.Link as={Link} href="/team" className="text-white text-lg">
            Teams
          </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="https://www.eidosmontreal.com/games/deus-ex-human-revolution/" by="Sarif Industries by Eidos Montreal™" year={2022} />
        </div>
      </Footer>
    </div>
  );
}
