"use client";
import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

interface OfferType {
  id: number;
  name: string;
  image: string;
}

interface FakeDataType {
  id: number;
  data: OfferType[];
}

const fakeData: FakeDataType[] = [
  {
    id: 1,
    data: [
      {
        id: 1,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
      {
        id: 2,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
      {
        id: 3,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
      {
        id: 4,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
      {
        id: 5,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
      {
        id: 6,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
    ],
  },
  {
    id: 1,
    data: [
      {
        id: 1,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
      {
        id: 2,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
      {
        id: 3,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
      {
        id: 4,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
      {
        id: 5,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
      {
        id: 6,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
    ],
  },
  {
    id: 1,
    data: [
      {
        id: 1,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
      {
        id: 2,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
      {
        id: 3,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
      {
        id: 4,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
      {
        id: 5,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
      {
        id: 6,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
    ],
  },
  {
    id: 1,
    data: [
      {
        id: 1,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
      {
        id: 2,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
      {
        id: 3,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
      {
        id: 4,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
      {
        id: 5,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
      {
        id: 6,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
    ],
  },
  {
    id: 1,
    data: [
      {
        id: 1,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
      {
        id: 2,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
      {
        id: 3,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
      {
        id: 4,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
      {
        id: 5,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
      {
        id: 6,
        name: "SHOPIFY",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
    ],
  },
  {
    id: 1,
    data: [
      {
        id: 1,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
      {
        id: 2,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
      {
        id: 3,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
      {
        id: 4,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
      {
        id: 5,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
      {
        id: 6,
        name: "REACT",
        image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      },
    ],
  },
];

const ExpertWith = () => {
  return (
    <div className="py-8 md:px-32 sm:px-6 px-2">
      <h2 className=" text-center font-bold text-primary text-4xl">
        We Expert With
      </h2>
      <div className="text-center my-4 px-20">
        We stand innovative at the forefront of technology, constantly updating
        skills to stay ahead in the evolving digital landscape. We work with
        diverse technologies to deliver cutting-edge solutions to clients.
      </div>
      <div>
        <Tabs>
          <TabList>
            {[
              "Add kor",
              "Jani na",
              "Kutkut khela",
              "Web",
              "Content",
              "Mobile",
            ].map((sin: string) => (
              <Tab key={sin}>{sin}</Tab>
            ))}
          </TabList>

          {fakeData.map((sin: FakeDataType) => (
            <TabPanel key={sin.id}>
              <div className="grid grid-cols-6 gap-8 mt-4">
                {sin.data?.map((sin: OfferType) => (
                  <div
                    key={sin.id}
                    style={{ boxShadow: "0px 2px 5px 0px #50C3F4CC" }}
                    className="flex flex-col items-center"
                  >
                    <Image
                      height={100}
                      width={100}
                      alt="img"
                      src={sin?.image}
                      className="w-full h-[150px]"
                    />
                    <h1>{sin.name}</h1>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ExpertWith;
