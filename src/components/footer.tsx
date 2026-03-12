import Link from 'next/link'

const offices = [
  { name: 'West End Office', phone: '804-288-1953', href: '/contact' },
  { name: 'Midlothian Office', phone: '804-288-1953', href: '/contact' },
  { name: 'Vascular Center', phone: '804-264-8782', href: '/centers#vascular' },
  { name: 'Hanover Office', phone: '804-288-1953', href: '/contact' },
  { name: 'Tappahannock Office', phone: '804-288-1953', href: '/contact' },
  { name: 'Richmond Vein Center', phone: '804-249-8346', href: '/centers#rvc' },
  { name: 'Petersburg Office', phone: '804-288-1953', href: '/contact' },
  { name: 'Mobility Center', phone: '804-622-0347', href: '/centers#mobility' },
  { name: 'Tri-Cities Office', phone: '804-288-1953', href: '/contact' },
]

export default function Footer() {
  return (
    <footer>
      {/* Main footer - white background like original */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="container-custom">
          {/* Centered VSA Logo */}
          <div className="flex justify-center mb-10">
            <Link href="/">
              <svg width="120" height="80" viewBox="0 0 120 80" className="flex-shrink-0">
                <text x="10" y="62" fontFamily="'Libre Baskerville', serif" fontSize="60" fontWeight="700" fill="#d06860" fontStyle="italic">V</text>
                <text x="42" y="55" fontFamily="'Libre Baskerville', serif" fontSize="42" fontWeight="700" fill="#999999" fontStyle="italic">S</text>
                <text x="68" y="62" fontFamily="'Libre Baskerville', serif" fontSize="60" fontWeight="700" fill="#3696da" fontStyle="italic">A</text>
              </svg>
            </Link>
          </div>

          {/* Office grid - 3 columns like original */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {offices.map((office) => (
              <div key={office.name}>
                <Link href={office.href} className="text-blue hover:text-blue-dark font-semibold text-sm transition-colors">
                  {office.name}
                </Link>
                <p className="text-gray-600 text-sm mt-1">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accreditation badges */}
      <div className="bg-white pb-12">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-10 max-w-4xl mx-auto">
            {/* AAAASF Badge */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-2 border-blue flex items-center justify-center bg-white">
                <div className="text-center">
                  <p className="text-blue text-[8px] font-bold leading-tight">ACCREDITED</p>
                  <p className="text-blue text-lg font-bold">IASF</p>
                  <p className="text-blue text-[7px] leading-tight">SURGERY FACILITY</p>
                </div>
              </div>
            </div>
            {/* IAC Badge */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-2 border-blue flex items-center justify-center bg-white">
                <div className="text-center">
                  <p className="text-blue text-[8px] font-bold">ACCREDITED FACILITY</p>
                  <p className="text-blue text-xs font-bold">IAC</p>
                  <p className="text-blue text-[7px] leading-tight">VASCULAR TESTING</p>
                </div>
              </div>
            </div>
            {/* ABC Badge */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-2 border-gray-500 flex items-center justify-center bg-white">
                <div className="text-center">
                  <p className="text-gray-600 text-[7px] font-bold">BOARD FOR CERTIFICATION</p>
                  <p className="text-gray-600 text-xs font-bold">ABC</p>
                  <p className="text-gray-600 text-[7px]">Accredited Facility</p>
                </div>
              </div>
            </div>
            {/* Top Docs Badge */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-lg bg-[#f5e6d0] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-700 text-[7px]">Richmond magazine</p>
                  <p className="text-gray-800 text-sm font-black leading-tight">TOP<br/>DOCS</p>
                  <p className="text-gray-600 text-[7px]">WINNER 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[#4a90b8] py-4">
        <div className="container-custom text-center">
          <p className="text-white text-xs uppercase tracking-wider">
            &copy; Copyright {new Date().getFullYear()} | Powered by Aroluxe
          </p>
        </div>
      </div>
    </footer>
  )
}
