import { useState } from "react"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import supabase, { isSupabaseConfigured } from "../supabaseClient"

function ContactSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [serviceRequired, setServiceRequired] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
  const [error, setError] = useState("")

  const fullAddress =
    "Palav Compound, 469/A, Lal Bahadur Shastri Marg, next to Sheetal Talav, near Bharat Bank, W, Kurla, Mumbai, Maharashtra 400070"
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=17&output=embed`

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === "loading") return

    const trimmedName = name.trim()
    const trimmedPhone = phone.trim()
    const trimmedServiceRequired = serviceRequired.trim()
    const trimmedMessage = message.trim()

    setStatus("loading")
    setError("")

    if (!trimmedName || !trimmedPhone || !trimmedServiceRequired || !trimmedMessage) {
      setError("Please fill in all required fields before submitting.")
      setStatus("error")
      return
    }

    if (!isSupabaseConfigured) {
      setError("Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.")
      setStatus("error")
      return
    }

    try {
      const { error: insertError } = await supabase.from("inquiries").insert([
        {
          name: trimmedName,
          phone: trimmedPhone,
          service_required: trimmedServiceRequired,
          message: trimmedMessage,
        },
      ])

      if (insertError) {
        throw insertError
      }

      setStatus("success")
      setName("")
      setPhone("")
      setServiceRequired("")
      setMessage("")
    } catch (submitError) {
      setError(submitError?.message || "Unable to submit your inquiry right now. Please try again.")
      setStatus("error")
    }
  }

  return (
    <section className="section-block bg-[#F4F4F4] py-20" id="contact">
      <div className="container-shell">
        <p className="mb-3 text-center font-[Roboto] text-xs uppercase tracking-[0.2em] text-[#B11217]" data-reveal>
          GET IN TOUCH
        </p>
        <h2 className="mb-3 text-center font-[Oswald] text-3xl text-[#0F0F0F] sm:text-4xl" data-reveal>
          Contact Us Today
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center font-[Roboto] text-gray-600" data-reveal>
          Have questions or need immediate assistance? Our team is ready to help with all your heavy
          machinery needs.
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <a
              className="block"
              data-reveal
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Star Auto Engineering Works location in Google Maps"
            >
              <div className="map-shell">
              <iframe
                title="Star Auto location"
                className="map-frame"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={embedUrl}
              />
              <span className="map-pin" aria-hidden="true" />
              </div>
            </a>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-content-center rounded-lg bg-[#B11217] text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[#0F0F0F]">Phone</p>
                  <a className="font-[Roboto] text-gray-600" href="tel:07947113550">
                    07947113550
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-content-center rounded-lg bg-[#B11217] text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[#0F0F0F]">Email</p>
                  <a className="font-[Roboto] text-gray-600" href="mailto:star.autoengg.works@gmail.com">
                    star.autoengg.works@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-content-center rounded-lg bg-[#B11217] text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[#0F0F0F]">Address</p>
                  <a
                    className="font-[Roboto] text-gray-600 transition hover:text-[#B11217]"
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {fullAddress}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-content-center rounded-lg bg-[#B11217] text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[#0F0F0F]">Business Hours</p>
                  <p className="font-[Roboto] text-gray-600">9:00 AM - 9:00 PM</p>
                  <p className="font-[Roboto] text-gray-600">All Days</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm" data-reveal>
            <p className="font-[Oswald] text-xl text-[#0F0F0F]">Send Us a Message</p>
            {status === "success" && (
              <p className="text-sm text-green-600">Thank you! Your inquiry has been submitted.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">{error || "Unable to submit your inquiry."}</p>
            )}
            <div>
              <label className="text-sm font-semibold text-[#0F0F0F]">Name *</label>
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 font-[Roboto]"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-[#0F0F0F]">Phone *</label>
              <input
                required
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 font-[Roboto]"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-[#0F0F0F]">Service Required *</label>
              <select
                required
                value={serviceRequired}
                onChange={(event) => setServiceRequired(event.target.value)}
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 font-[Roboto]"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Excavator Repair">Excavator Repair</option>
                <option value="Earthmoving Machinery Service">Earthmoving Machinery Service</option>
                <option value="Heavy Equipment Consulting">Heavy Equipment Consulting</option>
                <option value="Construction Machinery Repair">Construction Machinery Repair</option>
                <option value="Land Clearing & Grading">Land Clearing & Grading</option>
                <option value="Hydraulic System Repair">Hydraulic System Repair</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-[#0F0F0F]">Message *</label>
              <textarea
                rows="5"
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 font-[Roboto]"
                placeholder="Tell us about your requirements..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className={`btn-primary w-full rounded-md px-5 py-3 font-[Roboto] ${
                status === "loading" ? "cursor-not-allowed opacity-70" : ""
              }`}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
