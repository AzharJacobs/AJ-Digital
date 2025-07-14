import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Local Restaurant Website",
      category: "Website Development",
      description: "Modern responsive website with online ordering system and elegant menu display.",
      features: ["Responsive Design", "Online Ordering", "Menu Management", "Contact Integration"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Professional Law Firm",
      category: "Website Development",
      description: "Sophisticated website design with client portal and appointment booking system.",
      features: ["Client Portal", "Appointment Booking", "Case Studies", "Professional Design"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Fitness Studio Branding",
      category: "Graphic Design",
      description: "Complete brand identity package including logo, business cards, and promotional materials.",
      features: ["Logo Design", "Business Cards", "Promotional Flyers", "Brand Guidelines"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "E-commerce Fashion Store",
      category: "Website Development",
      description: "Full e-commerce solution with inventory management and secure payment processing.",
      features: ["E-commerce Platform", "Inventory Management", "Payment Integration", "Mobile Optimized"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Tech Startup Branding",
      category: "Graphic Design",
      description: "Modern brand identity and marketing materials for innovative technology company.",
      features: ["Brand Identity", "Marketing Materials", "Digital Assets", "Style Guide"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Healthcare Practice Website",
      category: "Website Development",
      description: "Professional healthcare website with patient portal and appointment scheduling.",
      features: ["Patient Portal", "Appointment System", "HIPAA Compliance", "Responsive Design"],
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing bg-background">
        <div className="container-custom text-center">
          <h1 className="heading-primary mb-6">Our Projects</h1>
          <div className="divider-gold mb-8" />
          <p className="text-tagline mb-8">
            Digital Excellence in Action
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-lg">
              Explore our portfolio of successful digital solutions. Each project
              represents our commitment to creating remarkable digital experiences
              that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-0">
                  {/* Project Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary">
                    <span className="font-serif text-lg tracking-wider">PROJECT IMAGE</span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="text-primary font-serif text-sm tracking-wider uppercase">
                      {project.category}
                    </div>
                    <h3 className="heading-tertiary text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-body text-sm">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rotate-45" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Showcase */}
      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">How We Work</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-card">
              <CardContent className="space-y-6">
                <div className="divider-gold mb-6" />
                <div className="process-number">01</div>
                <h3 className="heading-tertiary text-lg">Discovery</h3>
                <p className="text-body">
                  We dive deep into understanding your business, goals, and target audience
                  to create a strategic foundation for your project.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card">
              <CardContent className="space-y-6">
                <div className="divider-gold mb-6" />
                <div className="process-number">02</div>
                <h3 className="heading-tertiary text-lg">Design & Development</h3>
                <p className="text-body">
                  Our team brings your vision to life with elegant design and robust
                  development, ensuring every detail meets our high standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card">
              <CardContent className="space-y-6">
                <div className="divider-gold mb-6" />
                <div className="process-number">03</div>
                <h3 className="heading-tertiary text-lg">Launch & Support</h3>
                <p className="text-body">
                  We ensure a smooth launch and provide ongoing support to keep your
                  digital presence performing at its best.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="heading-secondary mb-6">Ready to Start Your Project?</h2>
          <div className="divider-gold mb-8" />
          <p className="text-body text-lg mb-8 max-w-2xl mx-auto">
            Let's create something remarkable together. Your digital legacy awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
