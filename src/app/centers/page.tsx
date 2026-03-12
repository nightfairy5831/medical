import Link from 'next/link'

export const metadata = { title: 'Our Centers | Vascular Surgery Associates' }

const centers = [
  {
    id: 'vascular',
    name: 'Vascular Centers',
    desc: 'The Vascular Centers are freestanding, outpatient endovascular procedure centers, staffed by physicians, a dedicated group of nurses, and technologists. Our centers provide state-of-the-art vascular care in a comfortable, patient-focused environment.',
    cta: 'VIEW LOCATIONS',
  },
  {
    id: 'labs',
    name: 'Vascular Labs',
    desc: 'The VSA Vascular Labs are private laboratories, operating under the direction of Vascular Surgery Associates, which provide a range of non-invasive treatments. Our labs utilize the latest diagnostic technology to accurately assess vascular conditions.',
    cta: 'VIEW LOCATIONS',
  },
  {
    id: 'vein',
    name: 'Vein Center',
    desc: 'The Vein Center point of difference is in the level of training and experience, something that can\'t be matched at other practices that specialize in varicose or spider veins. Our certified vascular surgeons bring unparalleled expertise to every vein treatment.',
    cta: 'VIEW LOCATIONS',
  },
  {
    id: 'mobility',
    name: 'Mobility Center',
    desc: 'The Mobility Center allows us to deliver greater, more complete care to our amputee patients because our prosthetist works directly with VSA surgeons. This integrated approach ensures seamless coordination between surgical care and prosthetic rehabilitation.',
    cta: 'VIEW LOCATIONS',
  },
]

export default function CentersPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-custom">
          <h1>Our Centers</h1>
        </div>
      </section>

      {/* Centers - Portfolio grid like original */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {centers.map((center) => (
              <div key={center.id} id={center.id} className="group relative overflow-hidden rounded-lg scroll-mt-24">
                {/* Image placeholder */}
                <div
                  className="w-full h-80 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80")',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="font-heading text-2xl mb-3">{center.name}</h2>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">{center.desc}</p>
                  <Link href="/contact" className="inline-block text-white text-xs font-bold uppercase tracking-wider border-b-2 border-white pb-1 hover:text-coral-light hover:border-coral-light transition-colors">
                    {center.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-coral text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading mb-4">Visit One of Our Centers</h2>
          <p className="text-white/80 mb-8">Contact us to schedule a visit at the center nearest you.</p>
          <Link href="/contact" className="bg-white text-coral font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors uppercase text-sm tracking-wider">
            Request Appointment
          </Link>
        </div>
      </section>
    </>
  )
}
