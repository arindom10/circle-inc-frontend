"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const OurValues = () => {
  return (
    <div className="py-8 md:px-32 sm:px-6 px-2">
      <h2 className=" text-center font-bold text-primary text-4xl mb-4">
        Our Values
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        <div>
          <Tabs>
            <div className="mb-20">
              <TabList>
                {["Why Choose Us", "What Keeps us going"].map((sin: string) => (
                  <Tab key={sin}>{sin}</Tab>
                ))}
              </TabList>
            </div>
            <TabPanel>
              {[1, 2, 3].map((sin: number, index: number) => (
                <div
                  className={`flex ${
                    index % 2 !== 0 ? "justify-end" : "justify-start"
                  }`}
                  key={sin}
                >
                  <div
                    className={`w-[55%] px-4 pt-4 pb-8 text-black mt-[-30px]`}
                    style={{
                      boxShadow: "0px 3px 6.800000190734863px 0px #50C3F4CC",
                      background:
                        "url('https://i.ibb.co/xDb4nZg/image-2024-02-24-23-07-48.png')",
                      backgroundSize: "cover",
                    }}
                  >
                    <h2>Why Choose Us</h2>
                    <div className="my-2 w-[30px] h-[4px] block bg-[#54C3F0]" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae explicabo reprehenderit, eligendi officiis veritatis
                      ex voluptates, repellat odit dolore necessitatibus
                      excepturi quia placeat rerum quibusdam, illo at? Pariatur,
                      debitis iure.
                    </p>
                  </div>
                </div>
              ))}
            </TabPanel>
            <TabPanel>
              {[1, 2, 3].map((sin: number, index: number) => (
                <div
                  className={`flex ${
                    index % 2 !== 0 ? "justify-end" : "justify-start"
                  }`}
                  key={sin}
                >
                  <div
                    className={`w-[55%] px-4 pt-4 pb-8 text-black mt-[-30px]`}
                    style={{
                      boxShadow: "0px 3px 6.800000190734863px 0px #50C3F4CC",
                      background:
                        "url('https://i.ibb.co/xDb4nZg/image-2024-02-24-23-07-48.png')",
                      backgroundSize: "cover",
                    }}
                  >
                    <h2>WHAT KEEPS US GOING</h2>
                    <div className="my-2 w-[30px] h-[4px] block bg-[#54C3F0]" />
                    <p>
                      We experiment, we adapt, we learn. Technology changes
                      quickly; we change with it. We’re on a mission to build
                      platform that helps people, that makes their lives better
                      in ways big and small.
                    </p>
                  </div>
                </div>
              ))}
            </TabPanel>
          </Tabs>
        </div>
        <div className="w-full pr-10 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">
            Our particular <span className="text-primary">core values</span> 
            are unique
          </h2>
          <p>
            {`We experiment, we adapt, we learn. Technology changes quickly; we
            change with it. We’re on a mission to build platform that helps
            people, that makes their lives better in ways big and small.`}
          </p>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((sin: number) => (
            <div className="flex items-start gap-2" key={sin}>
              <div className="my-2 w-[30px] h-[4px] block bg-[#54C3F0]" />
              <p>
                {`We are open-minded and never assume there's only one solution to
                a problem.`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
