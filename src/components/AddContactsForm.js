import React, { useState } from 'react';
import './AddContactsForm.css';

const AddContactsForm = ({ onBack }) => {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleAddContact = () => {
        if (name && phoneNumber) {
            setContacts([...contacts, { name, phoneNumber }]);
            setName('');
            setPhoneNumber('');
        }
    };

    return (
        <div className="add-contacts-form">
            <div className="form-group">
                <label htmlFor="campaignSelect">Select Campaign*</label>
                <input type="text" id="campaignSelect" name="campaignSelect" placeholder="Real01" />
            </div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Please enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone number</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Please enter Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <button onClick={handleAddContact}>Add</button>
            <div className="contacts-table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => (
                            <tr key={index}>
                                <td>{contact.name}</td>
                                <td>{contact.phoneNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="form-actions">
                <button onClick={onBack}>Go Back</button>
                <button>Save</button>
            </div>
        </div>
    );
};

export default AddContactsForm;
