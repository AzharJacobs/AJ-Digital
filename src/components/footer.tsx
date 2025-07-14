import Link from "next/link";
import { Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--background))] dark:bg-[hsl(140,15%,12%)] text-foreground dark:text-[hsl(45,25%,95%)] transition-colors">
      <div className="container-custom py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Get In Touch</h2>
          <div className="divider-gold"></div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Email */}
          <div className="space-y-2">
            <div className="text-primary font-serif text-lg tracking-wider uppercase">
              Email
            </div>
            <a
              href="mailto:AzharJ2003@gmail.com"
              className="text-body hover:text-primary transition-colors duration-300"
            >
              AzharJ2003@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <div className="text-primary font-serif text-lg tracking-wider uppercase">
              Phone
            </div>
            <a
              href="tel:+27663175741"
              className="text-body hover:text-primary transition-colors duration-300"
            >
              +27 66 317 5741
            </a>
          </div>

          {/* Social */}
          <div className="space-y-2">
            <div className="text-primary font-serif text-lg tracking-wider uppercase">
              Social
            </div>
            <a
              href="https://instagram.com/aj_digital_studios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Instagram size={16} />
              aj_digital_studios
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/20 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              AJ Digital Studio © 2024
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
