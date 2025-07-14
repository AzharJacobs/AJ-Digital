import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing bg-background">
        <div className="container-custom text-center">
          <h1 className="heading-primary mb-6">About Us</h1>
          <div className="divider-gold mb-8" />
          <p className="text-tagline mb-8">
            Established Excellence in Digital Solutions
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-body text-lg">
              At AJ Digital Studio, we believe every small business deserves a unique
              digital presence that truly represents their vision and values.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-secondary mb-6">Our Story</h2>
              <div className="divider-gold mb-8" />
              <div className="space-y-6 text-body">
                <p>
                  Founded with a passion for creating digital experiences that matter,
                  AJ Digital Studio has been helping small businesses establish their
                  online presence with sophisticated solutions and timeless quality.
                </p>
                <p>
                  Whether you're just starting out or looking to revamp your online
                  identity, we bring together creativity, technical expertise, and
                  strategic thinking to deliver results that exceed expectations.
                </p>
                <p>
                  Our approach is simple: we listen, we understand, and we create.
                  Every project is a collaboration, and every solution is tailored
                  to your unique needs and goals.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <Card className="p-8 bg-card">
                <CardContent className="text-center space-y-4">
                  <div className="process-number">50+</div>
                  <h3 className="heading-tertiary text-lg">Projects Completed</h3>
                  <p className="text-body">Successful digital solutions delivered</p>
                </CardContent>
              </Card>
              <Card className="p-8 bg-card">
                <CardContent className="text-center space-y-4">
                  <div className="process-number">100%</div>
                  <h3 className="heading-tertiary text-lg">Client Satisfaction</h3>
                  <p className="text-body">Commitment to excellence in every project</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Our Values</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-6">
                <div className="divider-gold mb-6" />
                <h3 className="heading-tertiary text-xl">Excellence</h3>
                <p className="text-body">
                  We strive for perfection in every pixel, every line of code,
                  and every interaction we create.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-6">
                <div className="divider-gold mb-6" />
                <h3 className="heading-tertiary text-xl">Innovation</h3>
                <p className="text-body">
                  We embrace new technologies and creative approaches to
                  deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="space-y-6">
                <div className="divider-gold mb-6" />
                <h3 className="heading-tertiary text-xl">Partnership</h3>
                <p className="text-body">
                  Your success is our success. We work as your dedicated
                  digital partner, not just a service provider.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Meet Our Team</h2>
            <div className="divider-gold" />
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-12 bg-card">
              <CardContent className="space-y-6">
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-primary text-2xl font-serif font-semibold">AJ</span>
                </div>
                <h3 className="heading-tertiary text-xl">Azhar Jafari</h3>
                <p className="text-primary font-serif tracking-wider">Founder & Lead Designer</p>
                <p className="text-body">
                  With a passion for creating digital experiences that matter,
                  Azhar leads every project with creativity, technical expertise,
                  and a commitment to excellence that defines AJ Digital Studio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
