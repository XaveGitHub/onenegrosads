import { Link } from "@tanstack/react-router"
import { Facebook, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12 text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
               <img src="/logo.png" alt="One Negros Ads" className="h-24 w-auto object-contain bg-white/10 rounded-md p-2" />
            </Link>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for advertising, solar solutions, prefab construction, 3D printing, and edible printing in Negros.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-lg">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services/advertising" className="hover:text-primary transition-colors py-1 block">
                  Advertising & Signages
                </Link>
              </li>
              <li>
                <Link to="/services/solar" className="hover:text-primary transition-colors py-1 block">
                  LRC Solar
                </Link>
              </li>
              <li>
                <Link to="/services/prefab" className="hover:text-primary transition-colors py-1 block">
                  The Prefab Concept
                </Link>
              </li>
              <li>
                <Link to="/services/3d-printing" className="hover:text-primary transition-colors py-1 block">
                  3D Printing
                </Link>
              </li>
              <li>
                <Link to="/services/edible-printing" className="hover:text-primary transition-colors py-1 block">
                  Edible Printing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors py-1 block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primary transition-colors py-1 block">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors py-1 block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-primary" />
                <span>Bacolod City, Negros Occidental</span>
              </li>
              <li className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>0949 991 1118</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>onenegrosads@gmail.com</span>
                </div>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} One Negros Ads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
