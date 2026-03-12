'use client'

import { useState } from 'react'
import Link from 'next/link'

const heroSlides = [
  { subtitle: 'Certified Vascular Surgeons', title: 'Your First Choice for Vascular Care' },
  { subtitle: 'Certified Vascular Surgeons', title: 'Proudly Serving Six Locations Across Virginia' },
  { subtitle: 'Certified Vascular Surgeons', title: 'Over 40 Years of Experience' },
]

const services = [
  { name: 'Abdominal Aortic Aneurysm', desc: 'Abdominal Aortic Aneurysms impact 200,000 to 300,000 patients each year, with up to 10% of these cases ending in death. Early detection through screening and timely surgical intervention are critical to patient outcomes.' },
  { name: 'Angioplasty', desc: 'A minimally invasive procedure to treat blockages in arteries and veins by improving blood flow by either removing plaque build up in the veins, or by increasing the width of the vein with a stent.' },
  { name: 'Arteriograms', desc: 'Arteriograms are a useful diagnostic tool to create detailed imaging of the blood vessels, allowing physicians to identify and diagnose specific vein problems.' },
  { name: 'Carotid Surgery', desc: 'The two carotid arteries provide vital blood supply to the brain and cause serious problems when blocked. Testing and surgery identifies and removes blockages before it\'s too late.' },
  { name: 'Hemodialysis Access', desc: 'Placement of hemodialysis ports to make routine dialysis treatments easier for patients.' },
  { name: 'Lower Extremity Arterial Bypass', desc: 'When a patient\'s arterial blockage is too severe for an effective angioplasty or stenting, the physician may elect to surgically bypass the blocked leg vein.' },
  { name: 'Varicose Veins', desc: 'We provide treatment for painful and unsightly varicose veins at our Vein Center where we offer a full selection of vein treatments.' },
  { name: 'Vascular Ultrasound', desc: 'State-of-the-art ultrasonic imaging systems allow our doctors to quickly and accurately identify the exact location of vascular problems.' },
]

const centers = [
  { name: 'Vascular Centers', desc: 'Freestanding, outpatient endovascular procedure centers staffed by physicians, nurses, and technologists.', cta: 'VIEW LOCATIONS' },
  { name: 'Vascular Labs', desc: 'Private laboratories providing a range of non-invasive treatments under VSA direction.', cta: 'VIEW LOCATIONS' },
  { name: 'Vein Center', desc: 'Unmatched training and experience in varicose and spider vein treatment.', cta: 'VIEW LOCATIONS' },
  { name: 'Mobility Center', desc: 'Complete care for amputee patients with our prosthetist working directly with VSA surgeons.', cta: 'VIEW LOCATIONS' },
]

const testimonials = [
  { text: 'The staff provided an excellent service. It was a great experience with no waiting and the staff was very helpful. The technician was very knowledgeable, and the feedback was positive and well-detailed.', author: 'Patient Testimonial' },
  { text: 'My visit was exceptional. The check-in required no wait-time. The lab examiner was professional, knowledgeable, polite and kind, and explained every detail. Every single component of visit was perfect.', author: 'Patient Testimonial' },
  { text: 'Always prompt attention, thorough care, and the doctors spend ample time with you and answer all of your concerns.', author: 'Patient Testimonial' },
  { text: 'Great visit, as always, the staff was very friendly and communicative. Dr. Leake answered all of my questions and was very thorough.', author: 'Patient Testimonial' },
  { text: 'Such caring staff! I enjoyed meeting Dr. Tierney. His confidence in my plan for an upcoming surgery. I left your office feeling at peace with my health care.', author: 'Patient Testimonial' },
  { text: 'Everyone was very kind and friendly. The NP was great and explained information and results well, very clear! Very happy with the staff and the visit.', author: 'Patient Testimonial' },
]

function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background image placeholder - medical building */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600/70 to-gray-500/50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1600&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
            opacity: 0.7,
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gray-800/40" />

      <div className="relative container-custom h-full flex items-center">
        <div className="max-w-3xl">
          <p className="text-white/90 text-lg md:text-xl italic font-heading mb-4">
            {heroSlides[current].subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-heading leading-tight">
            {heroSlides[current].title}
          </h1>
        </div>
      </div>

      {/* Carousel arrows */}
      <button
        onClick={() => setCurrent((current - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrent((current + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

function ServiceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-0">
      {services.map((svc, i) => (
        <div key={svc.name} className="border-b border-gray-200">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="accordion-toggle"
          >
            <span className="font-heading text-gray-700 text-base">{svc.name}</span>
            <span className={`accordion-icon ${openIndex === i ? 'active' : ''}`}>
              {openIndex === i ? '−' : '+'}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-4 pb-4">
              <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
              <Link href="/services" className="text-blue text-sm font-semibold mt-3 inline-block hover:underline">
                Learn more →
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  return (
    <div className="relative max-w-2xl mx-auto text-center">
      <div className="flex justify-center gap-0.5 mb-4">
        {[...Array(5)].map((_, j) => <span key={j} className="star" />)}
      </div>
      <p className="text-gray-600 text-lg leading-relaxed italic mb-4">
        &ldquo;{testimonials[current].text}&rdquo;
      </p>
      <p className="text-coral font-semibold text-sm">{testimonials[current].author}</p>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current ? 'bg-coral' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* About intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading text-gray-900 mb-6">An Independent Practice</h2>
            <p className="text-gray-600 leading-relaxed">
              VSA has a long-established reputation for excellence in all forms of vascular care across the Commonwealth of Virginia.
              We have been specialists in this important field for over 40 years. As part of our commitment to our patients, we take
              pride in staying abreast of the latest advanced procedures and technologies within our area of specialty. As an independent
              practice, we are able to offer top-notch treatment options to patients regardless of their referral process.
            </p>
            <Link href="/about" className="text-blue text-sm font-semibold mt-4 inline-block hover:underline">
              Read more →
            </Link>
          </div>
        </div>
      </section>

      {/* Services & Treatments - two column layout like original */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Image placeholder */}
            <div className="rounded-lg overflow-hidden">
              <div
                className="w-full h-[400px] bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80")',
                }}
              />
            </div>
            {/* Right - Accordion */}
            <div>
              <h2 className="text-3xl font-heading text-gray-900 mb-6">Services &amp; Treatments</h2>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                It&apos;s clear to see why Vascular Surgery Associates should be your first choice for vascular care.
              </p>
              <ServiceAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* Centers - portfolio grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {centers.map((center) => (
              <div key={center.name} className="group relative overflow-hidden rounded-lg bg-gray-100">
                {/* Placeholder image */}
                <div
                  className="w-full h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80")',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-heading text-lg mb-2">{center.name}</h3>
                  <p className="text-white/80 text-xs mb-3 leading-relaxed">{center.desc}</p>
                  <Link href="/centers" className="text-white text-xs font-bold uppercase tracking-wider hover:text-coral-light transition-colors">
                    {center.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-10">Patient Testimonials</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-coral text-white">
        <div className="container-custom py-16 text-center">
          <h2 className="text-3xl font-heading mb-4">Ready to Schedule Your Visit?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Contact us today to schedule an appointment at any of our six convenient locations across Virginia.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-coral font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors uppercase text-sm tracking-wider">
              Request Appointment
            </Link>
            <a href="tel:804-288-1953" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-coral transition-colors uppercase text-sm tracking-wider">
              Call 804-288-1953
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
