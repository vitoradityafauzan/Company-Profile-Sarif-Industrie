
import Image from "next/image";
import { Suspense } from "react";
import { Button } from "flowbite-react";
import Link from "next/link";
import VideoComponent from "@/components/videoComp";
import { Metadata } from "next";
import CompanyMarquess from "@/components/companyMarquess";

export const metadata: Metadata = {
  title: "Sarif Industries | Company Profile",
  description: "Welcome To Sarif Industries Website",
  icons: {icon: "/Sariflogoblack.png"},
};

const Home = () => {

  return (
    <main className="flex flex-col gap-20 items-center p-0">
      {/* Hero */}
      <div className="w-full h-fit  px-2 py-4 md:p-6  flex flex-col justify-center items-center ">
        <h1 className="text-[#0D0D0D] text-center tracking-wide text-2xl md:text-[2rem] font-extrabold ">Envisioning A New Future With </h1>
        <h1 className="text-white text-center tracking-wide text-2xl md:text-[2rem] font-bold mb-10">Augmentation Technology</h1>
        <div className="md:w-11/12 lg:w-8/12">
          <Suspense fallback={<h1>Loading video....</h1>}>
            <VideoComponent linkk="/video/Sarif-TV.mp4" />
          </Suspense>
        </div>
      </div>

      {/* Company Exp */}
      <div className="flex flex-col md:flex-row md:gap-4 w-11/12 h-[40rem] md:h-[25rem] my-40">
        <div className="basis-1/2 h-full border-t-4 md:border-y-4 rounded-lg border-white content-center">
          <p className="text-center text-xs lg:text-xl font-semibold">
            We are 10,000 - 17,000 diverse team made from multiple departments located at the heart of Detroit all working in harmony alongside with State-Of-The-Art Technology to improve efficiency
            and quality of our Augmentations.
          </p>
          <Button color="light" pill as={Link} href="/team" className="md:w-4/6 lg:w-2/6 mx-auto mt-10">
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
      </div>

      {/* CEO Exp */}
      <div className="w-11/12 my-40 h-fit p-0 border-1 flex flex-col md:flex-row md:gap-4">
        <div className="basis-1/2 border-b-8 border-t-2 border-white rounded p-0 content-end">
          <Image src="/DavidSarif-crop.png" alt="David Sarif" width={360} height={470} className="mx-auto" />
        </div>
        <div className="basis-1/2 content-center pt-10 px-5 md:p-6 border-0 md:border-b-8 md:border-t-2 border-white rounded text-sm text-[#0d0d0d] md:text-xl font-bold leading-relaxed">
          <p>
            It all started when our philanthropist CEO and Founder, David Sarif had a vision where technology would bring the next age of human evolution, as he put it,{" "}
            <i className="italic text-white">&quot;The age of Better, Stronger, Faster And Smarter Future&quot;</i>. So, he started his journey by acquired a failing Detroit auto factory in 2007 and
            repurposed it for the automated manufacture of prosthetics in the heart of Detroit City.
          </p>
          <Button color="light" pill as={Link} href="/about" className="md:w-3/6 mx-auto mt-10">
            Learn More About Our Company
          </Button>
        </div>
      </div>

      {/* Testimonials */}
      <div
        className="w-11/12 h-fit border-t-2 border-b-2 md:border-0 px-2 py-4 md:p-6 rounded-xl lg:rounded-[6rem] bg-transparent md:shadow-2xl flex flex-col gap-10 justify-center items-center bg-neutral-600"
      >
        <p className="text-center text-[#0d0d0d] text-4xl font-bold w-4/6">Hesited For The Future?</p>
        <div className="w-full lg:w-8/12">
          <Suspense fallback={<h1>Loading video....</h1>}>
            <VideoComponent linkk="/video/Sarif-Testimony.mp4" />
          </Suspense>
        </div>
      </div>

      {/* Link To Store */}
      <div className="w-11/12 h-fit border-t-2 border-b-2 rounded mx-auto p-4 justify-center flex flex-col gap-7 text-center">
        <h1 className="tracking-wide text-white font-semibold text-3xl">Get Your Augmentation Now</h1>
        <Button as={Link} href="/product" color="light" pill className="w-4/6 md:w-3/6 mx-auto">
          Visit To View Our Best-Selling
        </Button>
      </div>
    </main>
  );
};

export default Home;
