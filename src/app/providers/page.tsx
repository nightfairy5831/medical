'use client'

import { useState } from 'react'
import Link from 'next/link'

const surgeons = [
  { name: 'Vishnu Ambur, MD, FACS', role: 'Board-Certified Vascular Surgeon', initial: 'VA' },
  { name: 'Jeff A. Brown, MD, FACS', role: 'Board-Certified Vascular Surgeon', initial: 'JB' },
  { name: 'Ryan D. Gordon, MD', role: 'Board-Certified Vascular Surgeon', initial: 'RG' },
  { name: 'Andrew E. Leake, MD, FACS', role: 'Board-Certified Vascular Surgeon', initial: 'AL' },
  { name: 'Avik Mukherjee, MD, FACS', role: 'Board-Certified Vascular Surgeon', initial: 'AM' },
  { name: 'Marc T. Warner, MD, FACS', role: 'Board-Certified Vascular Surgeon', initial: 'MW' },
  { name: 'W. Andrew Tierney, MD, FACS, RPVI', role: 'Board-Certified Vascular Surgeon', initial: 'AT' },
  { name: 'Frank Stoneburner Jr., MD, FACS', role: 'Emeritus', initial: 'FS' },
  { name: 'Gregg L. Londrey, MD, FACS', role: 'Emeritus', initial: 'GL' },
]

const staff = [
  { name: 'Chris Cox, PA-C', role: 'Physician Assistant' },
  { name: 'Kathryn Niederer, PA-C', role: 'Physician Assistant' },
  { name: 'Kelli Hodges, PA-C', role: 'Physician Assistant' },
  { name: 'Michael Massaro, PA-C', role: 'Physician Assistant' },
  { name: 'Melissa Clarke, MSN, ACNP-BC', role: 'Nurse Practitioner' },
  { name: 'Lauren Todd, MSN, AGNP-BC', role: 'Nurse Practitioner' },
  { name: 'Victoria Corbin, MSN, FNP-C', role: 'Nurse Practitioner' },
  { name: 'Larissa Rodriguez, DNP, AG-ACNP', role: 'Nurse Practitioner' },
  { name: 'Kathleen S. Terry, FNP-C', role: 'Nurse Practitioner' },
  { name: 'Preston Williams, CPO', role: 'Prosthetist' },
]

function ProviderCard({ name, role, initial, large }: { name: string; role: string; initial?: string; large?: boolean }) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className={`bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow ${large ? '' : ''}`}>
      {/* Photo placeholder */}
      <div className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${large ? 'h-52' : 'h-40'}`}>
        <span className={`font-heading text-gray-500 ${large ? 'text-4xl' : 'text-2xl'}`}>
          {initial || name.charAt(0)}
        </span>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-heading text-gray-900 text-sm mb-1">{name}</h3>
        <p className="text-xs text-coral">{role}</p>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="mt-3 text-blue text-xs font-semibold hover:underline"
        >
          {showInfo ? 'Hide Info' : 'More Info'}
        </button>
        {showInfo && (
          <div className="mt-3 pt-3 border-t border-gray-100 text-left">
            <p className="text-xs text-gray-500 leading-relaxed">
              Board-certified specialist with extensive training and experience in vascular surgery. Contact our office for more details about this provider.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProvidersPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-custom">
          <h1>Our Providers</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-gray-600 leading-relaxed">
              At Vascular Surgery Associates, our board-certified vascular surgeons are among the best-educated, most experienced, and most highly trained practitioners in Virginia. With decades of combined professional experience and exceptional training from across the Eastern United States, we built VSA to be your first choice for vascular care. We take a team approach to care, with physicians working in close partnership with NPs, PAs, and Prosthetists.
            </p>
          </div>

          {/* Team Photo Placeholder */}
          <div className="max-w-4xl mx-auto mb-16">
            <div
              className="w-full h-[300px] bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1000&q=80")',
              }}
            />
          </div>

          {/* Surgeons */}
          <h2 className="text-2xl font-heading text-gray-900 mb-8 text-center">Board-Certified Vascular Surgeons</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
            {surgeons.map((doc) => (
              <ProviderCard key={doc.name} name={doc.name} role={doc.role} initial={doc.initial} large />
            ))}
          </div>

          {/* Staff */}
          <h2 className="text-2xl font-heading text-gray-900 mb-8 text-center">Physician Assistants, Nurse Practitioners &amp; Staff</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {staff.map((person) => (
              <ProviderCard key={person.name} name={person.name} role={person.role} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <div className="flex justify-center gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => <span key={i} className="star" />)}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed italic font-heading mb-4">
            &ldquo;The entire staff was caring and kind the moment my wife and I entered the building and the wait was not long at all to see the Doctor. Dr. Stoneburner was excellent, he genuinely seems to care about his patients and you feel confident under his care.&rdquo;
          </p>
          <p className="text-coral font-semibold">— Steve Parks, VSA Patient</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-coral text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading mb-4">Meet Our Team</h2>
          <p className="text-white/80 mb-8">Learn more about why VSA is your first choice for vascular care in Central Virginia and beyond.</p>
          <Link href="/contact" className="bg-white text-coral font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors uppercase text-sm tracking-wider">
            Request Appointment
          </Link>
        </div>
      </section>
    </>
  )
}
