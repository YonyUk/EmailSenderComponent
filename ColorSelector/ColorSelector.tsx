import './ColorSelectorStyle.css';

interface ColorInput {
    Text: string;
    name: string;
    id: string;
    Color: string;
    style?: string;
    onChange: (event: any) => void
}

export const ColorSelector = ({ Text, name, id, Color,style,onChange }: ColorInput) => {

    return (
        <div className={style}>
            {Text}
            <input type="color" name={name} id={id} onChange={onChange} />
        </div>
    );
}