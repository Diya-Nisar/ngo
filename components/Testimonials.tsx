import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Volunteer",
    quote:
      "Working with this NGO has been an incredibly rewarding experience. I've seen firsthand the positive impact we're making in communities.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Lee",
    role: "Community Leader",
    quote:
      "The support we've received has transformed our village. We now have clean water and a school for our children.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emma Garcia",
    role: "Donor",
    quote:
      "I'm proud to support an organization that uses resources so effectively to create lasting change in the world.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-playfair text-gray-800">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center bg-white shadow-md">
              <CardHeader>
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto"
                />
                <CardTitle className="font-montserrat text-lg text-gray-800">{testimonial.name}</CardTitle>
                <p className="text-sm text-gray-500 font-roboto">{testimonial.role}</p>
              </CardHeader>
              <CardContent>
                <p className="italic font-roboto text-gray-600">&ldquo;{testimonial.quote}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

