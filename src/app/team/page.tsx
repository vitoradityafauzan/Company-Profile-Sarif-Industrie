import StaffCard from "@/components/staffCard";
import { StaffList } from "@/type";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sarif Industries | Team",
  description: "In This Page, Contain List Of Our Teams",
  icons: {icon: "/Sariflogoblack.png"},
};

async function getData(amount: number) {
  const res = await fetch(`https://randomuser.me/api/?results=${amount}`, {
    next: { tags: ["users"] },
  });

  // console.log(res.ok ? "jalan" : "nggk jalan")

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const ret = await res.json();

  return ret.results;
}

export default async function Team() {
  const staff: StaffList[] = await getData(12);

  return (
    <div className="flex flex-col gap-10 min-h-screen items-center px-2 mt-6 lg:mt-14">
      <h1 className="w-5/6 text-center text-[#0d0d0d] font-bold text-2xl leading-tight">Meet The People Behind <span className="text-white">Sarif Industries</span></h1>

      {/* CEO Card */}
      <div className="flex flex-col w-5/6 md:w-3/6 lg:w-2/6 border-white rounded-lg text-[#0d0d0d] text-center font-semibold items-center">
        <StaffCard img="/DavidSarif-crop.png" alt="CEO" desc1="David Sarif" desc2="CEO & Founder" />
      </div>

      {/* Section 1 VIP */}
      <div className="flex flex-col md:flex-row w-5/6 gap-11 items-center justify-center md:w-5/6 lg:w-4/6">
        <StaffCard img="/adamjensenprofpic.png" alt="Security" desc1="Adam Jensen" desc2="Head Of Security" />

        <StaffCard img="/meganprofpic-transformed.png" alt="R&D" desc1="Megan Reed" desc2="Head Of R&D" />
      </div>

      {/* Section 2 VIP */}
      <div className="flex flex-col md:flex-row w-5/6 gap-11 items-center justify-center md:w-5/6 lg:w-4/6">
        <StaffCard img="/elizaprofpic.jpg" alt="Marketing" desc1="Eliza Cassan" desc2="Head Of Marketing" />

        <StaffCard img="/csiprofpic.png" alt="Prod" desc1="Paul Denton" desc2="Head Of Production" />
      </div>

      {/* miscellaneous staff */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center w-[90%] md:w-5/6 lg:w-4/6">
        {staff.map((staf) => {
          return (
            <div className="flex flex-col w-full md:w-5/6 lg:w-4/6 h-56 border-4 rounded p-0" key={staf.id.value}>
              <div className="basis-1/2">
                <img src={staf.picture.large} alt="staff" className="w-full h-full "  />
              </div>
              <div className="basis-1/2 border-t-2 text-center content-center">
                <h1>{staf.name.first} {staf.name.last}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
