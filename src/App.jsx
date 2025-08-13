import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Check, ChevronRight, PlayCircle, Mail, Phone, Instagram, Linkedin, Youtube, Shield, Globe, Users, Smartphone, Package, Receipt, AlertTriangle, MessageSquare, FileText, BarChart3 } from "lucide-react";

/*
  ZOXDIL – Classic Professional Website (Single-file React app)
  - React + Tailwind + local UI components
  - Router-based multi-page site in one file for easy preview
  - Pages: Home, Features, Pricing (3 plans), About, Blog, FAQ, Contact, Terms, Privacy
  - All primary buttons navigate to real routes or external actions
*/

// ---------- Layout primitives ----------
const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-16 lg:py-24 ${className}`}>{children}</section>
);

// ---------- Shared UI ----------
const Brand = () => (
  <Link to="/" className="flex items-center gap-3">
    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-600 to-indigo-600" />
    <span className="text-xl font-extrabold tracking-tight">Zoxdil</span>
  </Link>
);

const PrimaryButton = ({ children, to, onClick, external = false, className = "" }) => (
  external ? (
    <a href={to} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-sky-700 text-white hover:bg-sky-800 transition ${className}`}>{children}</a>
  ) : (
    <Link to={to || "#"} onClick={onClick} className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-sky-700 text-white hover:bg-sky-800 transition ${className}`}>{children}</Link>
  )
);

const OutlineButton = ({ children, to, external = false, className = "" }) => (
  external ? (
    <a href={to} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold ring-1 ring-sky-700/30 hover:ring-sky-700 transition ${className}`}>{children}</a>
  ) : (
    <Link to={to} className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold ring-1 ring-sky-700/30 hover:ring-sky-700 transition ${className}`}>{children}</Link>
  )
);

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">{value}</div>
    <div className="mt-1 text-sm opacity-80">{label}</div>
  </div>
);

const Feature = ({ icon: Icon, title, desc }) => (
  <Card className="border-0 shadow-md rounded-2xl bg-white">
    <CardHeader className="space-y-2">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
        <Icon className="h-6 w-6" />
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pt-0 text-sm leading-6 opacity-90">{desc}</CardContent>
  </Card>
);

const CheckItem = ({ children }) => (
  <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 text-sky-700" /><span>{children}</span></li>
);

// ---------- Navigation ----------
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Brand />
        <nav className="hidden items-center gap-6 md:flex text-sm">
          {[
            ["Home", "/"],
            ["Features", "/features"],
            ["Pricing", "/pricing"],
            ["About", "/about"],
            ["Blog", "/blog"],
            ["FAQ", "/faq"],
            ["Contact", "/contact"],
          ].map(([label, to]) => (
            <NavLink key={to} to={to} className={({isActive}) => `hover:opacity-80 ${isActive?"text-sky-700 font-semibold":""}`}>{label}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <OutlineButton to="/pricing" className="hidden sm:inline-flex">View Pricing</OutlineButton>
          <PrimaryButton to="/start" className="hidden sm:inline-flex">Start Free Trial</PrimaryButton>
        </div>
      </Container>
    </header>
  );
};

// ---------- Footer ----------
const Footer = () => (
  <footer className="mt-10 border-t bg-slate-900 text-slate-200">
    <Container className="grid gap-10 py-12 md:grid-cols-4">
      <div>
        <div className="text-2xl font-extrabold">Zoxdil</div>
        <p className="mt-3 text-sm opacity-80">Classic, professional pharmacy software built for Indian chemist shops.</p>
      </div>
      <div>
        <div className="font-semibold">Quick Links</div>
        <ul className="mt-4 space-y-2 text-sm opacity-90">
          <li><Link to="/about" className="hover:opacity-80">About Us</Link></li>
          <li><Link to="/features" className="hover:opacity-80">Features</Link></li>
          <li><Link to="/pricing" className="hover:opacity-80">Pricing</Link></li>
          <li><Link to="/faq" className="hover:opacity-80">Support</Link></li>
        </ul>
      </div>
      <div>
        <div className="font-semibold">Legal</div>
        <ul className="mt-4 space-y-2 text-sm opacity-90">
          <li><Link to="/terms" className="hover:opacity-80">Terms & Conditions</Link></li>
          <li><Link to="/privacy" className="hover:opacity-80">Privacy Policy</Link></li>
        </ul>
      </div>
      <div>
        <div className="font-semibold">Contact Us</div>
        <ul className="mt-4 space-y-3 text-sm opacity-90">
          <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:+910000000000">+91‑0000000000</a></li>
          <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:support@zoxdil.in">support@zoxdil.in</a></li>
          <li className="flex items-center gap-4 text-xl">
            <a href="#" aria-label="Instagram" className="hover:opacity-80"><Instagram /></a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80"><Youtube /></a>
            <a href="#" aria-label="Linkedin" className="hover:opacity-80"><Linkedin /></a>
          </li>
        </ul>
      </div>
    </Container>
    <div className="border-t border-white/10 py-6 text-center text-sm opacity-80">
      © {new Date().getFullYear()} Zoxdil. All rights reserved. Made with ❤️ for Indian pharmacies.
    </div>
  </footer>
);

// ---------- Pages ----------
const Home = () => (
  <>
    {/* Hero */}
    <div className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(2,132,199,0.12),transparent_60%)]" />
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Classic, Professional <span className="text-sky-700">Pharmacy</span> Software for Bharat
          </motion.h1>
          <p className="mt-6 text-lg leading-8 opacity-90">Manage billing, purchases, stock, returns and GST — all from your mobile. <strong>Fast. Easy. Built for Indian chemist shops.</strong></p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton to="/start">Start Free Trial – No Card Required <ChevronRight className="ml-2 h-5 w-5" /></PrimaryButton>
            <OutlineButton to="/demo"><PlayCircle className="mr-2 h-5 w-5" /> Watch 2‑min Demo</OutlineButton>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-xl">
            <Stat value="5,000+" label="Happy Pharmacies" />
            <Stat value="₹50L+" label="Monthly Sales" />
            <Stat value="99.9%" label="Uptime Guaranteed" />
          </div>
        </div>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.15}} className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-xl" />
          <div className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 shadow-lg flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-sky-600" />
            <span className="text-sm">Live Demo Available</span>
          </div>
          <div className="absolute -right-2 -top-4 rounded-xl bg-sky-700 px-3 py-1 text-white text-sm shadow-lg">₹499 /month</div>
        </motion.div>
      </Container>
    </div>

    {/* Highlights */}
    <Section>
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Old Software Is <span className="text-red-600">Holding You Back</span></h2>
          <p className="mt-3 text-slate-600">You deserve better.</p>
          <ul className="mt-6 space-y-4 text-slate-700">
            <li className="flex items-start gap-3"><AlertTriangle className="mt-1 h-5 w-5 text-red-600" />Complicated systems that take hours to learn</li>
            <li className="flex items-start gap-3"><AlertTriangle className="mt-1 h-5 w-5 text-red-600" />No mobile access when you're away from the shop</li>
            <li className="flex items-start gap-3"><AlertTriangle className="mt-1 h-5 w-5 text-red-600" />Manual GST calculations and reporting</li>
            <li className="flex items-start gap-3"><AlertTriangle className="mt-1 h-5 w-5 text-red-600" />No real‑time stock tracking</li>
            <li className="flex items-start gap-3"><AlertTriangle className="mt-1 h-5 w-5 text-red-600" />Expensive setup and maintenance costs</li>
          </ul>
        </div>
        <Card className="border-0 shadow-xl rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl">Meet <span className="text-sky-700">Zoxdil</span> — Your Pharmacy's Best Friend</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 text-slate-700">
            <div className="flex items-center gap-3"><Badge>Easy</Badge> Easy to learn — set up in 5 minutes</div>
            <div className="flex items-center gap-3"><Badge>Made for Bharat</Badge> Designed with Indian pharmacies in mind</div>
            <div className="flex items-center gap-3"><Badge>Mobile‑first</Badge> Works on phones, tablets, desktop</div>
            <PrimaryButton to="/features" className="mt-2 w-fit">Explore Features <ChevronRight className="ml-2 h-5 w-5" /></PrimaryButton>
          </CardContent>
        </Card>
      </Container>
    </Section>

    {/* Feature grid preview */}
    <FeaturesGrid />

    {/* Pricing preview */}
    <Section className="bg-gradient-to-b from-white to-sky-50/40">
      <Container>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Simple. Transparent. <span className="text-sky-700">Affordable.</span></h2>
          <OutlineButton to="/pricing">See all plans</OutlineButton>
        </div>
        <PricingCards showHeader={false} compact />
      </Container>
    </Section>

    {/* CTA */}
    <Section>
      <Container className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-sky-700 px-6 py-8 text-white md:flex-row">
        <div className="text-center md:text-left">
          <div className="text-2xl font-bold">Join 5,000+ pharmacy owners who trust Zoxdil</div>
          <div className="opacity-90">Make your store smart. Save time. Earn more.</div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <PrimaryButton to="/start" className="bg-white text-sky-700 hover:bg-white/90">Start Free Trial</PrimaryButton>
          <OutlineButton to="https://wa.me/910000000000" external><MessageSquare className="mr-2 h-5 w-5" /> Talk on WhatsApp</OutlineButton>
        </div>
      </Container>
    </Section>
  </>
);

const FeaturesPage = () => (
  <>
    <HeroMini title="Features" subtitle="Everything you need to run your pharmacy efficiently." />
    <FeaturesGrid detailed />
  </>
);

const PricingPage = () => (
  <>
    <HeroMini title="Pricing" subtitle="Choose a plan that fits your pharmacy." />
    <Section>
      <Container>
        <PricingCards />
      </Container>
    </Section>
  </>
);

const AboutPage = () => (
  <>
    <HeroMini title="About Zoxdil" subtitle="Our mission is to empower Indian pharmacies with modern, reliable software." />
    <Section>
      <Container className="prose max-w-3xl">
        <p>Zoxdil was founded with a simple belief: pharmacy software should be easy, fast, and built for the realities of Bharat. No heavy servers, no complicated training—just a clean, dependable tool that helps you serve customers and grow profits.</p>
        <p>We blend a mobile‑first approach with GST‑compliant billing, inventory automation, and 24/7 support. Today, thousands of pharmacy owners across India trust Zoxdil to run their day‑to‑day operations.</p>
        <h3>What we value</h3>
        <ul>
          <li>Clarity over complexity</li>
          <li>Privacy and data security</li>
          <li>Exceptional support</li>
        </ul>
      </Container>
    </Section>
  </>
);

const BlogPage = () => (
  <>
    <HeroMini title="Blog & Resources" subtitle="Tips and updates to help your pharmacy thrive." />
    <Section>
      <Container className="grid gap-6 md:grid-cols-3">
        {[1,2,3,4,5,6].map(i => (
          <Card key={i} className="rounded-2xl border-0 shadow-md">
            <CardHeader>
              <CardTitle>How to speed up billing — Part {i}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm opacity-80">
              Learn quick wins for faster counter operations, inventory shortcuts, and WhatsApp invoicing.
              <div className="mt-4"><OutlineButton to="#">Read more</OutlineButton></div>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Section>
  </>
);

const FAQPage = () => (
  <>
    <HeroMini title="Frequently Asked Questions" subtitle="Got questions? We've got answers." />
    <Section>
      <Container className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Can I use it on mobile?</AccordionTrigger>
            <AccordionContent>Yes. Zoxdil is mobile‑first and works great on Android and iPhone. It also works on tablets and desktop.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is this GST compliant?</AccordionTrigger>
            <AccordionContent>Absolutely. Generate GST‑ready invoices and export reports formatted for easy GST filing.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do I need a computer to use it?</AccordionTrigger>
            <AccordionContent>No. A smartphone is enough. You can add a computer later — everything stays in sync.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I migrate my old data?</AccordionTrigger>
            <AccordionContent>Yes. Our team helps you import products, customers, suppliers and opening stock from Excel or your previous software.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What about customer support?</AccordionTrigger>
            <AccordionContent>We're available via WhatsApp and email 24/7. Most issues are resolved within minutes.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
    </Section>
  </>
);

const ContactPage = () => (
  <>
    <HeroMini title="Contact Us" subtitle="We usually reply within minutes." />
    <Section>
      <Container className="grid gap-10 lg:grid-cols-2">
        <Card className="border-0 shadow-md rounded-2xl">
          <CardHeader><CardTitle>Send a message</CardTitle></CardHeader>
          <CardContent>
            {/* Replace the action URL below with your Formspree/EmailJS endpoint */}
            <form action="https://formspree.io/f/xbjvlqww" method="POST" className="grid gap-4">
              <input name="name" required placeholder="Your name" className="rounded-xl border px-4 py-3" />
              <input type="email" name="email" required placeholder="Your email" className="rounded-xl border px-4 py-3" />
              <textarea name="message" required placeholder="How can we help?" rows={5} className="rounded-xl border px-4 py-3" />
              <PrimaryButton to="#" onClick={(e)=>{}} className="!inline-flex w-fit" >Send Message</PrimaryButton>
            </form>
          </CardContent>
        </Card>
        <div>
          <div className="text-lg font-semibold">Support</div>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:+910000000000">+91‑0000000000</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:support@zoxdil.in">support@zoxdil.in</a></li>
            <li className="flex items-center gap-2"><MessageSquare className="h-4 w-4" /> <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer">WhatsApp Chat</a></li>
          </ul>
          <div className="mt-6 text-sm opacity-80">We’re available 24/7 for urgent issues.</div>
        </div>
      </Container>
    </Section>
  </>
);

const PrivacyPage = () => (
  <>
    <HeroMini title="Privacy Policy" subtitle="We respect your data and your time." />
    <Section>
      <Container className="prose max-w-3xl">
        <p>This policy explains how Zoxdil collects, uses, and protects your information. We only collect data necessary to provide our services, and we never sell your data.</p>
        <h3>Information we collect</h3>
        <ul>
          <li>Account details: name, phone, email</li>
          <li>Store data: products, sales, inventory</li>
        </ul>
        <h3>Your rights</h3>
        <p>You can request export or deletion of your data anytime by emailing support@zoxdil.in.</p>
      </Container>
    </Section>
  </>
);

const TermsPage = () => (
  <>
    <HeroMini title="Terms & Conditions" subtitle="The rules of using Zoxdil." />
    <Section>
      <Container className="prose max-w-3xl">
        <p>By using Zoxdil, you agree to our acceptable use policy, subscription terms, and support scope. Billing is monthly and cancellable anytime.</p>
        <ul>
          <li>Do not share login credentials outside your organization</li>
          <li>Backups are performed regularly; uptime target is 99.9%</li>
          <li>Refunds are considered on a case‑by‑case basis</li>
        </ul>
      </Container>
    </Section>
  </>
);

const StartTrialPage = () => (
  <>
    <HeroMini title="Start Your Free Trial" subtitle="Create an account in under 2 minutes." />
    <Section>
      <Container className="grid gap-10 lg:grid-cols-2">
        <Card className="border-0 shadow-md rounded-2xl">
          <CardHeader><CardTitle>Create account</CardTitle></CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <input placeholder="Full name" className="rounded-xl border px-4 py-3" />
              <input placeholder="Phone" className="rounded-xl border px-4 py-3" />
              <input type="email" placeholder="Email" className="rounded-xl border px-4 py-3" />
              <input placeholder="Shop name" className="rounded-xl border px-4 py-3" />
              <PrimaryButton to="/thank-you" className="!inline-flex w-fit">Create Trial</PrimaryButton>
            </form>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md rounded-2xl">
          <CardHeader><CardTitle>What happens next?</CardTitle></CardHeader>
          <CardContent className="text-sm opacity-80 space-y-3">
            <p>• We’ll send a verification link on email/WhatsApp</p>
            <p>• You can login from mobile or desktop</p>
            <p>• Our team can help migrate your data</p>
          </CardContent>
        </Card>
      </Container>
    </Section>
  </>
);

const ThankYouPage = () => (
  <>
    <HeroMini title="You're all set!" subtitle="Our team will reach out shortly. In the meantime, explore the docs and features." />
    <Section>
      <Container className="flex items-center gap-3 flex-wrap">
        <PrimaryButton to="/features">Explore Features</PrimaryButton>
        <OutlineButton to="/pricing">View Pricing</OutlineButton>
        <OutlineButton to="/">Back to Home</OutlineButton>
      </Container>
    </Section>
  </>
);

// ---------- Reusable sections ----------
const HeroMini = ({ title, subtitle }) => (
  <div className="bg-gradient-to-b from-white to-sky-50/50 border-b">
    <Container className="py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold">{title}</h1>
      <p className="mt-2 text-slate-600">{subtitle}</p>
    </Container>
  </div>
);

const FeaturesGrid = ({ detailed = false }) => (
  <Section id="features">
    <Container>
      {!detailed && (
        <>
          <h2 className="text-center text-4xl font-extrabold">Key Features</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">Everything you need—clean, reliable, and mobile‑first.</p>
        </>
      )}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Feature icon={Receipt} title="Smart Billing & Invoicing" desc="Quick GST billing, customer details, returns—one tap." />
        <Feature icon={Package} title="Purchase & Inventory" desc="Auto‑update stocks. Low‑stock & expiry alerts." />
        <Feature icon={MessageSquare} title="WhatsApp Order Support" desc="Send invoices and track orders on WhatsApp." />
        <Feature icon={FileText} title="GST Reports & Compliance" desc="Export GST‑ready reports and sales insights." />
        <Feature icon={AlertTriangle} title="Expiry & Returns" desc="Automatic alerts and easy return processing." />
        <Feature icon={Users} title="Multi‑User Access" desc="Give staff access without losing control." />
        <Feature icon={Smartphone} title="Mobile‑First" desc="Great on Android, iPhone, tablets, desktop." />
        <Feature icon={Globe} title="Hindi + English" desc="Choose your language. Built for Bharat." />
      </div>
      {detailed && (
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Card className="rounded-2xl border-0 shadow-md">
            <CardHeader><CardTitle>Security & Reliability</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm opacity-80">
              <p className="flex items-start gap-2"><Shield className="mt-0.5 h-4 w-4"/>Role‑based access, secure backups, and audit logs.</p>
              <p className="flex items-start gap-2"><BarChart3 className="mt-0.5 h-4 w-4"/>Realtime dashboards with sales, profit, and stock aging.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-0 shadow-md">
            <CardHeader><CardTitle>Integrations</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm opacity-80">
              <p>WhatsApp, barcode scanners, label printers, and Excel import/export built‑in.</p>
            </CardContent>
          </Card>
        </div>
      )}
    </Container>
  </Section>
);

const PricingCards = ({ compact = false, showHeader = true }) => (
  <div className="mt-8">
    {showHeader && (
      <>
        <h2 className="text-center text-4xl font-extrabold">Choose the right plan</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">No hidden fees. Cancel anytime.</p>
      </>
    )}
    <div className={`mt-8 grid gap-6 ${compact?"lg:grid-cols-3":"md:grid-cols-3"}`}>
      {/* Starter */}
      <Card className="relative rounded-2xl border-0 shadow-2xl">
        <CardHeader className="pb-2"><CardTitle className="text-xl">Starter</CardTitle></CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-baseline gap-1"><div className="text-5xl font-extrabold">₹299</div><span className="opacity-70">/month</span></div>
          <ul className="mt-6 space-y-3 text-sm">
            <CheckItem>1 user</CheckItem>
            <CheckItem>Basic inventory & billing</CheckItem>
            <CheckItem>Email support</CheckItem>
          </ul>
          <PrimaryButton to="/start" className="mt-6 w-full">Start Free Trial</PrimaryButton>
        </CardContent>
      </Card>
      {/* Professional */}
      <Card className="relative rounded-2xl border-0 shadow-2xl ring-2 ring-sky-200">
        <div className="absolute right-6 top-6 rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-800">Most Popular</div>
        <CardHeader className="pb-2"><CardTitle className="text-xl">Professional</CardTitle></CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-baseline gap-1"><div className="text-5xl font-extrabold">₹499</div><span className="opacity-70">/month</span></div>
          <ul className="mt-6 space-y-3 text-sm">
            <CheckItem>Up to 5 users</CheckItem>
            <CheckItem>Inventory + expiry tracking</CheckItem>
            <CheckItem>WhatsApp & POS integration</CheckItem>
            <CheckItem>Priority support</CheckItem>
          </ul>
          <PrimaryButton to="/start" className="mt-6 w-full">Get Started</PrimaryButton>
        </CardContent>
      </Card>
      {/* Enterprise */}
      <Card className="relative rounded-2xl border-0 shadow-2xl">
        <CardHeader className="pb-2"><CardTitle className="text-xl">Enterprise</CardTitle></CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-baseline gap-1"><div className="text-5xl font-extrabold">₹999</div><span className="opacity-70">/month</span></div>
          <ul className="mt-6 space-y-3 text-sm">
            <CheckItem>Unlimited users</CheckItem>
            <CheckItem>Advanced analytics</CheckItem>
            <CheckItem>Custom integrations</CheckItem>
            <CheckItem>24/7 dedicated support</CheckItem>
          </ul>
          <PrimaryButton to="/contact" className="mt-6 w-full">Contact Sales</PrimaryButton>
        </CardContent>
      </Card>
    </div>
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-lg bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-100">{children}</span>
);

// ---------- App ----------
export default function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/start" element={<StartTrialPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const NotFound = () => (
  <Section>
    <Container className="text-center">
      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="mt-2">This page doesn’t exist.</p>
      <div className="mt-6 flex justify-center"><PrimaryButton to="/">Back to Home</PrimaryButton></div>
    </Container>
  </Section>
);
