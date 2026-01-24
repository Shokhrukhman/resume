import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Code, Database, Zap, TrendingUp, Users, Globe2, Settings } from 'lucide-react'
import Link from 'next/link'
import profileData from '@/content/profile.json'
import { Section } from '@/components/Section'
import { Navigation } from '@/components/Navigation'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Projects Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 js-reveal-section">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Projects</h1>
              <p className="text-muted-foreground">
                Automation and analytics projects showcasing technical expertise
              </p>
            </div>
            <Button asChild variant="outline" size="sm" className="self-start sm:self-auto">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="js-reveal-section">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {profileData.projects.slice(0, 3).map((project, index) => {
                // Иконки для каждого проекта
                const projectIcons = [
                  <Zap key="zap" className="h-5 w-5 text-accent" />, // Support System from Scratch
                  <Database key="db" className="h-5 w-5 text-accent" />, // Workflow Automation System
                  <TrendingUp key="trend" className="h-5 w-5 text-accent" />, // Support Analytics & Quality Control
                ]
                
                return (
                  <div key={index} className="card p-6 lift" data-gsap-hover>
                    <div className="flex items-center gap-3 mb-4">
                      {projectIcons[index]}
                      <h3 className="text-lg font-bold text-text-primary">{project.title}</h3>
                    </div>
                <p className="text-text-secondary mb-6">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-midnight-800 text-text-secondary rounded text-xs border border-border-subtle"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Impact</h4>
                    <p className="text-sm text-text-muted bg-midnight-800 p-3 rounded border border-border-subtle">
                      {project.impact}
                    </p>
                  </div>
                </div>
                  </div>
                )
              })}
            </div>
            {/* Last 2 projects centered */}
            {profileData.projects.length > 3 && (
              <div className="flex justify-center gap-8 mt-8">
                {profileData.projects.slice(3).map((project, index) => {
                  const actualIndex = index + 3
                  const projectIcons = [
                    <Users key="users" className="h-5 w-5 text-accent" />, // 24/7 Support Department Setup
                    <Globe2 key="globe" className="h-5 w-5 text-accent" />, // Support Operations Optimization & Geo-Automation
                  ]
                  
                  return (
                    <div key={actualIndex} className="card p-6 lift w-full max-w-md" data-gsap-hover>
                      <div className="flex items-center gap-3 mb-4">
                        {projectIcons[index]}
                        <h3 className="text-lg font-bold text-text-primary">{project.title}</h3>
                      </div>
                      <p className="text-text-secondary mb-6">
                        {project.description}
                      </p>
                      
                      <div className="space-y-4">
                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                            <Code className="h-4 w-4" />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-midnight-800 text-text-secondary rounded text-xs border border-border-subtle"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Impact */}
                        <div>
                          <h4 className="font-semibold text-text-primary mb-2">Impact</h4>
                          <p className="text-sm text-text-muted bg-midnight-800 p-3 rounded border border-border-subtle">
                            {project.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Additional Project Information */}
          <Section title="Project Highlights">
            <div className="card p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Support Department Leadership</h4>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Built complete support departments from scratch, establishing 24/7 coverage</li>
                    <li>• Designed efficient workflows to minimize customer wait times</li>
                    <li>• Implemented comprehensive metrics tracking for SLA compliance and quality</li>
                    <li>• Created knowledge bases from the ground up for agents and customers</li>
                    <li>• Managed teams of 3-15 specialists with scalable operational models</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Operations Optimization & Automation</h4>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Reduced operator workload by <span className="emph">60%</span> through API automation</li>
                    <li>• Built automated response flows for multiple geographic regions</li>
                    <li>• Established comprehensive data collection and analysis systems</li>
                    <li>• Optimized support operations by eliminating manual and routine tasks</li>
                    <li>• Improved team efficiency through process automation and workflow design</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* Technical Skills Showcase */}
          <Section title="Technical Stack">
            <div className="card p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Python', category: 'Programming' },
                  { name: 'PostgreSQL', category: 'Database' },
                  { name: 'n8n', category: 'Automation' },
                  { name: 'Google Sheets', category: 'Analytics' },
                  { name: 'Intercom API', category: 'Integration' },
                  { name: 'AmoCRM', category: 'CRM' },
                  { name: 'Looker Studio', category: 'Dashboards' },
                  { name: 'Data Analysis', category: 'Analytics' }
                ].map((tech, index) => (
                  <div key={index} className="text-center p-4 bg-midnight-800 rounded-lg border border-border-subtle lift">
                    <div className="font-semibold text-text-primary">{tech.name}</div>
                    <div className="text-xs text-text-muted">{tech.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </div>

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
