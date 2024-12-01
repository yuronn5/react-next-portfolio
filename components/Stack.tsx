import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPhp } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import {
  SiShopify,
  SiMagento,
  SiHtml5,
  SiCss3,
  SiWordpress,
} from "react-icons/si";

const stackItems = [
  {
    id: 1,
    name: "Shopify",
    icon: SiShopify,
    color: "#7AB55C",
  },
  {
    id: 2,
    name: "Magento 2",
    icon: SiMagento,
    color: "#D45D26",
  },
  {
    id: 3,
    name: "Next.js",
    icon: TbBrandNextjs,
    color: "#000000",
  },
  {
    id: 4,
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    id: 5,
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178A6",
  },
  {
    id: 6,
    name: "HTML",
    icon: SiHtml5,
    color: "#E44D26",
  },
  {
    id: 7,
    name: "CSS",
    icon: SiCss3,
    color: "#264DE4",
  },
  {
    id: 8,
    name: "PHP",
    icon: SiPhp,
    color: "#8B008B",
  },
  {
    id: 9,
    name: "Docker",
    icon: FaDocker,
    color: "#2496ED",
  },
  {
    id: 10,
    name: "Wordpress",
    icon: SiWordpress,
    color: "#21759B",
  },
];

export const Stack = () => {
  return (
    <section className="py-16 glass" id="stack">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-4 text-gray-200">My Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center rounded-xl p-4"
            >
              <div className="mb-4 bg-white/10 p-6 rounded-xl">
                {React.createElement(item.icon, {
                  className: "w-32 h-32",
                  style: { color: item.color },
                })}
              </div>
              <p className="text-gray-400 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
