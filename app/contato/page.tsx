import { ContactForm } from "../componentes/contato/contact-form";
import { ContactHero } from "../componentes/contato/contact-hero";
import { FAQ } from "../componentes/contato/faq";
import { WhatsAppCtaBanner } from "../componentes/orcamento/whatsapp-cta-banner";


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <ContactForm />
      <FAQ />
      <WhatsAppCtaBanner/>
    </div>
  )
}
