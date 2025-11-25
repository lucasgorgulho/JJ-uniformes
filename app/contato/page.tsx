import { ContactForm } from "../componentes/contato/contact-form";
import { ContactHero } from "../componentes/contato/contact-hero";
import { FAQ } from "../componentes/contato/faq";


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <ContactForm />
      <FAQ />
    </div>
  )
}
