const brands = [
  { name: "JCB", note: "Authorized service partner" },
  { name: "TATA HITACHI", note: "Certified technicians" },
  { name: "CATERPILLAR", note: "Expert repairs" },
  { name: "KOMATSU", note: "Full-service support" },
  { name: "VOLVO", note: "Premium maintenance" },
  { name: "TEREX", note: "Specialized services" },
]

function BrandsSection() {
  return (
    <section className="section-block bg-white py-20" id="brands">
      <div className="container-shell">
        <p className="mb-3 text-center font-[Roboto] text-xs uppercase tracking-[0.2em] text-[#B11217]" data-reveal>
          EQUIPMENT EXPERTISE
        </p>
        <h2 className="mb-3 text-center font-[Oswald] text-3xl text-[#0F0F0F] sm:text-4xl" data-reveal>
          Brands We Service
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center font-[Roboto] text-gray-600" data-reveal>
          Our experienced technicians are trained to work on all major heavy machinery brands
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="brand-card rounded-lg p-6 text-center"
              data-reveal
              style={{ "--delay": `${index * 60}ms` }}
            >
              <p className="font-[Oswald] text-xl">{brand.name}</p>
              <p className="mt-1 font-[Roboto] text-sm opacity-80">{brand.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center font-[Roboto] text-gray-600" data-reveal>
          And many more brands. Contact us for specialized equipment service inquiries.
        </p>
      </div>
    </section>
  )
}

export default BrandsSection
