import Link from 'next/link'

export const metadata = { title: 'Services | Vascular Surgery Associates' }

const services = [
  { id: 'aaa', name: 'Abdominal Aortic Aneurysm', desc: 'Abdominal Aortic Aneurysms impact 200,000 to 300,000 patients each year, with up to 10% of these cases ending in death. Early detection through screening and timely surgical intervention are critical to patient outcomes.' },
  { id: 'angioplasty', name: 'Angioplasty', desc: 'A minimally invasive procedure to treat blockages in arteries and veins by improving blood flow by either removing plaque build up in the veins, or by increasing the width of the vein with a stent.' },
  { id: 'arteriograms', name: 'Arteriograms', desc: 'Arteriograms are a useful diagnostic tool to create detailed imaging of the blood vessels, allowing physicians to identify and diagnose specific vein problems.' },
  { id: 'carotid', name: 'Carotid Surgery', desc: 'The two carotid arteries provide vital blood supply to the brain and cause serious problems when blocked. Testing and surgery identifies and removes blockages before it\'s too late.' },
  { id: 'limb', name: 'Limb Salvage', desc: 'Specialized procedures aimed at saving limbs from amputation through advanced vascular surgical techniques and treatments.' },
  { id: 'bypass', name: 'Lower Extremity Arterial Bypass', desc: 'When a patient\'s arterial blockage is too severe for an effective angioplasty or stenting, the physician may elect to surgically bypass the blocked leg vein.' },
  { id: 'pad', name: 'Peripheral Artery Disease', desc: 'Comprehensive diagnosis and treatment of peripheral artery disease (PAD), a common circulatory problem in which narrowed arteries reduce blood flow to the limbs.' },
  { id: 'sclerotherapy', name: 'Sclerotherapy', desc: 'A minimally invasive treatment used to eliminate varicose veins and spider veins through targeted injection of a solution directly into the affected veins.' },
  { id: 'vein', name: 'Vein Treatments', desc: 'We provide treatment for painful and unsightly varicose veins at our Vein Center where we offer a full selection of vein treatments.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-custom">
          <h1>Services</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading text-gray-900 mb-6 text-center">A Fully Comprehensive Approach</h2>
            <p className="text-gray-600 leading-relaxed text-center mb-4">
              Vascular Surgery Associates offers a fully comprehensive approach to ensuring your vascular health. From the initial exams, to the surgical procedures, post-op consultation, and the outpatient care process, we are Central Virginia&apos;s first choice in vascular care. As an independent practice with a highly trained physician team, nurse practitioners, prosthetist and an experienced staff of technologists, we are experts in everything from peripheral labs to cosmetic procedures to vascular surgery to mobility training and prosthesis fitting.
            </p>
            <p className="text-gray-600 leading-relaxed text-center">
              Improved vascular health can dramatically change your life. You&apos;ll breathe easier, walk faster and further, enjoy family time more fully and face the world with more confidence and assurance.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-4xl mx-auto mt-10 mb-16">
            <div
              className="w-full h-[350px] bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1000&q=80")',
              }}
            />
          </div>

          {/* Service Grid - 3 columns of clickable links like original */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="block p-4 text-blue hover:text-blue-dark font-heading text-base transition-colors hover:bg-blue-light rounded-lg"
              >
                {svc.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {services.map((svc) => (
              <div key={svc.id} id={svc.id} className="scroll-mt-24 bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-heading text-gray-900 mb-4">{svc.name}</h3>
                <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-coral text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading mb-4">Your First Choice for Vascular Care</h2>
          <p className="text-white/80 mb-8">Over 40 years of providing vascular care to patients throughout Virginia.</p>
          <Link href="/contact" className="bg-white text-coral font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors uppercase text-sm tracking-wider">
            Request Appointment
          </Link>
        </div>
      </section>
    </>
  )
}
