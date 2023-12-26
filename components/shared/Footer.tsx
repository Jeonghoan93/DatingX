"use client";

import Link from "next/link";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import Container from "../ui/container";

interface NavigationItemProps {
  label: string;
  path: string;
}

const NavigationItem = ({ label, path }: NavigationItemProps) => {
  return (
    <Link href={path}>
      <div className="p-regular-14 font-semibold mb-2 hover:underline">
        {label}
      </div>
    </Link>
  );
};

const FooterSectionTitle = ({ title }: { title: string }) => {
  return <div className="mb-3 p-bold-16">{title}</div>;
};

const Footer = () => {
  const Info: Array<NavigationItemProps> = [
    { label: "About", path: "/about" },
    { label: "Product", path: "/tickets" },
  ];

  const Dating: Array<NavigationItemProps> = [
    { label: "Get more match", path: "/events/create" },
    { label: "General tips", path: "/events/create" },
  ];

  const DatingX = [
    {
      label: "Ambitions",
      path: "/ambitions",
    },
    {
      label: "Careers",
      path: "/careers",
    },
    {
      label: "Investors",
      path: "/investors",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-10 w-full sm:justify-between sm:gap-0 sm:flex-row py-20">
        <div className="flex flex-col justify-between h-[200px]">
          <div className="flex flex-col gap-2">
            <Link href={"/"}>
              <span className="p-bold-16">
                Dating
                <span className="text-red-700">X</span>
              </span>
            </Link>

            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-1 items-center">
                <span className="px-1">
                  <FaLocationArrow size={10} />
                </span>

                <span className="p-regular-12">Sweden</span>
              </div>

              <div className="flex flex-row gap-1 items-center">
                <span className="px-1">
                  <BiSolidMessageRounded size={10} />
                </span>

                <span className="p-regular-12">English</span>
              </div>
            </div>
          </div>

          <div className="flex max-w-sm">
            <span className="p-regular-12">
              DatingX is an AI-technology driven service that analyzes users'
              selfies and photos, generating a set of high-quality,
              professional-looking images increasing users' chances of getting
              more matches.
            </span>
          </div>
        </div>

        <div className="w-full mt-10 md:mt-0 md:w-3/5">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 p-3">
              <FooterSectionTitle title="Info" />
              {Info.map(({ label, path }, index) => (
                <NavigationItem key={index} label={label} path={path} />
              ))}
            </div>

            <div className="w-full md:w-1/3 p-3">
              <FooterSectionTitle title="Dating" />
              {Dating.map(({ label, path }, index) => (
                <NavigationItem key={index} label={label} path={path} />
              ))}
            </div>

            <div className="w-full md:w-1/3 p-3">
              <FooterSectionTitle title="DatingX" />
              {DatingX.map(({ label, path }, index) => (
                <NavigationItem key={index} label={label} path={path} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
