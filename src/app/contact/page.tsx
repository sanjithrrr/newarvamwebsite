import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/SectionTitle";

export default function Contact() {
  return (
    <Container>
      <SectionTitle
        preTitle="Contact Us"
        title="Get in Touch"
      >
        Fill out the form below and we'll get back to you as soon as possible.
      </SectionTitle>

      <div className="py-12">
        <ContactForm />
      </div>
    </Container>
  );
} 