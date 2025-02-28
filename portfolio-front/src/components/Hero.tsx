import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { Github, NotepadText, Linkedin } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from '@tanstack/react-router'
const Hero = () => {
  return (
    <div className="h-screen">
      <div className="pb-20 pt-36">
        <div>
          <div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="h-[80vh] w-[50vw] top-10 left-full"
              fill="white"
            />
            <Spotlight
              className="left-80 top-28 h-[80vh] w-[50vw]"
              fill="white"
            />
          </div>
        </div>
        <div
          className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
        >
          {/* Radial igradient for the container to give a faded look */}
          <div
            // chnage the bg to bg-black-100, so it matches the bg color and will blend in
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic web portfolio with React.js
            </p>

            <TextGenerateEffect
              words="Detail oriented fullstack web development and GIS analysis"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hello, I'm Arthur, a fullstack web dev and GIS
              analyst based in Brazil.
            </p>
            <Link to="/cv">
              <MagicButton
                title="My curriculum"
                icon={<NotepadText />}
                position="right"
              />
            </Link>
            <div className="flex mt-4">
              <Button
                variant="ghost"
                className="hover:bg-opacity-0 hover:bg-white"
              >
                <a
                  href="https://github.com/peruzzoarthur/"
                  target="_blank"
                  rel="noopener noreferrer"
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
                >
                  <Linkedin />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
