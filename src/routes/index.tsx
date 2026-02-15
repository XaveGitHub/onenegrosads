import { createFileRoute, Link } from '@tanstack/react-router'
import { Megaphone, Home, CheckCircle, Sun, Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'One Negros Ads | Advertising, Solar, Prefab & 3D Printing' },
      { name: 'description', content: 'The leading provider of advertising signages, solar power systems, prefab construction, and 3D printing services in Bacolod City and Negros Occidental.' },
      { name: 'keywords', content: 'advertising bacolod, signages negros, solar panels bacolod, prefab construction, 3d printing service, edible printing' },
    ],
  }),
  component: App,
})

function App() {
  const projects = [
    { title: 'Solar Installation - Residential', image: 'https://placehold.co/600x400?text=Solar+Project' },
    { title: 'Commercial Signage - Mall', image: 'https://placehold.co/600x400?text=Signage+Project' },
    { title: 'Prefab Office Unit', image: 'https://placehold.co/600x400?text=Prefab+Project' },
    { title: 'Architectural 3D Model', image: 'https://placehold.co/600x400?text=3D+Model' },
    { title: 'Corporate Event Cake', image: 'https://placehold.co/600x400?text=Edible+Print' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
            <Carousel className="w-full h-full" opts={{ loop: true }}>
                <CarouselContent>
                    <CarouselItem>
                        <img src="/images/hero-home.png" alt="Advertising" className="w-full h-full object-cover" />
                    </CarouselItem>
                    <CarouselItem>
                        <img src="https://placehold.co/1920x1080?text=Solar+Energy" alt="Solar" className="w-full h-full object-cover" />
                    </CarouselItem>
                     <CarouselItem>
                        <img src="https://placehold.co/1920x1080?text=Prefab+Homes" alt="Prefab" className="w-full h-full object-cover" />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
        
        <div className="container relative z-20 px-4 md:px-6 text-center space-y-6" data-aos="fade-up">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Innovating Solutions for <span className="text-primary">Negros</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-base text-gray-200 md:text-xl">
            Your trusted partner in Advertising, Solar Energy, Prefab Construction, and 3D Printing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 glass-card border-white/20 hover:bg-white/20 text-white">
                <Link to="/portfolio">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Our Divisions</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Comprehensive services tailored to elevate your business and lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/services/advertising" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 glass-card border-white/10" data-aos="fade-up" data-aos-delay="0">
                <CardHeader>
                  <div className="flex items-center gap-4 md:block">
                     <Megaphone className="h-8 w-8 md:h-10 md:w-10 text-primary mb-0 md:mb-2 group-hover:scale-110 transition-transform text-shadow" />
                     <CardTitle className="text-xl md:text-2xl">Advertising</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm md:text-base">Premium indoor & outdoor signages, billboards, and branding solutions.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/solar" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 glass-card border-white/10" data-aos="fade-up" data-aos-delay="100">
                <CardHeader>
                   <div className="flex items-center gap-4 md:block">
                      <Sun className="h-8 w-8 md:h-10 md:w-10 text-primary mb-0 md:mb-2 group-hover:scale-110 transition-transform text-shadow" />
                      <CardTitle className="text-xl md:text-2xl">Solar Energy</CardTitle>
                   </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm md:text-base">Sustainable power solutions for residential and commercial properties.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/prefab" className="group">
               <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 glass-card border-white/10" data-aos="fade-up" data-aos-delay="200">
                <CardHeader>
                   <div className="flex items-center gap-4 md:block">
                      <Home className="h-8 w-8 md:h-10 md:w-10 text-primary mb-0 md:mb-2 group-hover:scale-110 transition-transform text-shadow" />
                      <CardTitle className="text-xl md:text-2xl">Prefab & Const.</CardTitle>
                   </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm md:text-base">Modern modular homes, offices, and rapid construction services.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/3d-printing" className="group">
               <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 glass-card border-white/10" data-aos="fade-up" data-aos-delay="300">
                <CardHeader>
                   <div className="flex items-center gap-4 md:block">
                      <Printer className="h-8 w-8 md:h-10 md:w-10 text-primary mb-0 md:mb-2 group-hover:scale-110 transition-transform text-shadow" />
                      <CardTitle className="text-xl md:text-2xl">3D Printing</CardTitle>
                   </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm md:text-base">Custom prototyping, parts manufacturing, and edible printing.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-24 bg-muted/50 overflow-hidden">
        <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div data-aos="fade-right">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-6">Why Choose One Negros Ads?</h2>
                    <div className="space-y-4">
                        {[
                            { title: 'Local Expertise', desc: 'Deep understanding of the Negros market and logistics.' },
                            { title: 'Quality Assurance', desc: 'Premium materials and skilled craftsmanship.' },
                            { title: 'Integrated Solutions', desc: 'One-stop shop for branding, energy, and build needs.' },
                            { title: 'Customer Support', desc: 'Dedicated after-sales service and warranties.' },
                        ].map((item, i) => (
                            <div key={item.title} className="flex gap-4">
                                <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <CheckCircle className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-base md:text-lg">{item.title}</h3>
                                    <p className="text-sm md:text-base text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl" data-aos="fade-left">
                    <img src="https://placehold.co/800x800?text=Team+At+Work" alt="Team at work" className="object-cover w-full h-full" />
                </div>
            </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 md:py-24 bg-background overflow-hidden">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8 md:mb-12 text-center md:text-3xl">Featured Projects</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-0 relative overflow-hidden group">
                        <img src={project.image} alt={project.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg p-4 text-center">
                          {project.title}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
             <div className="text-center mt-8">
               <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8 font-semibold" asChild>
                  <Link to="/contact">Contact Us</Link>
               </Button>
             </div>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready to start your project?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and quote. We are ready to bring your vision to life.
          </p>
          <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto text-lg px-8">
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
