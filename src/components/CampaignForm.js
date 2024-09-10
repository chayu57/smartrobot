
import React from 'react';
import './CampaignForm.css';

const CampaignForm = ({ onBack }) => {
    return (
        <div className="create-campaign-form">
            <div className="form-header">
                <h2>Create New Campaign</h2>
                <button onClick={onBack}>Back</button>
            </div>
            <div className="form-group">
                <label htmlFor="campaignName">Campaign Name</label>
                <input type="text" id="campaignName" placeholder="Enter New Campaign Name" />
            </div>
            <div className="form-group">
                <label htmlFor="operatorPhoneNumber">Operator Phone Number</label>
                <input type="text" id="operatorPhoneNumber" placeholder="Enter Phone Number" />
            </div>
            <div className="form-group">
                <label htmlFor="audioFile">Input Audio File</label>
                <input type="file" id="audioFile" />
                <button>Play</button>
            </div>
            <div className="form-group">
                <label htmlFor="inputText">Input Text</label>
                <input type="text" id="inputText" />
                <button>Play</button>
            </div>
            <button className="submit-button">Go Next</button>
        </div>
    );
};

export default CampaignForm;
