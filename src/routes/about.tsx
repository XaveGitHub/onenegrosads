import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Us | One Negros Ads' },
      { name: 'description', content: 'Learn about One Negros Ads, the trusted provider of advertising, solar, and construction solutions in Negros Occidental since [Year].' },
      { name: 'keywords', content: 'about one negros ads, company profile, advertising experts, solar energy provider team' },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
       {/* Hero */}
       <section className="py-20 bg-background overflow-hidden">
        <div className="container px-4 md:px-6">
             <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold mb-6">About One Negros Ads</h1>
                <p className="text-xl text-muted-foreground">
                    A multi-disciplinary company dedicated to providing innovative solutions for businesses and individuals across Negros.
                </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                 <div className="rounded-xl overflow-hidden shadow-xl aspect-video relative group">
                     <img src="https://placehold.co/800x600?text=Company+HQ" alt="Company HQ" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                 </div>
                 <div className="space-y-6">
                     <h2 className="text-3xl font-bold">Our Story</h2>
                     <p className="text-muted-foreground">
                         Founded with a vision to modernize local services, One Negros Ads has grown from a signage shop into a comprehensive solutions provider. We realized that our clients needed more than just advertising – they needed energy solutions, efficient construction, and creative technologies.
                     </p>
                     <p className="text-muted-foreground">
                         Today, we are proud to be the leading provider in the region for these interconnected services, driven by a commitment to quality, integrity, and community growth.
                     </p>
                 </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {[
                    { title: 'Mission', text: 'To empower local businesses and homeowners with world-class services and technologies.' },
                    { title: 'Vision', text: 'To be the most trusted and innovative multi-service company in the Negros region.' },
                    { title: 'Values', text: 'Excellence, Integrity, Innovation, and Sustainability.' },
                ].map((item, i) => (
                    <Card key={item.title} className="text-center h-full border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                        <CardContent className="pt-6">
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-muted-foreground">{item.text}</p>
                        </CardContent>
                    </Card>
                ))}
             </div>
        </div>
       </section>
    </div>
  )
}
