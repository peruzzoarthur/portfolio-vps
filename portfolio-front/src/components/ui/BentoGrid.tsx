import { cn } from '@/lib/utils'
import { BackgroundGradientAnimation } from './GradientBg'
import { GridGlobe } from './GridGlobe'
import Lottie from 'react-lottie'
import { useState } from 'react'
import animationData from '@/data/confetti.json'
import MagicButton from '../ui/MagicButton'
import { Copy } from 'lucide-react'

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string
    children?: React.ReactNode
}) => {
    return (
        <div
            className={cn(
                'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
                className
            )}
        >
            {children}
        </div>
    )
}

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string
    id: number
    title?: string | React.ReactNode
    description?: string | React.ReactNode
    img?: string
    imgClassName?: string
    titleClassName?: string
    spareImg?: string
}) => {
    const leftLists = ['ReactJS', 'NestJS', 'Typescript']
    const rightLists = ['PostgreSQL', 'Python', 'QGIS']

    const [copied, setCopied] = useState(false)

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    const handleCopy = () => {
        const text = 'peruzzoarthur@gmail.com'
        navigator.clipboard.writeText(text)
        setCopied(true)
    }

    return (
        <div
            className={cn(
                // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
                'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
                className
            )}
            style={{
                background: 'rgb(23,21,35)',
                backgroundColor:
                    'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(83,9,121,1) 45%, rgba(132,94,161,1) 100%)',
            }}
        >
            {/* add img divs */}
            <div className={`${id === 6 && 'flex justify-center'} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(
                                imgClassName,
                                'object-cover object-center '
                            )}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${
                        id === 5 && 'w-full opacity-80'
                    } `}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            //   width={220}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation></BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
                    )}
                >
                    <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                        {description}
                    </div>
                    <div
                        className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
                    >
                        {title}
                    </div>

                    {/* for the github 3d globe */}
                    {id === 2 && <GridGlobe />}

                    {/* Tech stack list div */}
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            {/* tech stack lists */}
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                {leftLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#433D8B]"
                                    >
                                        {item}
                                    </span>
                                ))}
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#433D8B]"></span>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#433D8B]"></span>
                                {rightLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#433D8B]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0 `}>
                                <Lottie options={defaultOptions} />
                            </div>
                            <MagicButton
                                title={copied ? 'Email copied' : 'Copy email'}
                                icon={<Copy />}
                                position="left"
                                otherClasses="!bg-[#171523]"
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
