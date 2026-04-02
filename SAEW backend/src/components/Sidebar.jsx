import { NavLink } from "react-router-dom"
import { useState } from "react"
import logo from "../assets/company-logo.svg"
import hamburgerIcon from "../assets/hamburger-icon.png"

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/branches", label: "Branches" },
  { to: "/contact", label: "Contact Us" },
]

function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex h-[68px] items-center gap-2 border-b border-[#f2bcbc] bg-[#8b0000] px-3 text-white shadow-[0_6px_18px_rgba(148,0,0,0.28)] sm:h-[74px] sm:gap-3 sm:px-4">
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-md border border-white/20 bg-transparent transition hover:bg-white/10 sm:h-9 sm:w-9"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <img src={hamburgerIcon} alt="Menu" className="h-6 w-6 cursor-pointer opacity-80 sm:h-[30px] sm:w-[30px]" />
        </button>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img src={logo} alt="Star Auto Engineering Works logo" className="h-8 w-8 shrink-0 sm:h-11 sm:w-11" />
          <h1 className="truncate text-[0.6rem] font-semibold tracking-[0.08em] text-white sm:text-[0.72rem] sm:tracking-[0.18em]">
            STAR AUTO ENGINEERING WORKS
          </h1>
        </div>
      </header>

      <button
        type="button"
        aria-label="Close menu"
        className={`fixed inset-0 top-[68px] z-30 border-0 bg-black/35 transition sm:top-[74px] ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed left-0 top-[68px] z-40 h-[calc(100vh-68px)] w-[290px] max-w-[85vw] bg-white shadow-[8px_0_24px_rgba(0,0,0,0.14)] transition-transform duration-300 ease-out sm:top-[74px] sm:h-[calc(100vh-74px)] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1 p-4" aria-label="Main navigation">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-semibold tracking-wide transition ${
                  isActive
                    ? "bg-[#8b0000] text-white"
                    : "text-[#8b0000] hover:bg-[#ffe6e6] hover:text-[#b30000]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
