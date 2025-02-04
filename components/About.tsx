import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-playfair text-gray-800">About Our NGO</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="font-roboto text-gray-700">
            <p className="text-lg mb-4">
              Our NGO is dedicated to creating positive change in communities around the world. We focus on sustainable
              development, education, and environmental conservation.
            </p>
            <p className="text-lg mb-4">
              Founded in 2010, we have grown from a small group of passionate individuals to a global organization with
              thousands of volunteers and supporters.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-4xl font-playfair text-primary">50+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-montserrat">Countries Impacted</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-4xl font-playfair text-primary">1M+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-montserrat">Lives Improved</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-4xl font-playfair text-primary">10K+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-montserrat">Active Volunteers</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-4xl font-playfair text-primary">100+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-montserrat">Ongoing Projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

