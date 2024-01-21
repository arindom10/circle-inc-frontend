import Image from "next/image";
import React from "react";

const TeamMember = ({ name, role, imageUrl }) => (
  <div className="max-w-xs mx-4 my-4 rounded overflow-hidden shadow-lg">
    <Image
      height={100}
      width={100}
      className="w-full h-48 object-cover rounded-full "
      src={imageUrl}
      alt={name}
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">{role}</p>
    </div>
  </div>
);

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Arindom Kundu",
      role: "CEO",
      imageUrl:
        "https://i.ibb.co/1J446py/2023-02-09-09-27-IMG-1269-removebg-preview-1.png",
    },
    {
      name: "Mahadi Hasan",
      role: "UX Designer",
      imageUrl:
        "https://i.ibb.co/x5RLsqt/411635836-1392512394993919-2356123374116143291-n.jpg",
    },
    {
      name: "Hasibur Rahman",
      role: "Developer",
      imageUrl:
        "https://i.ibb.co/pvd13Dq/354029548-1838442123216452-7986399071866259178-n.jpg",
    },
    {
      name: "Mehadi Hasan Ridoy",
      role: "Developer",
      imageUrl:
        "https://i.ibb.co/4KBW0n8/116868425-2531362697175610-4390450432248232837-n.jpg",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center  p-8">
      {teamMembers.map((member) => (
        <TeamMember key={""} {...member} />
      ))}
    </div>
  );
};

export default OurTeam;
