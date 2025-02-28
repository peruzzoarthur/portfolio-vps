import { Github, Linkedin } from 'lucide-react'

export const BlogFooter = () => {
    return (
        <footer
            className="w-full flex items-center justify-center pb-10 space-x-2 mt-auto"
            id="footer"
        >
            <p className="md:text-base text-small md:font-normal font-light mr-2">
                Copyright © 2024 Arthur Peruzzo
            </p>
            <a
                href="https://github.com/peruzzoarthur/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Github className="hover:text-purple-100 transition-transform duration-200 ease-in-out hover:rotate-12" />
            </a>
            <a
                href="https://www.linkedin.com/in/arthur-peruzzo"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Linkedin className="hover:text-purple-100 transition-transform duration-200 ease-in-out hover:rotate-12" />
            </a>
        </footer>
    )
}
