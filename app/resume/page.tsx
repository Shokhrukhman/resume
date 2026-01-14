import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, ExternalLink, ArrowLeft, Calendar, Building, GraduationCap, Award, Globe, MessageCircle, Linkedin } from 'lucide-react'
import Link from 'next/link'
import profileData from '@/content/profile.json'
import { Section } from '@/components/Section'
import { PrintButton } from '@/components/print-button'
import { Navigation } from '@/components/Navigation'

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Actions */}
          <div className="flex justify-between items-center mb-8">
            <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <PrintButton />
          </div>

          {/* Personal Information */}
          <div className="card p-8 mb-8 print-avoid-break js-reveal-section">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-text-primary mb-2">
                {profileData.personal.name}
              </h1>
              <p className="text-xl text-text-secondary mb-4">
                {profileData.personal.title}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-text-muted">{profileData.personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                  <a 
                    href={`mailto:${profileData.personal.email}`} 
                    className="text-text-primary hover:text-accent text-xs whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] block"
                    title={profileData.personal.email}
                  >
                    {profileData.personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                  <a href={`tel:${profileData.personal.phone}`} className="text-text-primary hover:text-accent">
                    {profileData.personal.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-accent flex-shrink-0" />
                  <a href={profileData.personal.telegram} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent">
                    Telegram
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <a href={profileData.personal.whatsapp} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent">
                    WhatsApp
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-accent flex-shrink-0" />
                  <a href={profileData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <Section title="Professional Summary">
            <div className="card p-6 print-avoid-break">
              <p className="text-text-secondary leading-relaxed">
                {profileData.summary}
              </p>
            </div>
          </Section>

          {/* Skills */}
          <Section title="Key Skills">
            <div className="card p-6 print-avoid-break">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Technical Skills</h4>
                  <ul className="space-y-1">
                    {profileData.skills.technical.map((skill, index) => (
                      <li key={index} className="text-text-muted">
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Analytical Skills</h4>
                  <ul className="space-y-1">
                    {profileData.skills.analytical.map((skill, index) => (
                      <li key={index} className="text-text-muted">
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* Professional Experience */}
          <Section title="Professional Experience">
            <div className="card p-6 print-avoid-break">
              <div className="space-y-8">
                {profileData.experience.map((job, index) => (
                  <div key={index} className="border-l-2 border-accent pl-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary">
                          {job.position}
                        </h3>
                        <p className="text-accent font-medium">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-text-muted text-sm mt-1 md:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-text-muted">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Education */}
          <Card className="mb-8 print-avoid-break">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profileData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1 md:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <Card className="mb-8 print-avoid-break">
            <CardHeader>
              <CardTitle className="text-primary">Key Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {profileData.achievements.map((achievement, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Languages & Interests */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="print-avoid-break">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {profileData.languages.join(', ')}
                </p>
              </CardContent>
            </Card>

            <Card className="print-avoid-break">
              <CardHeader>
                <CardTitle className="text-primary">Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {profileData.interests.join(', ')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-16 no-print">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">
            © 2025 {profileData.personal.name} — All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
