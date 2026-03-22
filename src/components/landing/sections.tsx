import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-[#4FC3F7] border-[#4FC3F7]">Оханск Школа</Badge>,
    title: "Подготовка к ОГЭ и ЕГЭ.",
  },
  {
    id: 'subjects',
    title: 'Предметы',
    content: 'Видеоуроки и занятия по всем основным предметам.',
    subjects: [
      { name: 'Математика', icon: '📐' },
      { name: 'Русский язык', icon: '📝' },
      { name: 'Физика', icon: '⚡' },
      { name: 'Химия', icon: '🧪' },
      { name: 'Биология', icon: '🧬' },
      { name: 'История', icon: '📜' },
      { name: 'Обществознание', icon: '🌍' },
      { name: 'Информатика', icon: '💻' },
      { name: 'Английский язык', icon: '🗣️' },
    ]
  },
  {
    id: 'videos',
    title: 'Видеоуроки',
    content: 'Бесплатные уроки по самым важным темам.',
    videos: [
      {
        title: 'Квадратные уравнения',
        subject: 'Математика',
        duration: '18 мин',
        youtubeId: 'pHQIgTFhQS4'
      },
      {
        title: 'Правописание Н и НН',
        subject: 'Русский язык',
        duration: '22 мин',
        youtubeId: 'OBFMEMfCb3k'
      },
      {
        title: 'Законы Ньютона',
        subject: 'Физика',
        duration: '25 мин',
        youtubeId: 'kKKM8Y-u7ds'
      },
    ]
  },
]
