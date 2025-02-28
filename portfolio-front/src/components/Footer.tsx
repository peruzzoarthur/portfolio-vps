import { Button } from './ui/button'
import MagicButton from './ui/MagicButton'
import { Github, Linkedin, Speech } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="relative w-full pt-20 pb-10" id="footer">
            <div className="relative z-10">
                <div className="absolute left-0 bottom-0 w-full min-h-96">
                    <img
                        src="/footer-grid.svg"
                        alt="grid"
                        className="w-full h-full opacity-50"
                    />
                </div>
                <div className="flex flex-col items-center mt-16">
                    <h1 className="heading lg:max-w-[45vw] z-20">
                        Ready to bring{' '}
                        <span className="text-purple-100">your </span>
                        project to life?
                    </h1>
                    <p className="text-white-200 md:mt-10 my-5 text-center">
                        Reach me out today and let&apos;s discuss how I can help
                        you achieve your goals.
                    </p>
                    <a href="mailto:peruzzoarthur@gmail.com">
                        <MagicButton
                            title="Let's get in touch"
                            position="right"
                            icon={<Speech />}
                        />
                    </a>
                </div>
                <div className="flex mt-16 flex-col justify-center items-center">
                    <p className="md:text-base text-small md:font-normal font-light">
                        Copyright © 2024 Arthur Peruzzo
                    </p>
                    <div className="flex">
                        <Button
                            variant="ghost"
                            className="hover:bg-opacity-0 hover:bg-white"
                        >
                            <a
                                href="https://github.com/peruzzoarthur/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-2 rounded z-20"
                            >
                                <Github />
                            </a>
                        </Button>
                        <Button
                            variant="ghost"
                            className="hover:bg-opacity-0 hover:bg-white"
                        >
                            <a
                                href="https://www.linkedin.com/in/arthur-peruzzo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-2 rounded ml-2 z-20"
                            >
                                <Linkedin />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
