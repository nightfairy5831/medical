'use client'

import { useState } from 'react'
import Link from 'next/link'

const categories = [
  {
    name: 'General Visit Info',
    faqs: [
      { q: 'What should I bring to my initial visit?', a: 'You will need your insurance card and, if required, an insurance referral form along with the complete address of your insurance carrier. Bring a list of your current medications including dosage and frequency, and copies of your medical records and any test reports that relate to your vascular or general surgery health issue.' },
      { q: 'Who do I contact regarding questions related to my office visit?', a: 'Each of our physicians has a professional coordinator who will answer your questions or relay your inquiry to the appropriate staff member.' },
      { q: 'Who do I call for prescription refills?', a: 'If you need a prescription refill, please call us at 804-288-1953 during office hours, so that we may review your medical record to make certain that a refill is appropriate. Narcotics will not be prescribed after office hours.' },
      { q: 'If hospitalization is necessary, at which hospitals do the physicians practice?', a: 'Bon Secours St. Mary\'s Hospital.' },
      { q: 'What if I need to cancel my appointment?', a: 'Please call 804-288-1953 as soon as possible to cancel or reschedule your appointment so that we may offer the time slot to another patient.' },
      { q: 'What happens in case of inclement weather?', a: 'In the event of inclement weather, please call 804-288-1953 to check on office hours and schedule changes.' },
      { q: 'What do I do if I have an urgent situation after hours?', a: 'If you have an urgent medical situation after hours, please call 804-288-1953 and the answering service will page the on-call physician.' },
      { q: 'How do I obtain copies of my medical records?', a: 'Please contact our medical records department at 804-288-1953 to request copies of your medical records.' },
    ],
  },
  {
    name: 'Insurance',
    faqs: [
      { q: 'Does VSA help file insurance? When will my balance be due?', a: 'VSA participates with most major insurance carriers, and as a courtesy, our staff will gladly file your insurance claims. Once your insurance carrier has processed your claim, you will be mailed a statement. All balances are due within 30 days unless special financial arrangements have been made with our Patient Account Representative at 804-285-1922.' },
      { q: 'Do I need a referral from my primary care physician?', a: 'In many cases, yes. You are responsible for determining if a referral is required by your insurance, and for obtaining a referral from your primary care provider prior to the office visit. Your appointment will be rescheduled without the proper referral required by your insurance.' },
      { q: 'Will my insurance cover a prosthesis?', a: 'Our clinic is contracted with every major insurance provider in the state including Medicare and Medicaid. Each insurance policy is unique and our billing staff will discuss your coverage details with you. Our office is very willing to work with clients to arrange payment plans if your insurance will not cover your device.' },
      { q: 'What insurance plans does VSA accept?', a: 'VSA accepts most major insurance plans including Medicare, Medicaid, Aetna, Anthem, Cigna, United Healthcare, Tricare, and many others. Please contact our office to verify your specific plan.' },
    ],
  },
  {
    name: 'Mobility Center & Prosthetics',
    faqs: [
      { q: 'How soon after surgery will I get my prosthesis?', a: 'Generally, if there are no healing complications, the first fitting occurs approximately six to eight weeks after surgery. Everyone\'s body responds differently, so you will follow up with your surgeon often to ensure your residual limb is completely healed.' },
      { q: 'How long will it take me to walk again?', a: 'Most patients return to normal function within several months after amputation surgery. Recovery rates depend on a timely, comfortable prosthetic fitting, good follow-up care, and the patient\'s health and goals.' },
      { q: 'Can I drive with my prosthesis?', a: 'Yes, however it is recommended that you make necessary automobile modifications so you can continue to drive safely. You can take driving classes and make any changes recommended by the instructor.' },
      { q: 'How do I care for my prosthesis? Can I sleep in it?', a: 'The stump and liner should be washed daily to avoid irritation and infection. Mild soap and warm water are recommended. The liner should be cleaned once a week with rubbing alcohol. The prosthesis should be removed before going to bed; do not sleep in it.' },
      { q: 'How much does a prosthesis weigh?', a: 'The weight depends on the components selected. A below knee prosthesis can weigh between 5 to 7 pounds and an above knee prosthesis can weigh between 8 to 12 pounds.' },
      { q: 'How many prostheses will I get?', a: 'Generally, you will get two prosthetic devices within the first year. The first is a preparatory prosthesis worn for about three to six months. Once your residual limb has stabilized, you are ready for a more complex definitive prosthesis that can last for many years with proper care.' },
    ],
  },
  {
    name: 'Vein Center',
    faqs: [
      { q: 'Is sclerotherapy painful?', a: 'A small gauge needle is used to perform the sclerotherapy injections. Like other medical procedures using a needle, patients relate the discomfort to an ant bite.' },
      { q: 'What happens after spider vein treatment?', a: 'Support stockings are worn on each treated leg. Exercise is important: A 20-minute walk or bike ride twice a day is best to keep healing on track and produce the best results.' },
      { q: 'How is a laser procedure different from surgery?', a: 'Laser procedures are minimally invasive, meaning that the entry point is so small it does not require stitches. The risk of infection is much lower, and there is really no recovery to speak of. You\'ll be up and walking as soon as it\'s over, able to return to normal activity quickly.' },
      { q: 'How long after a procedure will I see the results?', a: 'Results are typically seen within 4-6 weeks.' },
      { q: 'Does smoking cause varicose veins?', a: 'Many scenarios can cause weakened or damaged veins, but smoking and varicose veins go hand in hand. The carbon monoxide from smoking damages the thin layer of cells inside blood vessels which help ensure smooth blood flow. Nicotine also does great damage to blood vessels. We recommend those with varicose veins to stop smoking to avoid complications.' },
    ],
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="accordion-toggle"
      >
        <span className="font-heading text-gray-700 text-sm pr-4">{q}</span>
        <span className={`accordion-icon ${open ? 'active' : ''}`}>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4">
          <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('All')
  const tabs = ['All', ...categories.map(c => c.name)]

  const filteredCategories = activeTab === 'All'
    ? categories
    : categories.filter(c => c.name === activeTab)

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-custom">
          <h1>Frequently Asked Questions</h1>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm font-semibold transition-colors border-b-2 ${
                  activeTab === tab
                    ? 'text-blue border-blue'
                    : 'text-gray-600 border-transparent hover:text-blue'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {filteredCategories.map((cat) => (
              <div key={cat.name}>
                <h2 className="text-2xl font-heading text-gray-900 mb-6">{cat.name}</h2>
                <div>
                  {cat.faqs.map((faq) => (
                    <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-coral text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading mb-4">Still Have Questions?</h2>
          <p className="text-white/80 mb-8">Our team is here to help. Contact us for more information.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-coral font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors uppercase text-sm tracking-wider">
              Contact Us
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
