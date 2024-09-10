import React,{ useState } from 'react';
import Modal from 'react-modal';
import './SettingsModel.css';
import CampaignForm from './CampaignForm';
import UpdateCampaignForm from './UpdateCampaignForm';
import CopyCampaignForm from './CopyCampaignForm';
import AddContactsForm from './AddContactsForm';
import createCampaignIcon from '../assets/create-campaign-icon.jpeg';
import updateCampaignIcon from '../assets/update-campaign-icon.jpeg';
import deleteCampaignIcon from '../assets/delete-campaign-icon.png';
import addContactsIcon from '../assets/add-contacts-icon.jpeg';
import removeContactsIcon from '../assets/remove-contacts-icon.jpeg';
import copyCampaignIcon from '../assets/copy-campaign-icon.png';
import initiateCampaignIcon from '../assets/initiate-campaign-icon.jpeg';
import downloadExcelIcon from '../assets/download-excel-icon.jpeg';
import backToHomeIcon from '../assets/back-to-home-icon.jpeg';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

Modal.setAppElement('#root');

const SettingsModal = ({ isOpen, onRequestClose }) => {
    console.log('Is modal open?', isOpen);

    const [isCreatingCampaign, setIsCreatingCampaign] = useState(false);
    const [isUpdatingCampaign, setIsUpdatingCampaign] = useState(false);
    const [isCopyingCampaign, setIsCopyingCampaign] = useState(false);
    const [isAddingContacts, setIsAddingContacts] = useState(false);
    const [contacts, setContacts] = useState([]);


    const handleCreateCampaignClick = () => {
        setIsCreatingCampaign(true);
        setIsUpdatingCampaign(false);
        setIsCopyingCampaign(false);
        setIsAddingContacts(false);
    };
    const handleUpdateCampaignClick = () => {
        setIsCreatingCampaign(false);
        setIsUpdatingCampaign(true);
        setIsCopyingCampaign(false);
        setIsAddingContacts(false);
    };
    const handleCopyCampaignClick = () => {
        setIsCreatingCampaign(false);
        setIsUpdatingCampaign(false);
        setIsCopyingCampaign(true);
        setIsAddingContacts(false);
    };
    const handleAddContactsClick = () => {
        setIsCreatingCampaign(false);
        setIsUpdatingCampaign(false);
        setIsCopyingCampaign(false);
        setIsAddingContacts(true);
    };

    const handleBackClick = () => {
        setIsCreatingCampaign(false);
        setIsUpdatingCampaign(false);
        setIsCopyingCampaign(false);
        setIsAddingContacts(false);
    };

    

    const handleDeleteCampaignClick = () => {
        console.log('Delete Campaign icon clicked');
    };

    const handleRemoveContactClick = () => {
        console.log('Remove Contact icon clicked');
    };

    const handleInitiateCampaignClick = () => {
        console.log('Initiate Campaign icon clicked');
    };

    const handleDownloadExcelClick = () => {
        console.log('Download');
        const data = [
            { SNo: 1, Number: '9581666279', Status: 'Interested', Name: 'Ramakrishna' },
        ];
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(blob, 'data.xlsx');
    };

    const handleAddContact = (name, number) => {
        setContacts([...contacts, { name, number }]);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Settings Modal"
            className="settings-modal"
            overlayClassName="settings-modal-overlay"
        >
            
            {isCreatingCampaign ? (
                <CampaignForm onBack={handleBackClick} />
            ) : isUpdatingCampaign ? (
                <UpdateCampaignForm onBack={handleBackClick} />
            ): isCopyingCampaign ? (
                <CopyCampaignForm onBack={handleBackClick} onCopy={(existing, newCampaign) => {
                    console.log(`Copying campaign: ${existing} to ${newCampaign}`);
                    handleBackClick();
                }} />
            ) : isAddingContacts ? (
                <AddContactsForm contacts={contacts} onAddContact={handleAddContact} onBack={handleBackClick} />
            ) : (
                <>
                <div className="settings-header">
                <label htmlFor="campaignSelect">Select Campaign*</label>
                <input type="text" id="campaignSelect" name="campaignSelect" placeholder="Real01" />
            </div>
                <div className="settings-content">
                    <div className="setting-item">
                        <img src={createCampaignIcon} alt="Create Campaign" onClick={handleCreateCampaignClick} />
                        <p>Create Campaign</p>
                    </div>
                    <div className="setting-item">
                        <img src={updateCampaignIcon} alt="Update Campaign" onClick={handleUpdateCampaignClick} />
                        <p>Update Campaign</p>
                    </div>
                    <div className="setting-item">
                        <img src={deleteCampaignIcon} alt="Delete Campaign" onClick={handleDeleteCampaignClick} />
                        <p>Delete Campaign</p>
                    </div>
                    <div className="setting-item">
                        <img src={addContactsIcon} alt="Add Contacts" onClick={handleAddContactsClick} />
                        <p>Add Contacts</p>
                    </div>
                    <div className="setting-item">
                        <img src={removeContactsIcon} alt="Remove Contacts" onClick={handleRemoveContactClick} />
                        <p>Remove Contacts</p>
                    </div>
                    <div className="setting-item">
                        <img src={copyCampaignIcon} alt="Copy Campaign" onClick={handleCopyCampaignClick} />
                        <p>Copy Campaign</p>
                    </div>
                    <div className="setting-item">
                        <img src={initiateCampaignIcon} alt="Initiate Campaign" onClick={handleInitiateCampaignClick} />
                        <p>Initiate Campaign</p>
                    </div>
                    <div className="setting-item">
                        <img src={downloadExcelIcon} alt="Download to Excel" onClick={handleDownloadExcelClick} />
                        <p>Download to Excel</p>
                    </div>
                    <div className="setting-item">
                        <button onClick={onRequestClose} className="close-button"><img src={backToHomeIcon} alt="Back to Home" />
                            <p>Back to Home</p></button>
                    </div>
                </div></>
            )}
            {!isCreatingCampaign && !isUpdatingCampaign && !isCopyingCampaign && !isAddingContacts &&  (
                <button onClick={onRequestClose} className="close-button">Close</button>
            )}
        </Modal>
    );
};

export default SettingsModal;
