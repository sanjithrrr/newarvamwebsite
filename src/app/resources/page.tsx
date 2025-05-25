import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";

import { benefitOne } from "@/components/data";

export default function Resources() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Resources"
        title="Helpful Resources"
      >
        Discover our collection of helpful resources, guides, and documentation to help you get the most out of our platform.
      </SectionTitle>

      <Benefits data={benefitOne} />

      <SectionTitle
        preTitle="Learning"
        title="Educational Content"
      >
        Access tutorials, guides, and best practices to enhance your experience.
      </SectionTitle>

      <Testimonials />
    </Container>
  );
} 