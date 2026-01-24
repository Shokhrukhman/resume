import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, Send, Download, User, MessageCircle, Linkedin } from 'lucide-react'
import Link from 'next/link'
import profileData from '@/content/profile.json'
import { IconBadge } from '@/components/IconBadge'
import { Section } from '@/components/Section'
import { Navigation } from '@/components/Navigation'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-border-subtle p-8 md:p-12 card">
            <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-[float_3s_ease-in-out_infinite_alternate]" />
            <div className="relative text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary mb-4 js-hero-title">
                {profileData.personal.name}
              </h1>
              <p className="text-lg text-text-secondary mb-6 js-hero-subtitle">
                <span className="emph">Support Analyst</span> / Process Automation Specialist
              </p>
              <div className="flex items-center justify-center gap-2 text-text-muted mb-8">
                <MapPin className="h-4 w-4" />
                <span>{profileData.personal.location}</span>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <IconBadge name="workflow" label="Intercom API" />
                <IconBadge name="db" label="PostgreSQL" />
                <IconBadge name="sheets" label="Google Sheets" />
                <IconBadge name="bot" label="n8n Automations" />
                <IconBadge name="ops" label="Python Scripting" />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto mb-12">
              {profileData.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center js-hero-ctas">
              <Button asChild size="lg" className="btn-primary">
                <Link href="/resume">
                  <User className="mr-2 h-4 w-4" />
                  Open Resume
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border-subtle hover:bg-midnight-800">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Skills Section */}
      <Section title="Key Skills">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6 lift">
            <h3 className="text-xl font-bold text-accent mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.skills.technical.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-midnight-800 text-text-secondary rounded-full text-sm border border-border-subtle"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card p-6 lift">
            <h3 className="text-xl font-bold text-accent mb-4">Analytical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.skills.analytical.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-midnight-800 text-text-secondary rounded-full text-sm border border-border-subtle"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Recent Experience Preview */}
      <Section title="Recent Experience">
        <div className="card p-6 lift">
          <div className="text-left">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              {profileData.experience[0].position}
            </h3>
            <p className="text-text-muted mb-4">
              {profileData.experience[0].company} • {profileData.experience[0].period}
            </p>
            <ul className="space-y-2">
              {profileData.experience[0].achievements.slice(0, 3).map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span className="text-text-secondary">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact Information */}
      <Section id="contact" title="Contact Me">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="card p-4 lift w-[240px]">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-accent flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-text-muted">Email</p>
                <a 
                  href={`mailto:${profileData.personal.email}`}
                  className="text-text-primary hover:text-accent transition-colors text-sm whitespace-nowrap overflow-hidden text-ellipsis block glow-hover"
                  title={profileData.personal.email}
                  data-gsap-hover
                >
                  {profileData.personal.email}
                </a>
              </div>
            </div>
          </div>

          <div className="card p-4 lift w-[240px]">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-accent flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-text-muted">Phone</p>
                <a 
                  href={`tel:${profileData.personal.phone}`}
                  className="text-text-primary hover:text-accent transition-colors text-sm glow-hover"
                  data-gsap-hover
                >
                  {profileData.personal.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="card p-4 lift w-[240px]">
            <div className="flex items-center space-x-3">
              <Send className="h-5 w-5 text-accent flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-text-muted">Telegram</p>
                <a 
                  href={profileData.personal.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent transition-colors text-sm glow-hover"
                  data-gsap-hover
                >
                  @regis_anima
                </a>
              </div>
            </div>
          </div>

          <div className="card p-4 lift w-[240px]">
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-5 w-5 text-accent flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-text-muted">WhatsApp</p>
                <a 
                  href={profileData.personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent transition-colors text-sm glow-hover"
                  data-gsap-hover
                >
                  {profileData.personal.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="card p-4 lift w-[240px]">
            <div className="flex items-center space-x-3">
              <Linkedin className="h-5 w-5 text-accent flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-text-muted">LinkedIn</p>
                <a 
                  href={profileData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent transition-colors text-sm glow-hover"
                  data-gsap-hover
                >
                  Shokhrukh Koshel
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">
            © 2025 {profileData.personal.name} — All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
