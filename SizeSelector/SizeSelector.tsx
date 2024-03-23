import './SizeSelectorStyle.css';

interface SizeSelectorInput {
    defaultValue: number;
    increment: number;
    name: string;
    id: string;
    height: number;
    width: number;
    handleHeightChange: (event: any) => void;
    handleWidthChange: (event: any) => void;
}


export const SizeSelector = ({ defaultValue, increment, name, id, height, width, handleHeightChange, handleWidthChange }: SizeSelectorInput) => {

    return (
        <div className="size-selector">
            <div className="item">
                <h3>Ancho (metros)</h3>
                <input type="number" name={name} id={`${id}-ancho`} defaultValue={defaultValue} step={increment} onChange={handleWidthChange} />
            </div>
            <div className="item">
                <h3>Alto (metros)</h3>
                <input type="number" name={name} id={`${id}-alto`} defaultValue={defaultValue} step={increment} onChange={handleHeightChange} />
            </div>
        </div>
    );
}