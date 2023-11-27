interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao({ children, className, cor = 'gray', ...props }: BotaoProps) {
    return (
        <button onClick={props.onClick}
            className={`bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md
            ${className}`}>
            {children}
        </button>
    )
}