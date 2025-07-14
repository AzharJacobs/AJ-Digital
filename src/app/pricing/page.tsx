import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Pricing() {
  const webPackages = [
    {
      name: "Essential",
      price: "R4,500",
      period: "Starting from",
      description: "Perfect for small businesses getting started online",
      features: [
        "Responsive Website Design",
        "Up to 5 Pages",
        "Contact Form Integration",
        "Basic SEO Optimization",
        "Mobile Optimization",
        "1 Month Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "R8,500",
      period: "Starting from",
      description: "Ideal for growing businesses that need more functionality",
      features: [
        "Everything in Essential",
        "Up to 10 Pages",
        "CMS Integration",
        "Advanced SEO",
        "Social Media Integration",
        "Analytics Setup",
        "3 Months Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "R15,000",
      period: "Starting from",
      description: "Comprehensive solution for established businesses",
      features: [
        "Everything in Professional",
        "Unlimited Pages",
        "E-commerce Functionality",
        "Custom Features",
        "Advanced Security",
        "Performance Optimization",
        "6 Months Support"
      ],
      popular: false
    }
  ];

  const designServices = [
    {
      name: "Logo Design",
      price: "R1,200",
      description: "Professional logo with 3 concepts and unlimited revisions"
    },
    {
      name: "Business Cards",
      price: "R450",
      description: "Professional business card design with print-ready files"
    },
    {
      name: "Brand Identity Package",
      price: "R3,500",
      description: "Complete brand package including logo, business cards, and style guide"
    },
    {
      name: "Marketing Flyers",
      price: "R650",
      description: "Eye-catching flyer design for your marketing campaigns"
    },
    {
      name: "Social Media Graphics",
      price: "R1,800",
      description: "Social media template package for consistent brand presence"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing bg-background">
        <div className="container-custom text-center">
          <h1 className="heading-primary mb-6">Pricing</h1>
          <div className="divider-gold mb-8" />
          <p className="text-tagline mb-8">
            Transparent Pricing for Digital Excellence
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-lg">
              Choose from our carefully crafted packages designed to meet your specific needs.
              All pricing is transparent with no hidden fees, and we offer flexible payment options.
            </p>
          </div>
        </div>
      </section>

      {/* Website Development Packages */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Website Development</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {webPackages.map((pkg, index) => (
              <Card key={index} className={`p-8 bg-card relative hover:shadow-lg transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-primary' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium tracking-wide">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <h3 className="heading-tertiary text-xl mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-serif text-primary font-semibold mb-1">
                      {pkg.price}
                    </div>
                    <div className="text-sm text-muted-foreground">{pkg.period}</div>
                  </div>

                  <div className="divider-gold" />

                  <p className="text-body text-sm text-center">{pkg.description}</p>

                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-body text-sm">
                        <div className="w-2 h-2 bg-primary rotate-45 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${pkg.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    <Link href="/contact">Choose Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design Services */}
      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Graphic Design Services</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designServices.map((service, index) => (
              <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow duration-300">
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <h3 className="heading-tertiary text-lg mb-2">{service.name}</h3>
                    <div className="text-2xl font-serif text-primary font-semibold">
                      {service.price}
                    </div>
                  </div>

                  <div className="divider-gold" />

                  <p className="text-body text-sm text-center">{service.description}</p>

                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Additional Services</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card">
              <CardContent className="space-y-6">
                <h3 className="heading-tertiary text-xl text-center">Maintenance Plans</h3>
                <div className="divider-gold" />
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45" />
                    Monthly content updates
                  </li>
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45" />
                    Security monitoring
                  </li>
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45" />
                    Performance optimization
                  </li>
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45" />
                    Technical support
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-primary font-serif text-xl font-semibold">From R850/month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-card">
              <CardContent className="space-y-6">
                <h3 className="heading-tertiary text-xl text-center">Custom Projects</h3>
                <div className="divider-gold" />
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45" />
                    Custom web applications
                  </li>
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45" />
                    E-commerce solutions
                  </li>
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45" />
                    Integration services
                  </li>
                  <li className="flex items-center gap-3 text-body">
                    <div className="w-2 h-2 bg-primary rotate-45" />
                    Consultation services
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-primary font-serif text-xl font-semibold">Custom Quote</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing bg-background">
        <div className="container-custom text-center">
          <h2 className="heading-secondary mb-6">Ready to Get Started?</h2>
          <div className="divider-gold mb-8" />
          <p className="text-body text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote tailored to your specific needs.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
