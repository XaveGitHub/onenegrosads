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

export const Route = createFileRoute('/services/solar')({
  head: () => ({
    meta: [
      { title: 'LRC Solar Energy Solutions | One Negros Ads' },
      { name: 'description', content: 'Reliable solar power installation in Negros Occidental. Save on electricity bills with our hybrid and grid-tie solar systems for homes and businesses.' },
      { name: 'keywords', content: 'solar panels bacolod, solar energy negros, solar installation, hybrid solar setup, renewable energy' },
    ],
  }),
  component: SolarPage,
})

function SolarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-solar.png')] bg-cover bg-center" />
        <div className="relative z-20 container px-4 md:px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">LRC Solar Solutions</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Powering homes and businesses with sustainable, clean energy.
          </p>
          <Button size="lg" asChild className="text-lg px-8">
            <Link to="/contact">Get a Solar Quote</Link>
          </Button>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Our Solar Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Grid-Tied Systems', desc: 'Connect to the grid and lower your electric bill significantly.' },
              { title: 'Hybrid Systems', desc: 'Battery backup for continuous power during outages.' },
              { title: 'Off-Grid Systems', desc: 'Complete independence from the utility provider.' },
            ].map((service, i) => (
              <Card key={service.title} className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 glass-card border-t-4 border-t-yellow-500" data-aos="fade-up" data-aos-delay={i * 100}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/50 overflow-hidden">
        <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                     <h2 className="text-3xl font-bold mb-6">Benefits of Going Solar</h2>
                     <div className="space-y-4">
                        {[
                        'Reduce your electricity bills by up to 90%.',
                        'Increase the value of your property.',
                        'Reduce your carbon footprint.',
                        'Return on investment in 3-5 years.',
                        ].map((benefit, i) => (
                        <div key={benefit} className="flex items-start gap-3" data-aos="fade-up" data-aos-delay={i * 100}>
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                            <p className="text-lg">{benefit}</p>
                        </div>
                        ))}
                    </div>
                </div>
                 <div className="rounded-xl overflow-hidden shadow-xl" data-aos="fade-left">
                    <img src="https://placehold.co/800x600?text=Solar+Roof" alt="Solar Installation" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
      </section>

      {/* Projects */}
       <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Recent Installations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm" data-aos="zoom-in" data-aos-delay={i * 100}>
                  <img src={`https://placehold.co/600x400?text=Solar+Project+${i}`} alt={`Solar Project ${i}`} className="w-full h-48 object-cover" />
                  <div className="p-4">
                      <h3 className="font-semibold text-lg">Residential Project #{i}</h3>
                      <p className="text-sm text-muted-foreground">5kW Hybrid System</p>
                  </div>
              </div>
            ))}
          </div>
             <div className="text-center mt-8" data-aos="fade-up">
            <Button variant="outline" asChild>
              <Link to="/portfolio">View Gallery <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How much can I save with solar?</AccordionTrigger>
              <AccordionContent>
                Savings depend on your system size and usage, but most residential clients see a 70-90% reduction in their monthly electric bill.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What happens during a blackout?</AccordionTrigger>
              <AccordionContent>
                Grid-tied systems will turn off for safety. Hybrid systems with batteries will continue to power your essential loads during a blackout.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How long is the warranty?</AccordionTrigger>
              <AccordionContent>
                We offer a 25-year performance warranty on solar panels and a 5-10 year warranty on inverters, depending on the brand.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>Do you handle net metering?</AccordionTrigger>
              <AccordionContent>
                Yes, we handle the complete application process for Net Metering with the local utility cooperative so you can sell excess power back to the grid.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
