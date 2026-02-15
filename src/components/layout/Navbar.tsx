import * as React from "react"
import { useState } from "react"
import { Link, useLocation } from "@tanstack/react-router"
import { Menu, Home, Briefcase, Info, Phone, Sun, Package, Printer, Cake, Megaphone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { ModeToggle } from "@/components/mode-toggle"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref as any}
          to={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const services = [
    {
      title: "Advertising & Signages",
      href: "/services/advertising",
      description: "Custom signages for businesses.",
      icon: Megaphone
    },
    {
      title: "LRC Solar",
      href: "/services/solar",
      description: "Sustainable solar energy solutions.",
      icon: Sun
    },
    {
      title: "The Prefab Concept",
      href: "/services/prefab",
      description: "Modern prefab structures.",
      icon: Package
    },
    {
      title: "3D Printing",
      href: "/services/3d-printing",
      description: "High-quality 3D printing services.",
      icon: Printer
    },
    {
      title: "Edible Printing",
      href: "/services/edible-printing",
      description: "Custom edible prints for cakes.",
      icon: Cake
    },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <img src="/logo.png" alt="One Negros Ads" className="h-16 w-auto object-contain" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link 
                  to="/" 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary",
                    isActive('/') && "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={cn(
                    "hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary",
                    services.some(s => isActive(s.href)) && "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                        className={cn(
                            "hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary",
                            isActive(service.href) && "bg-primary/10 text-primary hover:bg-primary/20"
                        )}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/portfolio" 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary",
                    isActive('/portfolio') && "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                  )}
                >
                  Portfolio
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  to="/about" 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary",
                    isActive('/about') && "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                  )}
                >
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  to="/contact" 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary",
                    isActive('/contact') && "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button asChild className="font-semibold shadow-md hover:shadow-lg transition-all">
           <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto border-l-white/10 bg-background/80 backdrop-blur-xl p-0">
               {/* Hidden title/desc for accessibility */}
               <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
               <SheetDescription className="sr-only">Site navigation</SheetDescription>

              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-white/10">
                   <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
                </div>
                
                <nav className="flex-1 flex flex-col gap-1 p-4">
                    <Link
                    to="/"
                    className={cn(
                        "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all",
                        isActive('/') ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    )}
                    onClick={() => setIsOpen(false)}
                    >
                    <Home className="h-5 w-5" />
                    Home
                    </Link>

                    <div className="my-2 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Services
                    </div>
                    
                    <div className="space-y-1">
                    {services.map((service) => (
                        <Link
                        key={service.title}
                        to={service.href}
                        className={cn(
                            "flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-all",
                            isActive(service.href) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                        onClick={() => setIsOpen(false)}
                        >
                        <service.icon className="h-4 w-4" />
                        {service.title}
                        </Link>
                    ))}
                    </div>

                    <div className="my-2 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Company
                    </div>

                    <Link
                    to="/portfolio"
                    className={cn(
                        "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all",
                        isActive('/portfolio') ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    )}
                    onClick={() => setIsOpen(false)}
                    >
                    <Briefcase className="h-5 w-5" />
                    Portfolio
                    </Link>
                    <Link
                    to="/about"
                    className={cn(
                        "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all",
                        isActive('/about') ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    )}
                    onClick={() => setIsOpen(false)}
                    >
                    <Info className="h-5 w-5" />
                    About
                    </Link>
                    <Link
                    to="/contact"
                    className={cn(
                        "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all",
                        isActive('/contact') ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    )}
                    onClick={() => setIsOpen(false)}
                    >
                    <Phone className="h-5 w-5" />
                    Contact
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/10 bg-black/5">
                    <Button size="lg" className="w-full text-base font-semibold shadow-lg group" asChild onClick={() => setIsOpen(false)}>
                        <Link to="/contact">
                            Get a Quote
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
