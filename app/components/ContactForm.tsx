"use client"

import React, { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [grade, setGrade] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const webhookUrl = 'https://discord.com/api/webhooks/1290852194718973982/D72Eadncqk-rHgiBkJ8tfE6Tx3FVXebssT6APOZiGEw03XX5qWRioTt1fdicMsOYG7pf'

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `New contact form submission:
Name: ${name || 'Anonymous'}
Grade: ${grade}
Message: ${message}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setName('')
        setGrade('')
        setMessage('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="grade" className="block text-sm font-medium text-white">Grade</label>
        <input
          type="text"
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      {submitStatus === 'success' && (
        <p className="text-green-400">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-400">There was an error sending your message. Please try again.</p>
      )}
    </form>
  )
}

export default ContactForm