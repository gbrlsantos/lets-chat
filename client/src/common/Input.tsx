interface IProps {
    type: string;
    placeholder: string;
    className: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(InputProps: IProps) {
    return (
        <input value={InputProps.value} type={InputProps.type} placeholder={InputProps.placeholder} className={`h-8 p-2 block w-full rounded-lg ${InputProps.className}`} onChange={InputProps.onChange} />
    )
}