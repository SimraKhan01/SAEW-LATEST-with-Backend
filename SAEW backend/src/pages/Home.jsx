import { lazy, Suspense, useEffect } from "react"
import HeroSection from "../components/HeroSection"

const AboutSection = lazy(() => import("../components/AboutSection"))
const ServicesSection = lazy(() => import("../components/ServicesSection"))
const BrandsSection = lazy(() => import("../components/BrandsSection"))
const WhyChooseSection = lazy(() => import("../components/WhyChooseSection"))
const ContactSection = lazy(() => import("../components/ContactSection"))

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
      <Suspense fallback={null}>
        <AboutSection />
        <ServicesSection />
        <BrandsSection />
        <WhyChooseSection />
        <ContactSection />
      </Suspense>
    </>
  )
}

export default Home
