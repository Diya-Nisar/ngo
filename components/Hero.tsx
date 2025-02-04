import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="font-playfair text-3xl font-extrabold sm:text-5xl text-white">
            Empowering Communities
            <strong className="block font-extrabold text-primary mt-2">Building a Better Future</strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white font-roboto font-light">
            Join us in our mission to create lasting change and improve lives around the world.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Button asChild size="lg" className="font-montserrat">
              <Link href="#volunteer">Get Involved</Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="font-montserrat text-white hover:text-primary hover:bg-white/10"
            >
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

