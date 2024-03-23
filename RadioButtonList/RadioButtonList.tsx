import './RadioButtonListStyles.css';

export enum RadioButtonPositionStyle {
    TextLeft = 0,
    TextRight = 1,
    TextOver = 2,
    TextUnder = 3
}

interface RadioButtonListInput {
    selectionName: string;
    selectionValues: string[];
    className?: string;
    Value: string;
    style?: RadioButtonPositionStyle;
    onClick: (event: any) => void;
}

interface RadioButtonInput {
    name: string;
    value: string;
    id: string;
    onClick: (event: any) => void;
    style?: RadioButtonPositionStyle;
}

export const RadioButtonList = ({ selectionName, selectionValues, className, Value, style, onClick }: RadioButtonListInput) => {

    return (
        <div className={className}>
            {
                selectionValues.map((value, index) => {
                    return (
                        <RadioButton
                            name={selectionName}
                            value={value}
                            id={`${value}-${index}`}
                            onClick={onClick}
                            style={style}
                        />
                    );
                })
            }
        </div>
    );
}

const TextOverRadioButton = ({ name, value, id, onClick }: RadioButtonInput) => {
    return (
        <div className="item">
            <h3>{value}</h3>
            <input type="radio" name={name} id={id} onClick={onClick}/>
        </div>
    );
}

const TextUnderRadioButton = ({ name, value, id, onClick }: RadioButtonInput) => {
    return (
        <div className="item">
            <input type="radio" name={name} id={id} onClick={onClick} />
            <h3>{value}</h3>
        </div>
    );
}

const TextLeftRadioButton = ({ name, value, id, onClick }: RadioButtonInput) => {

    return (
        <div className="item">
            {value}<input type="radio" name={name} id={id} onClick={onClick} />
        </div>
    );
}

const TextRightRadioButton = ({ name, value, id, onClick }: RadioButtonInput) => {
    
    return (
        <div className="item">
            <input type="radio" name={name} id={id} onClick={onClick} />{value}
        </div>
    );
}

const RadioButton = ({ name, value, id, onClick, style }: RadioButtonInput) => {

    switch (style) {
        case RadioButtonPositionStyle.TextOver:
            return (
                <TextOverRadioButton
                    name={name}
                    value={value}
                    id={id}
                    onClick={onClick}
                />
            );

        case RadioButtonPositionStyle.TextUnder:
            return (
                <TextUnderRadioButton
                    name={name}
                    value={value}
                    id={id}
                    onClick={onClick}
                />
            );

        case RadioButtonPositionStyle.TextLeft:
            return (
                <TextLeftRadioButton 
                name={name}
                value={value}
                id={id}
                onClick={onClick}
                />
            );

        case RadioButtonPositionStyle.TextRight:
            return (
                <TextRightRadioButton 
                name={name}
                value={value}
                id={id}
                onClick={onClick}
                />
            );

        default:
            return (
                <TextOverRadioButton
                    name={name}
                    value={value}
                    id={id}
                    onClick={onClick}
                />
            );
    }


}