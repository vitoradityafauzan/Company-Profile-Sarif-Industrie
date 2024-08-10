import { Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle } from "flowbite-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sarif Industries | About",
  description: "In This Page, We Explain About Our Company, History, And Working Environment Here At Sarif Industries",
};

export default function About() {
  return (
    <div className="flex flex-col md:px-20 lg:px-32 gap-40 px-2 mt-6 lg:mt-14">
      {/* Brief Exp */}
      <div className="md:mt-7 ">
        <h1 className="text-white font-bold text-lg lg:text-2xl text-center md:px-10 mb-9">
          We Are A Research, Development, And Production Tech Company That Focuses On Human Augmentation Prosthesis
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
          <div className="border-x-2 p-3 text-center content-center rounded md:w-5/6">
            <h1>#1 Technological Company In The World</h1>
          </div>
          <div className="border-x-2 p-3 text-center content-center rounded md:w-5/6">
            <h1>Our Augmentation Available To All L.I.M.B Clinic Worldwide</h1>
            <p className="text-[0.5rem]">Courtasy of Versa Life</p>
          </div>
          <div className="border-x-2 p-3 text-center content-center rounded md:w-5/6">
            <h1>98% Satisfaction Score With Our Premium And Affordable Products</h1>
          </div>
          <div className="border-x-2 p-3 text-center content-center rounded md:w-5/6">
            <h1>Top 50 Companies In The World That Provide Genuine Effects For Day-To-Day Activities</h1>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="border-0 py-4 px-5 ">
        <h1 className="text-center text-[#0d0d0d] font-bold text-lg lg:text-2xl mb-5">Our History</h1>
        <Timeline className="mx-auto lg:w-5/6">
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="text-white">February 2007</TimelineTime>
              <TimelineTitle>Foundation</TimelineTitle>
              <TimelineBody>Daavid Sarif acquired a failing Detroit auto factory in 2007 and repurposed it for the automated manufacture of prosthetics in the heart of Detroit City</TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="text-white">March 2009</TimelineTime>
              <TimelineTitle>First Major Contract</TimelineTitle>
              <TimelineBody>
                The U.S. Government, stretched thin by two Mid-East conflicts, awards the contract of the Recycle Military Bill, financing free prosthetics for any wounded veteran who re-enlists, to
                Sarif Industries.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="text-white">April 2015</TimelineTime>
              <TimelineTitle>First Advanced Augmentation</TimelineTitle>
              <TimelineBody>
                David Sarif announces the launch of the first ever Advanced Augmentation of the Eye-Know Retinal Prosthesis capable of restoring sight to those with a once incurable optic nerve damage
                and other visual impairments.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="text-white">May 2018</TimelineTime>
              <TimelineTitle>Relation With Tai Yong Medical</TimelineTitle>
              <TimelineBody>David Sarif announces Sarif Industries official colaboration with Tai Yong Medical for further neuralink augmentation development.</TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="text-white">March 2021</TimelineTime>
              <TimelineTitle>Relation With Versa Life</TimelineTitle>
              <TimelineBody>David Sarif announces Sarif Industries official colaboration with Versa Life Enabling our augmentation available to all L.I.M.B Clinic worldwide.</TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>

      {/* Environment */}
      <div className="mb-32">
        <h1 className="text-white font-bold text-lg lg:text-2xl text-center mb-9">What Its Like In Our Company</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
          <div className="border-y-2 p-3 text-center content-center rounded md:w-5/6">
            <h1>All Department Equiped With State-Of-The-Art Technology</h1>
          </div>
          <div className="border-y-2 p-3 text-center content-center rounded md:w-5/6">
            <h1>Provided With Premium Health Insurrance</h1>
            <p className="text-[0.5rem]">Courtasy of Tai Yong Medical</p>
          </div>
          <div className="border-y-2 p-3 text-center content-center rounded md:w-5/6">
            <h1>Fully-Funded Extensive Training For Our New And Current Employees, Especially For R&D Department</h1>
          </div>
          <div className="border-y-2 p-3 text-center content-center rounded md:w-5/6">
            <h1>Strategic Location At The Heart Of Detroit City</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
