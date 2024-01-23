import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
interface Props {
  name: string;
  role: string;
  imageUrl: string;
  whatsappLink: string;
  portfolioLink: string;
}

const TeamMember = ({
  name,
  role,
  imageUrl,
  whatsappLink,
  portfolioLink,
}: Props) => (
  <div className="max-w-sm mx-4 my-4 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105  bg-emerald-100">
    <Image
      height={100}
      width={100}
      className="w-60 h-60 object-cover rounded-full bg-white"
      src={imageUrl}
      alt={name}
    />
    <div className="p-6">
      <div className="text-xl font-bold mb-2">{name}</div>
      <p className="text-gray-700 text-base mb-4">{role}</p>
      <div className="flex gap-3">
        <Link href={whatsappLink} target="_blank">
          <FaWhatsapp />
        </Link>
        <Link href={portfolioLink} target="_blank">
          <TfiWorld />
        </Link>
      </div>
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
      whatsappLink: "https://wa.me/message/GW4RVNQAFXD3A1",
      portfolioLink: "https://arindomkundu.com/",
    },

    {
      name: "Hasibur Rahman",
      role: "Developer",
      imageUrl:
        "https://i.ibb.co/Kz5xqt5/354029548-1838442123216452-7986399071866259178-n-removebg-preview.png",
      whatsappLink: "https://wa.me/message/GW4RVNQAFXD3A1",
      portfolioLink: "https://arindomkundu.com/",
    },
    {
      name: "Mehadi Hasan Ridoy",
      role: "Developer",
      imageUrl:
        "https://i.ibb.co/yPDyd4z/116868425-2531362697175610-4390450432248232837-n-removebg-preview.png",
      whatsappLink: "https://wa.me/message/GW4RVNQAFXD3A1",
      portfolioLink: "https://arindomkundu.com/",
    },
    {
      name: "Meheady Hasan",
      role: "UI/UX Designer",
      imageUrl:
        "https://i.ibb.co/qMtf2dr/411635836-1392512394993919-2356123374116143291-n-removebg-preview.png",
      whatsappLink: "https://wa.me/message/GW4RVNQAFXD3A1",
      portfolioLink: "https://arindomkundu.com/",
    },
  ];

  return (
    <div>
      <div className="flex justify-center">
        <span className="text-3xl font-bold text-cyan-600">MEET OUR TEAM</span>
      </div>
      <div className="flex flex-wrap justify-center  p-8">
        {teamMembers.map((member) => (
          <TeamMember key={""} {...member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
