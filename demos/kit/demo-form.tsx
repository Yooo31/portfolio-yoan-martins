"use client"

import { useState } from "react"
import { ImagePlus } from "lucide-react"
import { cn } from "@/lib/utils"

export type DemoField =
  | {
      type: "text" | "email" | "tel" | "date" | "number"
      name: string
      label: string
      placeholder?: string
      required?: boolean
      half?: boolean
    }
  | { type: "textarea"; name: string; label: string; placeholder?: string; required?: boolean }
  | {
      type: "select"
      name: string
      label: string
      options: string[]
      placeholder?: string
      half?: boolean
    }
  | { type: "photos"; name: string; label: string; hint?: string }

type DemoFormProps = {
  fields: DemoField[]
  submitLabel: string
  className?: string
  /** Classes du bouton d'envoi (couleurs du site) */
  buttonClassName?: string
  /** Classes appliquées aux champs (fond, bordure…) */
  fieldClassName?: string
}

// Les couleurs viennent des variables du thème de la démo (--input, --ring, --primary…).
const fieldBase =
  "w-full rounded-[var(--radius)] border border-[var(--input)] bg-transparent px-3 py-2 text-base outline-none transition placeholder:text-[var(--muted-foreground)] focus-visible:border-[var(--ring)] focus-visible:ring-3 focus-visible:ring-[var(--ring)]/30"

/**
 * Formulaire de démonstration : aucun envoi réel.
 * À la soumission, un message indique que rien n'est transmis.
 */
export function DemoForm({
  fields,
  submitLabel,
  className,
  buttonClassName,
  fieldClassName,
}: DemoFormProps) {
  const [files, setFiles] = useState<Record<string, string[]>>({})
  const [sent, setSent] = useState(false)

  return (
    <form
      className={cn("grid gap-5 sm:grid-cols-2", className)}
      onSubmit={e => {
        e.preventDefault()
        e.currentTarget.reset()
        setFiles({})
        setSent(true)
      }}
    >
      {fields.map(field => {
        const id = `f-${field.name}`
        const full =
          field.type === "textarea" || field.type === "photos" || !("half" in field && field.half)
        const picked = files[field.name]

        return (
          <div key={field.name} className={cn("grid gap-2", full && "sm:col-span-2")}>
            <label htmlFor={id} className="text-sm font-medium">
              {field.label}
            </label>

            {field.type === "textarea" && (
              <textarea
                id={id}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                rows={4}
                className={cn(fieldBase, fieldClassName, "h-auto min-h-28")}
              />
            )}

            {field.type === "select" && (
              <select
                id={id}
                name={field.name}
                defaultValue=""
                className={cn(fieldBase, "h-10", fieldClassName)}
              >
                <option value="" disabled>
                  {field.placeholder ?? "Choisir…"}
                </option>
                {field.options.map(o => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            )}

            {field.type === "photos" && (
              <label
                htmlFor={id}
                className={cn(
                  "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-current/25 px-4 py-8 text-center text-sm opacity-90 transition hover:border-current/50",
                  fieldClassName,
                  "h-auto"
                )}
              >
                <ImagePlus className="size-6" />
                <span>
                  {picked?.length
                    ? picked.join(", ")
                    : (field.hint ?? "Ajoutez une ou plusieurs photos")}
                </span>
                <input
                  id={id}
                  name={field.name}
                  type="file"
                  accept="image/*"
                  multiple
                  className="sr-only"
                  onChange={e =>
                    setFiles(f => ({
                      ...f,
                      [field.name]: Array.from(e.target.files ?? []).map(file => file.name),
                    }))
                  }
                />
              </label>
            )}

            {(field.type === "text" ||
              field.type === "email" ||
              field.type === "tel" ||
              field.type === "date" ||
              field.type === "number") && (
              <input
                id={id}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                className={cn(fieldBase, "h-10", fieldClassName)}
              />
            )}
          </div>
        )
      })}

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          className={cn(
            "inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-[var(--radius)] bg-[var(--primary)] px-6 text-base font-medium text-[var(--primary-foreground)] transition hover:opacity-90 sm:w-auto",
            buttonClassName
          )}
        >
          {submitLabel}
        </button>
        <p role="status" className="text-sm opacity-80">
          {sent && "Merci ! Formulaire de démonstration : rien n’a été envoyé."}
        </p>
      </div>
    </form>
  )
}
