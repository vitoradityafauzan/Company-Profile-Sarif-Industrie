'use client'

import { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

 export default function CompanyMarquess() {
    const [compList, setCompList] = useState([
        { name: "Tai Yong Medical", img: "/TaiYongMed.png" },
        { name: "L.I.M.B", img: "/LIMB2.png" },
        { name: "Bell Tower", img: "/BellTower2.png" },
        { name: "Versa Life", img: "/VersaLife.png" },
        { name: "A.R.C", img: "/ARC.png" },
        { name: "W.H.O", img: "/who.webp" },
        { name: "UNATCO", img: "/UNATCO.png" },
        { name: "FEMA", img: "/FEMA.webp" },
        { name: "DOD", img: "/DOD.png" },
        { name: "US Army", img: "/UsArmy.png" },
      ]);

      return (
        <Marquee play direction="right" speed={40} loop={0} className="">
          {compList.map((list) => (
            <div key={list.name}>
              <Image src={list.img} alt={list.name} width={95} height={80} className="mx-6 my-0" />
            </div>
          ))}
        </Marquee>
      )
 }