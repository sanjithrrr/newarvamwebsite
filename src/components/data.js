import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  CurrencyDollarIcon,
  LockClosedIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Why choose Arvam EAM?",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Simplicity",
      desc: "Low learning curve makes Arvam EAM simple to adopt by all inolved in Inspection and Maintenance.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Inspection Effectiveness",
      desc: "Inspection integration with maintenance will result in Asset Monitoring which will pave the way for Asset Performance Management.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Cost Optimization",
      desc: "Arvam EAM will achieve a 10-20% reduction in maintenance cost, resulting in sustained cost effectiveness and performance.",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "Reliability and Safety",
      desc: "With our optimal asset management process, major asset failures and catastrophes can be avoided at all times.",
      icon: <LockClosedIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
