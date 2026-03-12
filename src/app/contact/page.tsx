'use client'

import { useState } from 'react'

const locations = [
  { num: '01', name: 'West End', address: '7900 Shrader Road, Henrico, VA 23294', phone: '804-288-1953', fax: '804-282-1046', hours: 'Mon – Fri: 8:00 AM – 5:00 PM' },
  { num: '02', name: 'Hanover', address: '8237 Meadowbridge Road, Mechanicsville, VA 23116', phone: '804-288-1953', fax: '804-282-1046', hours: 'Mon – Fri: 8:30 AM – 5:00 PM' },
  { num: '03', name: 'Midlothian', address: '13460 Tredegar Lake Parkway, Midlothian, VA 23112', phone: '804-288-1953', hours: 'Mon – Fri: 8:00 AM – 5:00 PM' },
  { num: '04', name: 'Tappahannock', address: '1396 B Tappahannock Blvd, Tappahannock, VA 22560', phone: '804-288-1953', hours: '8:30 AM – 12:30 PM every other Thursday' },
  { num: '05', name: 'Colonial Heights', address: '3660 Boulevard, Suite J, Colonial Heights, VA 23834', phone: '804-288-1953', hours: 'Mon – Fri: 8:00 AM – 5:00 PM' },
  { num: '06', name: 'Petersburg', address: '50 Medical Park Blvd Suite B, Petersburg, VA 23805', phone: '804-288-1953', hours: '1:00 PM – 5:00 PM every Thursday' },
  { num: '07', name: 'Mobility Center', address: '7900 Shrader Road, Henrico, VA 23294', phone: '804-622-0347', fax: '804-622-0349', hours: 'Mon – Fri: 8:00 AM – 5:00 PM' },
  { num: '08', name: 'Vascular Center', address: '6031 Staples Mill Road, Richmond, VA 23228', phone: '804-264-8782', fax: '804-266-9214', hours: 'Mon – Fri: 6:30 AM – 4:00 PM' },
  { num: '09', name: 'Richmond Vein Center', address: '7900 Shrader Road, Henrico, VA 23294', phone: '804-249-8346', hours: 'Mon – Fri: 8:00 AM – 5:00 PM' },
  { num: '10', name: 'VSA Tri-Cities Office', address: 'Colonial Heights, VA', phone: '804-288-1953', hours: 'Mon – Fri: 8:00 AM – 5:00 PM' },
]

function LocationAccordion({ loc }: { loc: typeof locations[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 py-4 text-left hover:text-blue transition-colors"
      >
        <span className={`accordion-icon text-sm ${open ? 'active' : ''}`}>
          {open ? '−' : '+'}
        </span>
        <span className="font-heading text-gray-700">
          <span className="text-coral font-bold mr-2">{loc.num}</span>
          {loc.name}
        </span>
      </button>
      {open && (
        <div className="pl-11 pb-4 space-y-2 text-sm text-gray-600">
          <p>{loc.address}</p>
          <p>
            <span className="text-gray-400">Phone:</span>{' '}
            <a href={`tel:${loc.phone}`} className="text-blue hover:underline">{loc.phone}</a>
          </p>
          {loc.fax && (
            <p>
              <span className="text-gray-400">Fax:</span> {loc.fax}
            </p>
          )}
          <p>
            <span className="text-gray-400">Hours:</span> {loc.hours}
          </p>
        </div>
      )}
    </div>
  )
}

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', location: 'West End', message: '' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-custom">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Select your location and submit our form, or simply give us a call to make your appointment today. We look forward to seeing you!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Form */}
            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-lg font-heading text-green-800 mb-2">Thank you for your message!</h3>
                  <p className="text-green-600">We will get back to you shortly.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                  className="space-y-4"
                >
                  {/* Choose Location */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Choose Location: <span className="text-coral">*</span>
                    </label>
                    <select
                      value={formState.location}
                      onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                      className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue"
                    >
                      {locations.map((loc) => (
                        <option key={loc.name} value={loc.name}>{loc.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Name *"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue"
                    />
                  </div>

                  {/* Email + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      required
                      placeholder="Email *"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue"
                    />
                    <input
                      type="tel"
                      placeholder="Phone *"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      rows={5}
                      placeholder="Message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary py-3 px-8">
                    Submit
                  </button>
                </form>
              )}
            </div>

            {/* Right - Numbered Location List */}
            <div>
              {locations.map((loc) => (
                <LocationAccordion key={loc.num} loc={loc} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
