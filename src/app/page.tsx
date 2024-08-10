// "use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Suspense, useState, FC } from "react";
import { Button } from "flowbite-react";
import Link from "next/link";
import VideoComponent from "@/components/videoComp";
import { Metadata } from "next";
import CompanyMarquess from "@/components/companyMarquess";
// bg-[url('/Back-Hero.jpeg')]  bg-gradient-to-b from-neutral-600 to-stone-400

export const metadata: Metadata = {
  title: "Sarif Industries | Company Profile",
  description: "Welcome To Sarif Industries Website"
}

const Home: FC = () => {
  // const [compList, setCompList] = useState([
  //   { name: "Tai Yong Medical", img: "/TaiYongMed.png" },
  //   { name: "L.I.M.B", img: "/LIMB2.png" },
  //   { name: "Bell Tower", img: "/BellTower2.png" },
  //   { name: "Versa Life", img: "/VersaLife.png" },
  //   { name: "A.R.C", img: "/ARC.png" },
  //   { name: "W.H.O", img: "/who.png" },
  //   { name: "UNATCO", img: "/UNATCO.png" },
  //   { name: "FEMA", img: "/FEMA.webp" },
  //   { name: "DOD", img: "/DOD.png" },
  //   { name: "US Army", img: "/UsArmy.png" },
  // ]);

  const linkVid1: string = "https://drive.google.com/file/d/1AgnIkrR8Ls_Ig87xyzGqLl3TfHVQOf3W/preview";

  const linkVid2: string = "https://drive.google.com/file/d/1ky3zlVRQQP79CGl05txNN-nB7a1rEf-w/preview";

  return (
    <main className="flex min-h-screen flex-col gap-20 items-center p-0">
      {/* bg-gradient-to-b from-neutral-600 to-neutral-500 */}
      {/* Opening Greeting */}
      {/* <div className="w-full h-[35rem] bg-[url('/wall-hero.jpg')] p-1 border-0 text-center content-start text-white">
        <h1 className="text-4xl lg:text-5xl px-7 font-bold mt-20 tracking-wide">WELCOME TO SARIF INDUSTRIES</h1>
        <div className="w-5/6 md:w-9/12 xl:w-3/6 h-2 rounded-md border-b-2 border-white mx-auto mt-1 mb-4"></div>
        <h1 className="text-xl font-thin font-semibold tracking-widest">&quot; Envisioning a New Future &quot;</h1>
      </div> */}

      {/* Goals */}
      {/* rounded-xl lg:rounded-[6rem] md:shadow-2xl border-t-2 border-b-2 md:border-0 */}
      <div
        className="w-full h-fit  px-2 py-4 md:p-6  flex flex-col justify-center items-center "
        
      >
        <h1 className="text-[#0D0D0D] text-center tracking-wide text-2xl md:text-[2rem] font-extrabold ">Envisioning A New Future With </h1>
        <h1 className="text-white text-center tracking-wide text-2xl md:text-[2rem] font-bold mb-10">Augmentation Technology</h1>
        <Suspense fallback={<h1>Loading video....</h1>}>
          <VideoComponent linkk={linkVid1} />
        </Suspense>
      </div>

      {/* Company Exp */}
      <div className="flex flex-col md:flex-row md:gap-4 w-11/12 h-[40rem] md:h-[25rem] my-40">
        <div className="basis-1/2 h-full border-t-4 md:border-y-4 rounded-lg border-white content-center">
          <p className="text-center lg:text-xl leading-relaxed p-12 font-semibold">
            Wes are 10,000 - 17,000 diverse team made from multiple departments located at the heart of Detroit all working in harmony alongside with State-Of-The-Art Technology to improve efficiency
            and quality of our Augmentations.
          </p>
          <Button color="light" pill as={Link} href="/team" className="md:w-4/6 lg:w-2/6 mx-auto mb-10">
            Check Out Our Teams
          </Button>
        </div>
        <div className="basis-1/2 h-full relative p-5">
          <Image src="/SarifIndHallway.webp" alt="Sarif Industries Hallway" fill />
        </div>
      </div>

      {/* Collab List */}
      <div className="w-full h-[25rem] bg-[#b7b7b7] content-center p-0">
        <h1 className="w-5/6 text-center text-white md:text-2xl font-semibold mx-auto mb-10">
          We also work alongside the Top Companies in the world and cooperate closely with local and international government bodies
        </h1>
        <CompanyMarquess />
        {/* <Marquee play direction="right" speed={40} loop={0} className="">
          {compList.map((list) => (
            <div key={list.name}>
              <Image src={list.img} alt={list.name} width={95} height={80} className="mx-6 my-0" />
            </div>
          ))}
        </Marquee> */}
      </div>

      {/* CEO Exp */}
      <div className="w-11/12 my-40 h-fit p-0 border-1 flex flex-col md:flex-row md:gap-4">
        <div className="basis-1/2 border-b-8 border-t-2 border-white rounded p-0 content-end">
          <Image src="/DavidSarif-crop.png" alt="David Sarif" width={360} height={470} className="mx-auto" />
        </div>
        <div className="basis-1/2 content-center pt-10 px-5 md:p-6 border-0 md:border-b-8 md:border-t-2 border-white rounded text-sm text-[#0d0d0d] md:text-xl font-bold leading-relaxed">
          <p>
            It all started when our philanthropist CEO and Founder, David Sarif had a vision where technology would bring the next age of human evolution, as he put it,{" "}
            <i className="italic text-white">&quot;The age of Better, Stronger, Faster And Smarter Future&quot;</i>. So, he started his journey by acquired a failing Detroit auto factory in 2007 and repurposed
            it for the automated manufacture of prosthetics in the heart of Detroit City.
          </p>
          <Button color="light" pill as={Link} href="/about" className="md:w-2/6 mx-auto mt-10">
            Learn More
          </Button>
        </div>
      </div>

      {/* Testimonials */}
      <div
        className="w-11/12 h-fit border-t-2 border-b-2 md:border-0 px-2 py-4 md:p-6 rounded-xl lg:rounded-[6rem] bg-transparent md:shadow-2xl flex flex-col gap-10 justify-center items-center bg-neutral-600"
        id="radial-blury"
      >
        {/* <Image src="/DeusEx.png" alt="DeusEx Pic" width={350} height={250} /> */}
        {/* <h1>We Are The No. 1 Company Leading The Augmentations Technology In The World</h1> */}
        <p className="text-center text-[#0d0d0d] text-4xl font-bold w-4/6">Hesited For The Future?</p>
        <Suspense fallback={<h1>Loading video....</h1>}>
          <VideoComponent linkk={linkVid2} />
        </Suspense>
        {/* <iframe
          src="https://drive.google.com/file/d/1ky3zlVRQQP79CGl05txNN-nB7a1rEf-w/preview"
          width={850}
          height={480}
          allow="autoplay"
          className="w-full h-[13rem] md:h-[23rem] lg:w-5/6 lg:h-[26rem] xl:h-[36rem]"
        ></iframe> */}
      </div>

      {/* Link To Store */}
      <div className="w-11/12 h-fit border-t-2 border-b-2 rounded mx-auto p-4 justify-center flex flex-col gap-7 text-center">
        <h1 className="tracking-wide text-white font-semibold text-3xl">Get Your Augmentation Now</h1>
        <Button color="light" pill className="w-3/6 mx-auto" id="radial-blurry">
          Visit Our Store
        </Button>
      </div>
    </main>
  );
};

export default Home;
