import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import { Sparkles } from 'lucide-react'

export const Route = createFileRoute('/services/edible-printing')({
  head: () => ({
    meta: [
      { title: 'Edible Printing & Cake Toppers | One Negros Ads' },
      { name: 'description', content: 'Custom edible prints for cakes and cupcakes in Bacolod. FDA-safe icing sheets and wafer paper for birthdays, weddings, and special events.' },
      { name: 'keywords', content: 'edible printing bacolod, cake toppers, custom cake photos, icing sheets printing, wafer paper' },
    ],
  }),
  component: EdiblePrintingPage,
})

function EdiblePrintingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-pink-50 text-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080?text=Edible+Prints+Hero')] bg-cover bg-center opacity-20" />
        <div className="relative z-20 container px-4 md:px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-pink-600">Edible Printing</h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
             Personalize your cakes, cupcakes, and treats with high-quality edible images.
          </p>
          <Button size="lg" className="text-lg px-8 bg-pink-500 hover:bg-pink-600" asChild>
            <Link to="/contact">Order Now</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                        <Sparkles className="w-8 h-8 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">High Resolution</h3>
                    <p className="text-muted-foreground">Vibrant colors and sharp details using premium edible inks.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                        <Sparkles className="w-8 h-8 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Safe & Certified</h3>
                    <p className="text-muted-foreground">We use FDA approved icing sheets and wafer papers.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                        <Sparkles className="w-8 h-8 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Custom Sizes</h3>
                    <p className="text-muted-foreground">From cupcake toppers to full sheet cake sizes (A4, A3).</p>
                </div>
            </div>
        </div>
      </section>

       {/* Uses */}
       <section className="py-20 bg-pink-50/50 overflow-hidden">
        <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Birthdays', 'Weddings', 'Corporate Events', 'Anniversaries'].map((event, i) => (
                    <Card key={event} className="text-center py-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 glass-card border-pink-200" data-aos="fade-up" data-aos-delay={i * 100}>
                        <CardTitle className="text-lg">{event}</CardTitle>
                    </Card>
                ))}
            </div>
             <div className="mt-12 text-center">
                 <img src="https://placehold.co/800x400?text=Cake+Examples" alt="Cake Examples" className="rounded-xl shadow-md mx-auto" />
            </div>
        </div>
       </section>

    </div>
  )
}
