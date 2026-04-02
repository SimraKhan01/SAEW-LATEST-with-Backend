import { useEffect } from "react"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import BrandsSection from "../components/BrandsSection"
import WhyChooseSection from "../components/WhyChooseSection"
import ContactSection from "../components/ContactSection"

function Home() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"))
    if (!elements.length) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      elements.forEach((el) => el.classList.add("in-view"))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BrandsSection />
      <WhyChooseSection />
      <ContactSection />
    </>
  )
}

export default Home
