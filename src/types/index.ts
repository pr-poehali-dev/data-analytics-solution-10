import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  subjects?: { name: string; icon: string }[]
  videos?: { title: string; subject: string; duration: string; youtubeId: string }[]
}

export interface SectionProps extends Section {
  isActive: boolean
}