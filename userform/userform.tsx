import React, { useState } from 'react';
import { RadioButtonList, RadioButtonPositionStyle } from '../RadioButtonList/RadioButtonList';
import { ColorSelector } from '../ColorSelector/ColorSelector';
import { SizeSelector } from '../SizeSelector/SizeSelector';
import './UserFormStyles.css';
import { DataForm } from '../DataForm/DataForm';
// import emailjs from 'email-com'; se necesita esta libreria para enviar emails

interface UserRequestFormData {
    Style: string;
    Mode: string;
    Position: string;
    Color: string;
    Height: number;
    Width: number;
    User: UserData;
}

interface UserData {
    Name: string;
    Address: string;
    Phone: string;
    Email: string;
}



export const UserForm = () => {

    const selection_values = ['screen', 'zebra', 'blackout'];
    const modes = ['Auto', 'Manual']
    const positions = ['Interior', 'Exterior']

    const [style, setStyle] = useState('');
    const [mode, setMode] = useState('');
    const [position, setPosition] = useState('');
    const [color, setColor] = useState('');
    const [height, setHeight] = useState(1);
    const [width, setWidth] = useState(1);
    const [Name, setName] = useState('');
    const [Address, setAddress] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [data,setData] = useState({});

    const sendEmail = (event: any) => {
        event.preventDefault();

        if (style.length === 0 || mode.length === 0 || position.length === 0)
            alert('Rellene todos los campos');
        else if (Name.length === 0 || Address.length === 0 || Phone.length === 0 || Email.length === 0)
            alert('Rellene todos los campos');
        else
            console.log(data);
        // codigo para enviar el email
    }

    return (
        <form className="user-form" onSubmit={sendEmail}>

            <RadioButtonList
                selectionName="Style"
                selectionValues={selection_values}
                Value={style}
                className="list-one-selection"
                onClick={(event) => setStyle(event.target.id.split('-')[0])}
            />

            <div className="selectors">

                <div className="box-selection">
                    <RadioButtonList
                        selectionName="Mode"
                        selectionValues={modes}
                        Value={mode}
                        className="mode-selector"
                        style={RadioButtonPositionStyle.TextRight}
                        onClick={(event) => setMode(event.target.id.split('-')[0])}
                    />
                </div>

                <div className="box-selection">
                    <RadioButtonList
                        selectionName="Position"
                        selectionValues={positions}
                        Value={position}
                        className="position-selector"
                        style={RadioButtonPositionStyle.TextRight}
                        onClick={(event) => setPosition(event.target.id.split('-')[0])}
                    />
                </div>
            </div>

            <ColorSelector
                Text="Color"
                name="Color"
                id="color-1"
                Color={color}
                eslint-disable-next-line
                style="color-selector-form"
                onChange={(event) => setColor(event.target.value)}
            />

            <SizeSelector
                defaultValue={1.0}
                increment={0.01}
                name="Dimension"
                id="window-dimension"
                height={height}
                width={width}
                handleHeightChange={(event) => setHeight(event.target.value)}
                handleWidthChange={(event) => setWidth(event.target.value)}
            />

            <center><h1>Contacto</h1></center>
            <DataForm
                Name={Name}
                Address={Address}
                Phone={Phone}
                Email={Email}
                handleNameChange={(event) => setName(event.target.value)}
                handleAddressChange={(event) => setAddress(event.target.value)}
                handlePhoneChange={(event) => setPhone(event.target.value)}
                handleEmailChange={(event) => setEmail(event.target.value)}
            />

            <center><input type="submit" value="Enviar" className="submit-user-data"
                onClick={() => {
                    const user: UserData = {
                        Name,
                        Address,
                        Phone,
                        Email
                    }
                    const data: UserRequestFormData = {
                        Style: style,
                        Mode: mode,
                        Position: position,
                        Color: color,
                        Height: height,
                        Width: width,
                        User: user
                    }
                    setData(data);
                }}
            /></center>

        </form>
    );
}