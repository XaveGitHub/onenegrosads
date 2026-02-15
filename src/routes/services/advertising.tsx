import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Route = createFileRoute('/services/advertising')({
  head: () => ({
    meta: [
      { title: 'Advertising & Signages | One Negros Ads' },
      { name: 'description', content: 'Premium advertising solutions in Bacolod. We specialize in pani-flex signages, acrylic build-up, sticker cutting, and large format printing for businesses.' },
      { name: 'keywords', content: 'advertising bacolod, signages, pane-flex, acrylic build up, sticker cutting, tarpaulin printing negros' },
    ],
  }),
  component: AdvertisingPage,
})

function AdvertisingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-home.png')] bg-cover bg-center" />
        <div className="relative z-20 container px-4 md:px-6 text-center space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight">Advertising & Signages</h1>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
            Make your brand stand out with our premium signage and advertising solutions.
          </p>
          <Button size="lg" asChild className="w-full sm:w-auto text-lg px-8">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Advertising Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Billboards', desc: 'Large format outdoor advertising structure.' },
              { title: 'Lighted Signages', desc: 'Illuminated signs for day and night visibility.' },
              { title: 'Vehicle Wraps', desc: 'Mobile advertising on your company fleet.' },
              { title: 'Acrylic Build-up', desc: '3D letters and logos for a premium look.' },
              { title: 'Directional Signs', desc: 'Wayfinding systems for facilities.' },
              { title: 'Panaflex', desc: 'Cost-effective flexible signage solutions.' },
            ].map((service, i) => (
              <Card key={service.title} className="hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay={i * 50}>
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

      {/* Portfolio/Projects Highlight */}
      <section className="py-12 md:py-20 bg-muted/50 overflow-hidden">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" data-aos="fade-up">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video rounded-lg overflow-hidden relative group" data-aos="zoom-in" data-aos-delay={i * 100}>
                <img 
                  src={`https://placehold.co/600x400?text=Signage+Project+${i}`} 
                  alt={`Project ${i}`} 
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8" data-aos="fade-up">
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link to="/portfolio">View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-20 bg-background overflow-hidden">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" data-aos="fade-up">Why Choose Our Signages?</h2>
          <div className="space-y-4">
            {[
              'Premium materials built to withstand outdoor elements.',
              'Professional design and layout services included.',
              'Licensed and experienced installation team.',
              'Warranty coverage for lighting and structural integrity.',
            ].map((benefit, i) => (
              <div key={benefit} className="flex items-center gap-4 p-4 border rounded-lg" data-aos="fade-left" data-aos-delay={i * 100}>
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <p className="font-medium text-sm md:text-base">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">How long does a typical signage project take?</AccordionTrigger>
              <AccordionContent>
                Design and fabrication usually take 5-10 business days, depending on the complexity and size of the signage. Installation is scheduled immediately after fabrication.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Do you offer warranty on lighted signages?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 1-year warranty on all electrical components (LED modules and power supplies) and a 2-year warranty on the structural frame.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">What areas do you serve?</AccordionTrigger>
              <AccordionContent>
                We primarily serve Bacolod City and the entire Negros Occidental province. We can also accommodate projects in Negros Oriental and Panay by schedule.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Do you handle permits for outdoor signages?</AccordionTrigger>
              <AccordionContent>
                Yes, we can assist with the processing of necessary building and occupancy permits for large outdoor signages required by the local government.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
