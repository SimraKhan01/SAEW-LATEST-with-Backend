import { Mail, MapPin, Phone } from "lucide-react"
import logoMark from "../assets/logo-mark.svg"

function Footer() {
  const fullAddress =
    "Palav Compound, 469/A, Lal Bahadur Shastri Marg, next to Sheetal Talav, near Bharat Bank, W, Kurla, Mumbai, Maharashtra 400070"
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`

  return (
    <footer className="bg-[#0F0F0F] py-12 text-gray-300">
      <div className="container-shell">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoMark} alt="Star Auto Engineering Works" className="h-10 w-10" />
              <div>
                <p className="font-[Oswald] text-lg text-white">STAR AUTO</p>
                <p className="text-xs font-semibold tracking-wide text-white/80">ENGINEERING WORKS</p>
              </div>
            </div>
            <p className="mt-4 font-[Roboto] text-sm text-gray-400">
              Your trusted partner for heavy machinery repair and maintenance in Mumbai since 2006.
            </p>
          </div>

          <div>
            <p className="mb-4 font-semibold text-white">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 font-semibold text-white">Our Services</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Excavator Repair</li>
              <li>Earthmoving Machinery</li>
              <li>Heavy Equipment Consulting</li>
              <li>Construction Machinery</li>
              <li>Hydraulic System Repair</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 font-semibold text-white">Contact Us</p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#B11217]" /> 07947113550
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#B11217]" /> star.autoengg.works@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#B11217]" />
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="hover:text-white">
                  {fullAddress}
                </a>
              </li>
              <li className="pt-2">
                <p className="text-white">Business Hours:</p>
                <p>9:00 AM - 9:00 PM</p>
                <p>All Days</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © 2024 Star Auto Engineering Works. All rights reserved. Established 2006.
        </div>
      </div>
    </footer>
  )
}

export default Footer
