import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import logoMark from "../../logo.jpeg"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
]

const baseLink = "px-3 py-2 text-sm font-medium transition-colors duration-300"

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`site-header sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container-shell">
        <div className="header-inner flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logoMark}
              alt="Star Auto Engineering Works"
              className="h-12 w-12 rounded-sm object-contain"
            />
            <div className="leading-tight">
              <p className="font-[Oswald] text-lg text-[#0F0F0F]">STAR AUTO</p>
              <p className="text-xs font-semibold tracking-wide text-[#0F0F0F]">ENGINEERING WORKS</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-[#0F0F0F] md:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className={`${baseLink} nav-link`}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2 text-[#0F0F0F] hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="pb-4 md:hidden">
            <div className="flex flex-col gap-1 rounded-lg border border-gray-200 bg-white p-3">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md ${baseLink} text-[#0F0F0F] hover:bg-gray-100`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
