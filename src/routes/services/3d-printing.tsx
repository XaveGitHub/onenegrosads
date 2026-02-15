import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Route = createFileRoute('/services/3d-printing')({
  head: () => ({
    meta: [
      { title: '3D Printing Solutions | One Negros Ads' },
      { name: 'description', content: 'Professional 3D printing service in Bacolod. Rapid prototyping, architectural models, custom parts, and end-use production using FDM and Resin technology.' },
      { name: 'keywords', content: '3d printing bacolod, rapid prototyping, custom figurines, architectural scale models, 3d design service' },
    ],
  }),
  component: Printing3DPage,
})

function Printing3DPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-printing.png')] bg-cover bg-center" />
        <div className="relative z-20 container px-4 md:px-6 text-center space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight">3D Printed Solutions</h1>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
             From prototypes to final parts, we bring your digital designs to physical reality.
          </p>
          <Button size="lg" asChild className="w-full sm:w-auto text-lg px-8">
            <Link to="/contact">Upload Your File</Link>
          </Button>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-12 md:py-20 bg-background overflow-hidden">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" data-aos="fade-up">Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card data-aos="fade-up" data-aos-delay="0" className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader><CardTitle className="text-lg md:text-xl">Rapid Prototyping</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground text-sm md:text-base">Iterate your designs quickly with affordable PLA/PETG prints.</CardContent>
            </Card>
            <Card data-aos="fade-up" data-aos-delay="100" className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader><CardTitle className="text-lg md:text-xl">End-Use Parts</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground text-sm md:text-base">Strong, functional parts using ABS, ASA, or Nylon.</CardContent>
            </Card>
            <Card data-aos="fade-up" data-aos-delay="200" className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader><CardTitle className="text-lg md:text-xl">Architectural Models</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground text-sm md:text-base">Detailed scale models for presentations and planning.</CardContent>
            </Card>
             <Card data-aos="fade-up" data-aos-delay="300" className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader><CardTitle className="text-lg md:text-xl">Custom Figurines</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground text-sm md:text-base">Detailed resin prints for collectibles and gifts.</CardContent>
            </Card>
            <Card data-aos="fade-up" data-aos-delay="400" className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader><CardTitle className="text-lg md:text-xl">Spare Parts</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground text-sm md:text-base">Replacement parts for appliances, cars, and machines.</CardContent>
            </Card>
             <Card data-aos="fade-up" data-aos-delay="500" className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader><CardTitle className="text-lg md:text-xl">Design Service</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground text-sm md:text-base">Don't have a 3D file? Our team can model it for you.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-20 bg-muted/50 overflow-hidden">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" data-aos="fade-up">Print Gallery</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden bg-background" data-aos="zoom-in" data-aos-delay={i * 100}>
                    <img src={`https://placehold.co/400x400?text=Print+${i}`} alt={`Print ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
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
              <AccordionTrigger className="text-left">What materials can you print?</AccordionTrigger>
              <AccordionContent>
                We print in PLA, PETG, ABS, ASA, TPU (flexible), and Resin for high-detail figurines. We also offer edible printing on icing sheets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">How much does it cost?</AccordionTrigger>
              <AccordionContent>
                Pricing is based on printing time and material usage. Send us your .STL file for a free instant quote.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Can you design a part for me?</AccordionTrigger>
              <AccordionContent>
                Yes, our design engineers can model custom parts, prototypes, or replacement gears from scratch or based on a broken sample.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">What is the max print size?</AccordionTrigger>
              <AccordionContent>
                Our largest FDM printer has a build volume of 400x400x450mm. Larger parts can be printed in sections and glued together.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
