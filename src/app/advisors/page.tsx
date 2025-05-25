import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";

const advisors = [
  {
    name: "John Gonsalves",
    role: "Advisor",
    image: "/img/gonsalves.jpg",
    linkedin: "https://www.linkedin.com/in/john-gonsalves-79841/"
  },
  {
    name: "Dr. Phani Bhusan Sistu",
    role: "Advisor",
    image: "/img/sistu.jpg",
    linkedin: "https://www.linkedin.com/in/phanibhushan-sistu-4103a93/"
  }
];

const LinkedInIcon = () => (
  <svg
    className="w-8 h-8 text-[#0A66C2]"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

export default function Advisors() {
  return (
    <Container>
      <SectionTitle
        preTitle="Our Team"
        title="Advisors"
      >
    
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-12 py-8 max-w-4xl mx-auto">
        {advisors.map((advisor) => (
          <div key={advisor.name} className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg">
            <div className="relative w-56 h-56 mb-6 rounded-full overflow-hidden">
              <Image
                src={advisor.image}
                alt={advisor.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{advisor.name}</h3>
            <p className="text-[#017bad] font-medium mb-4">{advisor.role}</p>
            <a
              href={advisor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label={`Connect with ${advisor.name} on LinkedIn`}
            >
              <LinkedInIcon />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-xl p-8">
        <SectionTitle
          preTitle="Contact Us"
          title="Get in Touch"
        >
          Interested in learning more about how our advisors can help your organization?
          Contact us to schedule a consultation.
        </SectionTitle>

        <div className="text-center mt-6">
          <button className="px-8 py-3 text-white bg-[#017bad] rounded-md hover:bg-[#015d8a] transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </Container>
  );
} 