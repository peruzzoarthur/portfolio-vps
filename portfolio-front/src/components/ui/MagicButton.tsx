type MagicButtonProps = {
    title: string
    icon: React.ReactNode
    position: 'right' | 'left'
    handleClick?: () => void
    otherClasses?: string
}

const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
}: MagicButtonProps) => {
    return (
        <button
            className="relative inline-flex h-12 overflow-hidden w-full rounded-lg p-[1px]"
            onClick={handleClick}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C8ACD6_0%,#78A083_50%,#E2CBFF_100%)]" />
            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-purple-600 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
            >
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>
    )
}

export default MagicButton
