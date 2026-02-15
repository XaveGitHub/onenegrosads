import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Route = createFileRoute('/services/prefab')({
  head: () => ({
    meta: [
      { title: 'The Prefab Concept | Modular Homes & Structures' },
      { name: 'description', content: 'Innovative prefab construction in Negros. We build modular homes, offices, and dynamic structures that are fast, durable, and cost-effective.' },
      { name: 'keywords', content: 'prefab homes bacolod, modular construction, container vans, prefab office, dynamic structures' },
    ],
  }),
  component: PrefabPage,
})

function PrefabPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-prefab.png')] bg-cover bg-center" />
        <div className="relative z-20 container px-4 md:px-6 text-center space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight">The Prefab Concept</h1>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
             Modern, modular, and efficient construction solutions for rapid deployment.
          </p>
          <Button size="lg" asChild className="w-full sm:w-auto text-lg px-8">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>

      {/* Services/Models */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" data-aos="fade-up">Our Modular Units</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Office Pods', desc: 'Secure and comfortable site offices.' },
              { title: 'Housing Units', desc: 'Affordable and quick-to-assemble homes.' },
              { title: 'Commercial Stalls', desc: 'Pop-up shops and kiosks.' },
              { title: 'Security Booths', desc: 'Compact guard houses.' },
              { title: 'Custom Builds', desc: 'Tailored modular structures.' },
              { title: 'Container Vans', desc: 'Converted container architecture.' },
            ].map((service, i) => (
              <Card key={service.title} className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 glass-card" data-aos="fade-up" data-aos-delay={i * 50}>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm md:text-base">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-20 bg-muted/50 overflow-hidden">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" data-aos="fade-up">Why Choose Prefab?</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: 'Speed', text: '50% faster construction time compared to traditional methods.' },
              { title: 'Cost-Effective', text: 'Reduced labor costs and material waste.' },
              { title: 'Mobility', text: 'Units can be disassembled and relocated.' },
              { title: 'Durability', text: 'Engineered to withstand strong winds and earthquakes.' },
            ].map((benefit, i) => (
               <div key={benefit.title} className="flex gap-4 p-6 bg-background rounded-xl shadow-sm" data-aos="fade-up" data-aos-delay={i * 100}>
                <CheckCircle2 className="h-8 w-8 text-primary shrink-0" />
                <div>
                    <h3 className="font-bold text-lg md:text-xl mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12 md:py-20 bg-background overflow-hidden">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" data-aos="fade-up">Built Projects</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="https://placehold.co/800x500?text=Modular+Office" alt="Modular Office" className="rounded-xl shadow-lg w-full object-cover" data-aos="fade-right"/>
            <img src="https://placehold.co/800x500?text=Prefab+Home" alt="Prefab Home" className="rounded-xl shadow-lg w-full object-cover" data-aos="fade-left"/>
           </div>
           <div className="text-center mt-12" data-aos="fade-up">
            <Button size="lg" asChild className="w-full sm:w-auto">
                <Link to="/contact">Start Your Project</Link>
            </Button>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">Are prefab units durable?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Our units are engineered to withstand typhoons and earthquakes, meeting or exceeding local building codes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">How fast can you build a house?</AccordionTrigger>
              <AccordionContent>
                A typical modular home can be installed on-site in as little as 3-7 days after fabrication, which takes about 2-4 weeks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Can I customize the design?</AccordionTrigger>
              <AccordionContent>
                Yes! While we have standard models, we can fully customize the layout, finishes, and size to meet your specific requirements.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Do you deliver to remote areas?</AccordionTrigger>
              <AccordionContent>
                Yes, our flat-pack and modular designs are specifically created to be transportable to hard-to-reach locations throughout Negros.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
