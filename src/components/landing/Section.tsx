import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, subjects, videos }: SectionProps) {
  const [playingId, setPlayingId] = useState<string | null>(null)

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {subjects && (
        <motion.div
          className="flex flex-wrap gap-3 mt-10 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subjects.map((subject, i) => (
            <motion.div
              key={subject.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a3a5c] bg-[#0a1f35] text-white text-sm md:text-base hover:border-[#4FC3F7] hover:text-[#4FC3F7] transition-colors cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
            >
              <span>{subject.icon}</span>
              <span>{subject.name}</span>
            </motion.div>
          ))}
        </motion.div>
      )}
      {videos && (
        <motion.div
          className="flex gap-4 mt-10 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {videos.map((video, i) => (
            <motion.div
              key={video.youtubeId}
              className="rounded-xl overflow-hidden border border-[#1a3a5c] bg-[#0a1f35] w-64"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              {playingId === video.youtubeId ? (
                <iframe
                  width="256"
                  height="144"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full"
                />
              ) : (
                <div
                  className="relative w-full h-36 cursor-pointer group"
                  onClick={() => setPlayingId(video.youtubeId)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#4FC3F7] flex items-center justify-center">
                      <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              <div className="p-3">
                <p className="text-white text-sm font-medium leading-tight">{video.title}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[#4FC3F7] text-xs">{video.subject}</span>
                  <span className="text-neutral-500 text-xs">{video.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#4FC3F7] bg-transparent border-[#4FC3F7] hover:bg-[#4FC3F7] hover:text-black transition-colors"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
