import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing bg-background">
        <div className="container-custom text-center">
          <h1 className="heading-primary mb-6">
            Digital<br />Studio
          </h1>
          <div className="divider-gold mb-8"></div>
          <p className="text-tagline mb-8">
            Established Excellence in Digital Solutions
          </p>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-body text-lg">
              At AJ Digital Studio, we believe every small business deserves a unique
              digital presence. Whether you're just starting out or looking to revamp your
              online identity, we deliver sophisticated solutions with timeless quality.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/projects">View Our Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Our Refined Process</h2>
            <div className="divider-gold"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dream It */}
            <Card className="text-center p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="divider-gold mb-4"></div>
                <div className="process-number">01</div>
                <h3 className="heading-tertiary text-lg">Dream It</h3>
                <p className="text-body italic">
                  Share your vision and goals with us
                </p>
              </CardContent>
            </Card>

            {/* Build It */}
            <Card className="text-center p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="divider-gold mb-4"></div>
                <div className="process-number">02</div>
                <h3 className="heading-tertiary text-lg">Build It</h3>
                <p className="text-body italic">
                  We bring your ideas to life
                </p>
              </CardContent>
            </Card>

            {/* Launch It */}
            <Card className="text-center p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="divider-gold mb-4"></div>
                <div className="process-number">03</div>
                <h3 className="heading-tertiary text-lg">Launch It</h3>
                <p className="text-body italic">
                  We make sure your site is ready to shine
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-body italic text-lg">
              Let's create something remarkable together. Your digital legacy awaits.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Our Distinguished Services</h2>
            <div className="divider-gold"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Website Development */}
            <Card className="p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-6">
                <div className="divider-gold mb-6"></div>
                <h3 className="heading-tertiary text-xl text-center">
                  Website Development
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45"></div>
                    Responsive Designs
                  </li>
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45"></div>
                    Ecommerce Solutions
                  </li>
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45"></div>
                    Maintenance Plans
                  </li>
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45"></div>
                    UI/UX Design
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Graphic Design */}
            <Card className="p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-6">
                <div className="divider-gold mb-6"></div>
                <h3 className="heading-tertiary text-xl text-center">
                  Graphic Design
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45"></div>
                    Professional Logos
                  </li>
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45"></div>
                    Business Cards
                  </li>
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45"></div>
                    Flyers & Posters
                  </li>
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45"></div>
                    Brand Identity
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/pricing">View Our Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
