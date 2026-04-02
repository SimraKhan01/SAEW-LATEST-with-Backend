import { Wrench, HardHat, TrendingUp, Settings, Mountain, Droplet } from "lucide-react"

const services = [
  {
    title: "Excavator Repair",
    icon: Wrench,
    desc: "Complete excavator maintenance, repair, and overhaul services for all makes and models.",
  },
  {
    title: "Earthmoving Machinery Service",
    icon: HardHat,
    desc: "Comprehensive service and repair for bulldozers, loaders, and grading equipment.",
  },
  {
    title: "Heavy Equipment Consulting",
    icon: TrendingUp,
    desc: "Expert advice on equipment selection, maintenance schedules, and operational efficiency.",
  },
  {
    title: "Construction Machinery Repair",
    icon: Settings,
    desc: "Full-service repair for cranes, concrete mixers, and other construction equipment.",
  },
  {
    title: "Land Clearing & Grading",
    icon: Mountain,
    desc: "Equipment maintenance for land development and grading machinery operations.",
  },
  {
    title: "Hydraulic System Repair",
    icon: Droplet,
    desc: "Specialized hydraulic pump, cylinder, and system diagnostics and repair services.",
  },
]

function ServicesSection() {
  return (
    <section className="section-block bg-[#F4F4F4] py-20" id="services">
      <div className="container-shell">
        <p className="mb-3 text-center font-[Roboto] text-xs uppercase tracking-[0.2em] text-[#B11217]" data-reveal>
          OUR SERVICES
        </p>
        <h2 className="mb-3 text-center font-[Oswald] text-3xl text-[#0F0F0F] sm:text-4xl" data-reveal>
          Comprehensive Heavy Machinery Solutions
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center font-[Roboto] text-gray-600" data-reveal>
          From routine maintenance to complete overhauls, we provide expert services for all types
          of heavy machinery and construction equipment.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, desc }, index) => (
            <article
              key={title}
              className="service-card rounded-lg bg-white p-8"
              data-reveal
              style={{ "--delay": `${index * 70}ms` }}
            >
              <div className="icon-container mb-5 grid h-14 w-14 place-content-center rounded-lg bg-[#B11217] text-white">
                <Icon size={24} />
              </div>
              <h3 className="mb-2 font-[Oswald] text-xl text-[#0F0F0F]">{title}</h3>
              <p className="font-[Roboto] text-gray-600">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
