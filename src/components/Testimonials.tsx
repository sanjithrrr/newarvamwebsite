import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/bsmi_logo.png";
import userThreeImg from "../../public/img/Escorts_Kubota_Limited.jpg";

export const Testimonials = () => {
  return (
    <Container className="max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Testimonial */}
        <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10">
          <p className="text-xl leading-normal">
            Bay Standard Manufacturing (BSMI), USA has partnered with ARVAM to successfully implement their EAM software solution. With minimal prior experience in managing our assets and maintenance, <Mark>the team at ARVAM has been incredibly supportive throughout the implementation process.</Mark>
            Their hands-on training and the software's user-friendly design have exceeded our expectations. We are excited about the long-term partnership and the opportunities this solution will bring to our operations.
          </p>

          <Avatar
            image={userTwoImg}
            name="Mark Hearney"
            title="Operations Head"
            imageSize="w-32 h-12"
          />
        </div>

        {/* Second Testimonial */}
        <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10">
          <p className="text-xl leading-normal">
            This is to appreciate PRACTICO Engineers CEO MR. Rajeev Paal Gupta and their partners ARVAM Solutions USA & Power Profit Technologies Pvt Ltd (PPTPL) for successfully completing the proof of concept and implementation of Industrial Internet of Things (IIoT) and Enterprise Asset Management (EAM) for one of our lines. <Mark>This has opened new opportunities to roll out the solution to rest of assets in the facility and across facilities in the future.</Mark>
          </p>

          <Avatar
            image={userThreeImg}
            name="Rakesh Kumar"
            title="Maintenance Head"
            imageSize="w-32 h-12"
          />
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
  imageSize?: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className={`flex-shrink-0 ${props.imageSize || 'w-32 h-12'}`}>
        <Image
          src={props.image}
          alt="Avatar"
          placeholder="blur"
          className="object-contain w-full h-full"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
