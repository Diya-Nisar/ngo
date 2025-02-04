import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">About Us</h3>
            <p className="text-sm font-roboto">
              We are dedicated to creating positive change in communities around the world through sustainable
              development, education, and environmental conservation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Quick Links</h3>
            <ul className="space-y-2 font-roboto">
              <li>
                <Link href="/" className="text-sm hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#volunteer" className="text-sm hover:text-primary">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm hover:text-primary">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Contact Us</h3>
            <p className="text-sm font-roboto">123 NGO Street, City, Country</p>
            <p className="text-sm font-roboto">Email: info@ngo.org</p>
            <p className="text-sm font-roboto">Phone: +1 234 567 8900</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm font-roboto">
          <p>&copy; 2023 Your NGO Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

