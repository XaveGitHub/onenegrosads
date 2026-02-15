import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const Route = createFileRoute('/portfolio')({
  head: () => ({
    meta: [
      { title: 'Our Portfolio | One Negros Ads' },
      { name: 'description', content: 'Browse our portfolio of completed projects in signage, solar installation, prefab buildings, and 3D printing across Negros Occidental.' },
    ],
  }),
  component: PortfolioPage,
})

function PortfolioPage() {
    const categories = ['All', 'Advertising', 'Solar', 'Prefab', '3D Printing', 'Edible Prints']
    
    // Placeholder data generator
    const items = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        title: `Project ${i + 1}`,
        category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
        image: `https://placehold.co/600x400?text=Project+${i + 1}`
    }))

  return (
    <div className="flex flex-col min-h-screen bg-background">
       <section className="py-20 overflow-hidden">
        <div className="container px-4 md:px-6">
             <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
                <p className="text-muted-foreground text-lg">
                    Discover our featured works across all our divisions.
                </p>
             </div>

             <Tabs defaultValue="All" className="w-full">
                <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                    <TabsList>
                        {categories.map((cat) => (
                            <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {categories.map((cat) => (
                    <TabsContent key={cat} value={cat} className="mt-0">
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {items
                                .filter((item) => cat === 'All' || item.category === cat)
                                .map((item, i) => (
                                    <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
                                        <CardContent className="p-0 relative aspect-video">
                                             <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                             />
                                             <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                                                 <span className="text-accent font-medium mb-2">{item.category}</span>
                                                 <h3 className="font-bold text-xl">{item.title}</h3>
                                             </div>
                                        </CardContent>
                                    </Card>
                                ))}
                         </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
       </section>
    </div>
  )
}
