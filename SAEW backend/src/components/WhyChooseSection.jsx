import { useEffect, useRef, useState } from "react"
import { Users, Zap, Shield, ThumbsUp } from "lucide-react"

const features = [
  {
    title: "Experienced Technicians",
    icon: Users,
    desc: "Our team brings decades of combined expertise in heavy machinery repair and maintenance.",
  },
  {
    title: "Fast Service",
    icon: Zap,
    desc: "Quick turnaround times to minimize your equipment downtime and keep projects on schedule.",
  },
  {
    title: "Reliable Repairs",
    icon: Shield,
    desc: "Quality workmanship with genuine parts and comprehensive warranties on all repairs.",
  },
  {
    title: "Customer Satisfaction",
    icon: ThumbsUp,
    desc: "18+ years of trusted service with hundreds of satisfied clients across Mumbai.",
  },
]

function WhyChooseSection() {
  const sectionRef = useRef(null)
  const hasAnimatedRef = useRef(false)
  const [counts, setCounts] = useState({
    years: 0,
    machines: 0,
    clients: 0,
    support: 0,
  })

  const stats = [
    { key: "years", value: 18, suffix: "+", label: "Years Experience" },
    { key: "machines", value: 500, suffix: "+", label: "Machines Serviced" },
    { key: "clients", value: 200, suffix: "+", label: "Happy Clients" },
    { key: "support", value: 24, suffix: "/7", label: "Support Available" },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const readTargets = () => {
      const targets = {}
      const nodes = section.querySelectorAll("[data-target][data-key]")
      nodes.forEach((node) => {
        const key = node.dataset.key
        const targetValue = Number(node.dataset.target || 0)
        if (key) targets[key] = targetValue
      })
      stats.forEach((stat) => {
        if (targets[stat.key] == null) targets[stat.key] = stat.value
      })
      return targets
    }

    if (reduceMotion) {
      const targets = readTargets()
      setCounts({
        years: targets.years,
        machines: targets.machines,
        clients: targets.clients,
        support: targets.support,
      })
      hasAnimatedRef.current = true
      return
    }

    let rafId = 0
    const duration = 1200

    const animateCounts = () => {
      const targets = readTargets()
      const start = performance.now()

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)

        setCounts({
          years: Math.round(targets.years * eased),
          machines: Math.round(targets.machines * eased),
          clients: Math.round(targets.clients * eased),
          support: Math.round(targets.support * eased),
        })

        if (progress < 1) {
          rafId = requestAnimationFrame(tick)
        } else {
          setCounts({
            years: targets.years,
            machines: targets.machines,
            clients: targets.clients,
            support: targets.support,
          })
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true
          section.classList.add("in-view")
          animateCounts()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section ref={sectionRef} className="section-block section-dark bg-[#0F0F0F] py-20 why-section" id="why-us">
      <div className="container-shell">
        <p className="mb-3 text-center font-[Roboto] text-xs uppercase tracking-[0.2em] text-[#B11217]">
          WHY CHOOSE US
        </p>
        <h2 className="mb-3 text-center font-[Oswald] text-3xl text-white sm:text-4xl">
          Your Trusted Machinery Partner
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center font-[Roboto] text-gray-300">
          We're committed to delivering exceptional service and building long-term relationships with our
          clients
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, icon: Icon, desc }, index) => (
            <article
              key={title}
              className="feature-card text-center text-white"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="icon-badge mx-auto mb-4 grid h-16 w-16 place-content-center rounded-full bg-[#B11217] text-white">
                <Icon size={28} />
              </div>
              <h3 className="mb-2 font-[Oswald] text-lg text-white">{title}</h3>
              <p className="font-[Roboto] text-sm text-gray-300">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 text-center text-white md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.key} className="stat-item" style={{ transitionDelay: `${index * 60}ms` }}>
              <p className="text-4xl font-bold text-[#B11217]">
                <span
                  data-key={stat.key}
                  data-target={stat.value}
                >
                  {counts[stat.key]}
                </span>
                {stat.suffix}
              </p>
              <p className="font-[Roboto] text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
