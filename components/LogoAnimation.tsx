"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// import udemy from "../assets/udemy.png";
// import fiverr from "../assets/fiverr.png";
// import elementor from "../assets/elementor.png";
// import logitech from "../assets/logitech.png";
// import oracle from "../assets/oracle.png";
import reactLogo from "../assets/react-logo.png";
import cssLogo from "../assets/css-icon.png";
import dockerLogo from "../assets/docker-icon.png";
import htmlLogo from "../assets/html-icon.png";
import lessLogo from "../assets/less-icon.png";
import m2Logo from "../assets/m2-icon.png";
import nextLogo from "../assets/next-icon.svg";
import phpLogo from "../assets/php-icon.png";
import sassLogo from "../assets/sass-icon.png";
import shopifyLogo from "../assets/shoify-icon.png";
import tsLogo from "../assets/ts-icon.svg";

const images = [
  { src: reactLogo, alt: "figma", name: "React", },
  { src: tsLogo, alt: "figma", name: "TypeScript", },
  { src: nextLogo, alt: "figma", name: "Next.js", },
  { src: phpLogo, alt: "figma", name: "PHP", },
  { src: htmlLogo, alt: "figma", name: "HTML", },
  { src: cssLogo, alt: "figma", name: "CSS", },
  { src: sassLogo, alt: "figma", name: "SASS", },
  { src: lessLogo, alt: "figma", name: "LESS", },
  { src: m2Logo, alt: "figma", name: "M2", },
  { src: dockerLogo, alt: "figma", name: "Docker", },
  { src: shopifyLogo, alt: "figma", name: "Shopify", },
  { src: reactLogo, alt: "figma", name: "React", },
  { src: nextLogo, alt: "figma", name: "Next.js" },
  { src: reactLogo, alt: "figma", name: "React", },
  { src: tsLogo, alt: "figma", name: "TypeScript", },
  { src: nextLogo, alt: "figma", name: "Next.js", },
  { src: phpLogo, alt: "figma", name: "PHP", },
  { src: htmlLogo, alt: "figma", name: "HTML", },
  { src: cssLogo, alt: "figma", name: "CSS", },
  { src: sassLogo, alt: "figma", name: "SASS", },
  { src: lessLogo, alt: "figma", name: "LESS", },
  { src: m2Logo, alt: "figma", name: "M2", },
  { src: dockerLogo, alt: "figma", name: "Docker", },
  { src: shopifyLogo, alt: "figma", name: "Shopify", },
  { src: reactLogo, alt: "figma", name: "React", },
  { src: nextLogo, alt: "figma", name: "Next.js" },
  { src: reactLogo, alt: "figma", name: "React", },
  { src: tsLogo, alt: "figma", name: "TypeScript", },
  { src: nextLogo, alt: "figma", name: "Next.js", },
  { src: phpLogo, alt: "figma", name: "PHP", },
  { src: htmlLogo, alt: "figma", name: "HTML", },
  { src: cssLogo, alt: "figma", name: "CSS", },
  { src: sassLogo, alt: "figma", name: "SASS", },
  { src: lessLogo, alt: "figma", name: "LESS", },
  { src: m2Logo, alt: "figma", name: "M2", },
  { src: dockerLogo, alt: "figma", name: "Docker", },
  { src: shopifyLogo, alt: "figma", name: "Shopify", },
  { src: reactLogo, alt: "figma", name: "React", },
  { src: nextLogo, alt: "figma", name: "Next.js" },
];

export const LogoAnimation = () => {
  return (
    <div className="py-8 bg-white opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image, index) => (
              <Image src={image.src} alt={image.alt} key={index} height={30} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
