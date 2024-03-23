import './DataFormStyle.css';

interface DataFormInput {
    Name: string;
    Address: string;
    Phone: string;
    Email: string;
    handleNameChange: (event: any) => void;
    handleAddressChange: (event: any) => void;
    handlePhoneChange: (event: any) => void;
    handleEmailChange: (event: any) => void;
}

export const DataForm = ({ Name, Address, Phone, Email, handleNameChange, handleAddressChange, handlePhoneChange, handleEmailChange }: DataFormInput) => {

    return (
        <div className="data-form-input">
            <div className="personal-data">
                <div className="data">
                    {"Nombre"}<input type="text" onChange={handleNameChange} />
                </div>
                <div className="data">
                    {"Direccion"}<input type="text" onChange={handleAddressChange} />
                </div>
            </div>
            <div className="contact-data">
                <div className="data">
                    <h3>Contacto</h3>
                    <input type="tel" onChange={handlePhoneChange} />
                </div>
                <div className="data">
                    <h3>Correo</h3>
                    <input type="email" onChange={handleEmailChange} />
                </div>
            </div>
        </div>
    );
}