import Link from 'next/link'

export const metadata = { title: 'About Us | Vascular Surgery Associates' }

export default function AboutPage() {
  return (
    <>
      {/* Hero - light blue gradient like original */}
      <section className="page-hero">
        <div className="container-custom">
          <h1>About Us</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              For nearly a half-century, Vascular Surgery Associates (formerly Virginia Surgical Associates) has provided vascular, endovascular, and general surgical care in Richmond and its surrounding areas. We are recognized as leaders in our industry through a long-standing and unwavering commitment to education on three levels.
            </p>

            <div className="space-y-10">
              {[
                {
                  title: 'Physician Education',
                  text: 'All of our physicians have been recognized for their academic achievements in medical school and, subsequently, each went on to attend nationally recognized surgical training programs. Each physician is board-certified in the specialty of vascular surgery.',
                },
                {
                  title: 'Continuing Education',
                  text: 'All of our doctors are deeply committed to the process of continuing education. They are well versed in the latest research and medical advancements in their field. They actively participate in medical seminars and training courses and have a collective experience of directing and/or performing over 100,000 vascular surgeries.',
                },
                {
                  title: 'Patient Education',
                  text: 'We are committed to patient education. We provide patients with an extensive library of pamphlets and brochures to assist them in better understanding vascular health, as well as providing details on the procedures and treatments VSA offers to help them live their healthiest life.',
                },
              ].map((level, i) => (
                <div key={level.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-coral text-coral flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading text-gray-900 mb-2">{level.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{level.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed mt-10">
              Our quest for excellence through education represents a consistent feature of our service line offering, whether you visit the VSA Vascular Center, VSA Vascular Lab, the Mobility Center, or the Vein Center.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              VSA exists to serve the vascular surgery needs of our patients, referring physicians, dialysis centers, and partner hospitals, providing high quality of care and excellent customer service. We strive to be the provider of choice in Central Virginia and to maintain a reputation as exemplary members of our community.
            </p>
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
