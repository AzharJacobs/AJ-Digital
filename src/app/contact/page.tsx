"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Instagram, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you soon.");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing bg-background">
        <div className="container-custom text-center">
          <h1 className="heading-primary mb-6">Get In Touch</h1>
          <div className="divider-gold mb-8" />
          <p className="text-tagline mb-8">
            Let's Create Something Remarkable Together
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-lg">
              Ready to bring your digital vision to life? We'd love to hear about your project
              and discuss how we can help you achieve your goals with our digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="p-8 bg-card">
              <CardContent className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="heading-tertiary text-xl mb-4">Send Us a Message</h2>
                  <div className="divider-gold" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="website-development">Website Development</option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="brand-identity">Brand Identity</option>
                        <option value="maintenance">Maintenance Plan</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 bg-card">
                <CardContent className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="heading-tertiary text-xl mb-4">Contact Information</h3>
                    <div className="divider-gold" />
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-primary font-serif text-sm tracking-wider uppercase">Email</div>
                        <a href="mailto:AzharJ2003@gmail.com" className="text-body hover:text-primary transition-colors">
                          AzharJ2003@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-primary font-serif text-sm tracking-wider uppercase">Phone</div>
                        <a href="tel:+27663175741" className="text-body hover:text-primary transition-colors">
                          +27 66 317 5741
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Instagram className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-primary font-serif text-sm tracking-wider uppercase">Social</div>
                        <a
                          href="https://instagram.com/aj_digital_studios"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-body hover:text-primary transition-colors"
                        >
                          @aj_digital_studios
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-primary font-serif text-sm tracking-wider uppercase">Location</div>
                        <div className="text-body">South Africa</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-primary font-serif text-sm tracking-wider uppercase">Business Hours</div>
                        <div className="text-body">Mon - Fri: 9:00 AM - 6:00 PM SAST</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-card">
                <CardContent className="space-y-4">
                  <h3 className="heading-tertiary text-lg text-center">Why Choose AJ Digital Studio?</h3>
                  <div className="divider-gold" />
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-body text-sm">
                      <div className="w-2 h-2 bg-primary rotate-45" />
                      Free initial consultation
                    </li>
                    <li className="flex items-center gap-3 text-body text-sm">
                      <div className="w-2 h-2 bg-primary rotate-45" />
                      Transparent pricing with no hidden fees
                    </li>
                    <li className="flex items-center gap-3 text-body text-sm">
                      <div className="w-2 h-2 bg-primary rotate-45" />
                      Dedicated project management
                    </li>
                    <li className="flex items-center gap-3 text-body text-sm">
                      <div className="w-2 h-2 bg-primary rotate-45" />
                      100% satisfaction guarantee
                    </li>
                    <li className="flex items-center gap-3 text-body text-sm">
                      <div className="w-2 h-2 bg-primary rotate-45" />
                      Ongoing support and maintenance
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Frequently Asked Questions</h2>
            <div className="divider-gold" />
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-card">
              <CardContent className="space-y-4">
                <h3 className="heading-tertiary text-lg">How long does a typical project take?</h3>
                <p className="text-body text-sm">
                  Website projects typically take 2-6 weeks depending on complexity.
                  Graphic design projects are usually completed within 1-2 weeks.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-card">
              <CardContent className="space-y-4">
                <h3 className="heading-tertiary text-lg">Do you offer payment plans?</h3>
                <p className="text-body text-sm">
                  Yes, we offer flexible payment options including 50% upfront and 50%
                  on completion for most projects.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-card">
              <CardContent className="space-y-4">
                <h3 className="heading-tertiary text-lg">What's included in ongoing support?</h3>
                <p className="text-body text-sm">
                  Our support includes content updates, security monitoring,
                  performance optimization, and technical assistance.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-card">
              <CardContent className="space-y-4">
                <h3 className="heading-tertiary text-lg">Can you work with existing websites?</h3>
                <p className="text-body text-sm">
                  Absolutely! We can redesign, optimize, or add functionality
                  to your existing website.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
