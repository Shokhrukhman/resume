'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual form handling)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="card max-w-2xl mx-auto p-6">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Message Sent Successfully!
          </h3>
            <p className="text-text-secondary">
              Thank you for your message. I&apos;ll get back to you as soon as possible.
            </p>
        </div>
      </div>
    )
  }

  return (
    <div className="card max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-text-primary flex items-center gap-2 mb-2">
          <Mail className="h-5 w-5 text-accent" />
          Get In Touch
        </h3>
        <p className="text-text-secondary">
          Send me a message and I&apos;ll respond as soon as possible.
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="bg-midnight-800 border-border-subtle text-text-primary placeholder:text-text-muted"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="bg-midnight-800 border-border-subtle text-text-primary placeholder:text-text-muted"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
              Subject *
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
              className="bg-midnight-800 border-border-subtle text-text-primary placeholder:text-text-muted"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project or question..."
              rows={6}
              className="bg-midnight-800 border-border-subtle text-text-primary placeholder:text-text-muted"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full btn-primary" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
