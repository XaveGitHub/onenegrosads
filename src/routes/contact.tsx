import { createFileRoute } from '@tanstack/react-router'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { toast } from "sonner"

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact Us | One Negros Ads' },
      { name: 'description', content: 'Get in touch with One Negros Ads for your advertising, solar, and construction needs. Visit our office in Bacolod or call us today.' },
      { name: 'keywords', content: 'contact one negros ads, advertising agency location, solar installer contact, printing shop bacolod' },
    ],
  }),
  component: ContactPage,
})



const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would send this to your API
    console.log(values)
    toast.success("Message sent!", {
      description: "We'll get back to you as soon as possible.",
    })
    form.reset()
  }

  return (
    <div className="flex flex-col min-h-screen">
       <section className="py-20 bg-muted/50 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to start your project? Get in touch with us today for a free quote or consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Inquiry about..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project..."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full text-lg">Send Message</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Info and Map */}
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardContent className="pt-6 flex flex-col items-center text-center">
                            <Phone className="h-8 w-8 text-primary mb-4" />
                            <h3 className="font-semibold mb-2">Phone</h3>
                            <p className="text-muted-foreground">0949 991 1118</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6 flex flex-col items-center text-center">
                            <Mail className="h-8 w-8 text-primary mb-4" />
                            <h3 className="font-semibold mb-2">Email</h3>
                            <p className="text-muted-foreground">onenegrosads@gmail.com</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardContent className="pt-6 flex flex-col items-center text-center">
                            <MapPin className="h-8 w-8 text-primary mb-4" />
                            <h3 className="font-semibold mb-2">Location</h3>
                            <p className="text-muted-foreground">Bacolod City, Negros Occidental</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardContent className="pt-6 flex flex-col items-center text-center">
                            <Clock className="h-8 w-8 text-primary mb-4" />
                            <h3 className="font-semibold mb-2">Business Hours</h3>
                            <p className="text-muted-foreground">Mon - Sat: 8:00 AM - 5:00 PM</p>
                        </CardContent>
                    </Card>
                </div>
                
                {/* Map Placeholder */}
                <div className="rounded-xl overflow-hidden h-[300px] border relative bg-slate-100 shadow-md">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125553.11656885747!2d122.87978500276949!3d10.676642878479526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aec76686a34d61%3A0x6c623910543e110b!2sBacolod%2C%20Negros%20Occidental!5e0!3m2!1sen!2sph!4v1709265432100!5m2!1sen!2sph"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                        className="grayscale hover:grayscale-0 transition-all duration-500 w-full h-full object-cover"
                    ></iframe>
                </div>
            </div>
          </div>
        </div>
       </section>
    </div>
  )
}
