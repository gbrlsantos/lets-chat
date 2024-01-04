interface IButton {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export default function Button(ButtonProps: IButton) {
    return (
        <button onClick={ButtonProps.onClick} className={`${ButtonProps.className} `}>
            {ButtonProps.children}
        </button>
    )
}