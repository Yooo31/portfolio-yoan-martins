"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

type FormStatus = "idle" | "loading" | "success" | "error"

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">
          Parlons projet
        </h2>
        <p className="text-zinc-500">Prêt à relever de nouveaux défis techniques. Contactez-moi.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              Nom
            </label>
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              aria-required="true"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              Email
            </label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              aria-required="true"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            Message
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez votre besoin..."
            required
            aria-required="true"
          />
        </div>

        <Button
          type="submit"
          className="w-full shadow-lg shadow-zinc-900/10 dark:shadow-white/5"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            "Envoi en cours..."
          ) : status === "success" ? (
            <>
              <CheckCircle className="w-4 h-4" />
              Message envoyé !
            </>
          ) : status === "error" ? (
            <>
              <AlertCircle className="w-4 h-4" />
              Erreur, réessayez
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Envoyer le message
            </>
          )}
        </Button>
      </form>

      {status === "success" && (
        <div
          className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300 text-sm text-center"
          role="alert"
        >
          Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
        </div>
      )}

      {status === "error" && (
        <div
          className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300 text-sm text-center"
          role="alert"
        >
          Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.
        </div>
      )}
    </section>
  )
}
