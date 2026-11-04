import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import { Heart, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-background text-foreground pt-20 pb-10 px-6 md:px-12 border-t border-border overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-2/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-border">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/soci-dev-logo.png"
                width={120}
                height={120}
                alt="Development Logo"
              />
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Empowering grassroots action, connecting local volunteers, and
              organizing impactful community drives across the nation.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-elevated border border-border hover:border-brand hover:bg-brand hover:text-black flex items-center justify-center text-foreground transition-all duration-300"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-elevated border border-border hover:border-brand hover:bg-brand hover:text-black flex items-center justify-center text-foreground transition-all duration-300"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-elevated border border-border hover:border-brand hover:bg-brand hover:text-black flex items-center justify-center text-foreground transition-all duration-300"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-elevated border border-border hover:border-brand hover:bg-brand hover:text-black flex items-center justify-center text-foreground transition-all duration-300"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand">
              Platform
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/events"
                  className="hover:text-foreground transition-colors"
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  href="/create-event"
                  className="hover:text-foreground transition-colors"
                >
                  Create an Event
                </Link>
              </li>
              <li>
                <Link
                  href="/manage-event"
                  className="hover:text-foreground transition-colors"
                >
                  Manage My Events
                </Link>
              </li>
              <li>
                <Link
                  href="/joined-event"
                  className="hover:text-foreground transition-colors"
                >
                  My Joined Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Impact Initiatives */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-2">
              Initiatives
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="" className="hover:text-foreground transition-colors">
                  Winter Relief Drives
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-foreground transition-colors">
                  Food Distribution
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-foreground transition-colors">
                  Community Cleanups
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-foreground transition-colors">
                  Youth Volunteering
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support & Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Support
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="" className="hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="inline-flex items-center gap-1 hover:text-brand transition-colors"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[16px] text-muted-foreground">
          <p>© {new Date().getFullYear()} Social Development Events. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Made With for</span>
            <Heart className="w-3.5 h-3.5 text-brand fill-brand" />
            <span>A Better Tomorrow</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
