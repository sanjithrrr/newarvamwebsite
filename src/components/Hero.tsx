import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/home-banner.png";
import Link from "next/link";

export const Hero = () => {
  return (
    <Container className="flex flex-wrap">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Arvam EAM
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Arvam EAM is a shop floor friendly Enterprise Asset Management (EAM)
            solution with the latest and greatest technology components to
            meet modern day demands while being simple in construction and use.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <Link
              href="/contact"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-[#017bad] rounded-md">
              Request A Demo
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <Image
          src={heroImg}
          width={616}
          height={617}
          className="object-cover"
          alt="Hero Illustration"
          loading="eager"
          placeholder="blur"
        />
      </div>
    </Container>
  );
};
