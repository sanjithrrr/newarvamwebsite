import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link";

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
  </svg>
);

export default function Pricing() {
  const features = [
    "Security",
    "Work Center",
    "Reports",
    "Dashboards",
    "Failure Prevention",
    "Reliability Analytics",
    "Mobility",
    "Inventory",
    "Purchase",
    "IIoT (Industrial Internet of Things)",
    "Third Party AppIn Interface"
  ];

  const planFeatures = {
    professional: 4,
    premium: 7,
    enterprise: features.length
  };

  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Pricing"
        title="Choose Your Plan"
      >
        Select the perfect plan for your needs. All plans include our core features with different levels of support and capabilities.
      </SectionTitle>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 my-8">
        {/* Professional Plan */}
        <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
          <p className="text-4xl font-bold text-gray-900 mb-6">$50<span className="text-lg">/mo</span></p>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={feature} className="flex items-center text-gray-700">
                {index < planFeatures.professional ? <CheckIcon /> : <XIcon />}
                {feature}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="mt-auto w-full px-4 py-2 bg-[#017bad] text-white rounded-md hover:bg-[#015d8a] text-center">
            Get Started
          </Link>
        </div>

        {/* Premium Plan */}
        <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg border-2 border-[#017bad]">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
          <p className="text-4xl font-bold text-gray-900 mb-6">$75<span className="text-lg">/mo</span></p>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={feature} className="flex items-center text-gray-700">
                {index < planFeatures.premium ? <CheckIcon /> : <XIcon />}
                {feature}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="mt-auto w-full px-4 py-2 bg-[#017bad] text-white rounded-md hover:bg-[#015d8a] text-center">
            Get Started
          </Link>
        </div>

        {/* Enterprise Plan */}
        <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
          <p className="text-4xl font-bold text-gray-900 mb-6">$100<span className="text-lg">/mo</span></p>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={feature} className="flex items-center text-gray-700">
                <CheckIcon />
                {feature}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="mt-auto w-full px-4 py-2 bg-[#017bad] text-white rounded-md hover:bg-[#015d8a] text-center">
            Get Started
          </Link>
        </div>
      </div>
    </Container>
  );
} 