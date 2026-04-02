import { CheckCircle2 } from "lucide-react"

function AboutSection() {
  return (
    <section className="section-block bg-white py-20" id="about">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
        <div className="image-reveal relative overflow-hidden rounded-2xl shadow-xl" data-reveal>
          <img
            src="https://images.unsplash.com/photo-1758873263491-f3969d8c6fda?auto=format&fit=crop&w=1400&q=80"
            alt="Engineer repairing heavy equipment"
            className="reveal-image aspect-[4/3] h-full w-full object-cover"
          />
          <div className="absolute bottom-6 right-6 hidden rounded-2xl bg-[#B11217] px-6 py-4 text-white shadow-lg md:block">
            <p className="text-3xl font-bold">18+</p>
            <p className="text-sm">Years Experience</p>
          </div>
        </div>

        <div data-reveal>
          <p className="mb-3 font-[Roboto] text-xs uppercase tracking-[0.2em] text-[#B11217]">
            ABOUT US
          </p>
          <h2 className="mb-5 font-[Oswald] text-3xl text-[#0F0F0F] sm:text-4xl">
            Expert Heavy Machinery
            <br />
            Services Since 2006
          </h2>
          <p className="mb-6 font-[Roboto] leading-relaxed text-gray-700">
            Star Auto Engineering Works has been serving the construction and heavy machinery
            industry in Mumbai for over 18 years. Based in Kurla West, we specialize in
            comprehensive repair, maintenance, and consulting services for all types of heavy
            equipment.
          </p>
          <p className="mb-8 font-[Roboto] leading-relaxed text-gray-700">
            Our team of highly skilled technicians brings decades of combined experience in
            hydraulic systems, excavator repair, earthmoving machinery, and construction equipment
            maintenance. We're committed to minimizing your downtime and maximizing equipment
            performance.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 text-[#B11217]" size={20} />
              <div>
                <p className="font-semibold text-[#0F0F0F]">Certified Technicians</p>
                <p className="font-[Roboto] text-gray-600">
                  Our team is trained and certified to work on all major machinery brands
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 text-[#B11217]" size={20} />
              <div>
                <p className="font-semibold text-[#0F0F0F]">Quality Parts & Service</p>
                <p className="font-[Roboto] text-gray-600">
                  We use only genuine parts and follow manufacturer specifications
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 text-[#B11217]" size={20} />
              <div>
                <p className="font-semibold text-[#0F0F0F]">24/7 Support Available</p>
                <p className="font-[Roboto] text-gray-600">
                  Emergency repair services to keep your operations running smoothly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
