import ContactSection from "../components/ContactSection"

function Contact() {
  return (
    <main>
      <section className="bg-[#0F0F0F] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-[Oswald] text-4xl text-white sm:text-5xl">Contact</h1>
        </div>
      </section>
      <ContactSection />
    </main>
  )
}

export default Contact
