import { ArrowRight } from "lucide-react"

function HeroSection() {
  return (
    <section className="hero-section section-block relative flex min-h-screen items-center pt-20" id="home">
      <img
        src="https://images.unsplash.com/photo-1759745125627-333e78bc1edc?auto=format&fit=crop&w=1920&q=80"
        alt="Excavator at a construction site"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      <div className="hero-glow absolute inset-0" />

      <div className="container-shell relative py-20 text-white">
        <h1
          className="stagger mb-3 max-w-3xl font-[Oswald] text-4xl leading-tight sm:text-5xl lg:text-[3.5rem]"
          style={{ "--delay": "0ms" }}
        >
          Reliable Heavy Machinery
          <br />
          Repair & Maintenance
        </h1>
        <p
          className="stagger mb-6 font-[Oswald] text-4xl font-semibold text-[#B11217] sm:text-5xl"
          style={{ "--delay": "120ms" }}
        >
          Since 2006
        </p>
        <p
          className="stagger mb-10 max-w-2xl font-[Roboto] text-base text-gray-100 sm:text-lg"
          style={{ "--delay": "240ms" }}
        >
          Your trusted partner for comprehensive heavy machinery repair, construction equipment
          maintenance, and hydraulic system solutions in Mumbai. Over 18 years of engineering
          excellence.
        </p>
        <div className="stagger flex flex-wrap gap-4" style={{ "--delay": "360ms" }}>
          <a
            href="#services"
            className="btn-primary cta-pulse inline-flex items-center gap-2 rounded-md px-6 py-3 font-[Roboto] text-base"
          >
            View Services
            <ArrowRight className="arrow-icon" size={18} />
          </a>
          <a
            href="#contact"
            className="btn-outline rounded-md px-6 py-3 font-[Roboto] text-base"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
