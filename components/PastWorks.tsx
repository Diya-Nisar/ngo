import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Clean Water Initiative",
    description: "Provided clean water access to 50,000 people in rural communities.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Education for All",
    description: "Built 100 schools and educated over 50,000 children in developing countries.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Reforestation Project",
    description: "Planted 1 million trees to combat deforestation and climate change.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Healthcare Outreach",
    description: "Provided medical care to 100,000 individuals in underserved areas.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function PastWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-playfair text-gray-800">Our Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="font-montserrat text-lg text-gray-800">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-roboto text-gray-600">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

