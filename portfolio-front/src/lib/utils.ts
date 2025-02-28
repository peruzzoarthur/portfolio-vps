import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useLanguage } from '@/components/language-provider'
import { translations } from './translations'
import { format, toZonedTime } from 'date-fns-tz'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function useTranslation(key: keyof typeof translations) {
    const { language } = useLanguage()

    return translations[key][language] || translations[key]['portuguese'] // Fallback to Portuguese
}

export const enhanceMarkdownWithImages = (
    postId: string,
    content: string,
    images: { filename: string }[]
) => {
    return content.replace(
        /!\[(.*?)\]\(images\/(.*?)\)/g,
        (match, alt, filename) => {
            const image = images.find((img) => img.filename === filename)
            if (image) {
                return `<img 
        src="${import.meta.env.VITE_SERVER_URL}/images/${postId}/${image.filename}"
        alt="${alt || `${filename}`}" 
        class="mx-auto"
      />`
            }

            return match
        }
    )
}

export const formatUpdatedAt = (updatedAt: string): string => {
    // Get the user's timezone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

    // Convert the date to the user's timezone
    const zonedDate = toZonedTime(updatedAt, userTimeZone)

    // Format the date to the desired string
    const formattedDate = format(zonedDate, "MMMM dd, yyyy '|' hh:mm a", {
        timeZone: userTimeZone,
    })

    return formattedDate
}
