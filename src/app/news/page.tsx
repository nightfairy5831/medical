import Link from 'next/link'

export const metadata = { title: 'News | Vascular Surgery Associates' }

const articles = [
  {
    title: 'Dr. Ryan Gordon joins VSA',
    excerpt: 'Please join us in welcoming our newest Physician, Dr. Ryan Gordon, to the practice. Dr. Gordon joins us after graduating from UVA medical school, completing his residency with distinction.',
    date: 'January 2025',
    category: 'Team',
  },
  {
    title: 'Larissa Rodriguez joins VSA',
    excerpt: 'We are pleased to announce that Larissa Rodriguez, DNP, AG-ACNP, has recently joined the VSA team at our Hanover office! Larissa is a seasoned nurse practitioner with cardiovascular experience.',
    date: 'December 2024',
    category: 'Team',
  },
  {
    title: 'TOP DOCS 2025',
    excerpt: 'Vascular Surgery Associates physicians have been recognized as Top Docs for 2025, a testament to our commitment to excellence in vascular care across Virginia.',
    date: 'November 2024',
    category: 'Awards',
  },
  {
    title: 'Dr. Gregg Londrey Retirement',
    excerpt: 'Please join us in congratulating Dr. Gregg Londrey on his upcoming retirement! Dr. Londrey graduated from Virginia Commonwealth University School of Medicine in 1984 and has dedicated his career to vascular surgery.',
    date: 'October 2024',
    category: 'Team',
  },
  {
    title: "America's Best Vascular Surgeons 2024",
    excerpt: "Vascular Surgery Associates is honored to announce that Drs. Vishnu Ambur, Jeff Brown, Drew Tierney and Marc Warner have been designated in Newsweek magazine's 'America's Best Vascular Surgeons 2024'.",
    date: 'September 2024',
    category: 'Awards',
  },
  {
    title: 'New In 2024 – RVC Opening in the Tri-Cities',
    excerpt: 'Richmond Vein Center is expanding! We are excited to announce the opening of our new Tri-Cities location, bringing our expert vein care services closer to more patients.',
    date: 'August 2024',
    category: 'Expansion',
  },
]

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-custom">
          <h1>News</h1>
        </div>
      </section>

      {/* Articles - Grid layout like original */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article key={article.title} className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">{article.category}</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-400 mb-2">{article.date}</p>
                  <h2 className="text-lg font-heading text-gray-900 mb-3">{article.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <span className="text-blue text-sm font-semibold hover:underline cursor-pointer">
                    Read More →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-coral text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading mb-4">Have Questions?</h2>
          <p className="text-white/80 mb-8">Contact us to learn more about our services and team.</p>
          <Link href="/contact" className="bg-white text-coral font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors uppercase text-sm tracking-wider">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
