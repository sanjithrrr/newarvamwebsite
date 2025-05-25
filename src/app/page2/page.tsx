import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";

const solutions = [
  {
    title: "Predictive Maintenance",
    image: "/img/solution-image1.png",
  },
  {
    title: "Corrective Maintenance",
    image: "/img/solution-image2.png",
  },
  {
    title: "Smart Work Orders",
    image: "/img/solution-image3.png",
  },
  {
    title: "Seamless Upgrades",
    image: "/img/solution-image2.png",
  },
  {
    title: "Compliance",
    image: "/img/solution-image4.png",
  },
  {
    title: "Quality Performance",
    image: "/img/solution-image5.png",
  },
];

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle=""
        title="Improve Your Company's Maintenance Management Process"
      >
        <span className="text-[#017bad] block mt-2">
          These ARVAM EAM articles provide guidance for improving maintenance and asset management practices.
        </span>
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-16">
        {solutions.map((solution) => (
          <div 
            key={solution.title}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {solution.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
} 