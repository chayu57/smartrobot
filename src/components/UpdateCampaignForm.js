
import React from 'react';
import './UpdateCampaignForm.css';

const UpdateCampaignForm = ({ onBack }) => {
    return (
        <div className="update-campaign-form">
            <div className="form-header">
                <h2>Update Campaign</h2>
                <button onClick={onBack}>Back</button>
            </div>
            
            <div className="form-group">
                <label htmlFor="campaignName">Campaign Name</label>
                <input type="text" id="campaignName" placeholder="Campaign Name" />
            </div>
            <div className="form-group">
                <label htmlFor="operatorPhoneNumber">Operator Phone Number</label>
                <input type="text" id="operatorPhoneNumber" placeholder="Operator Phone Number" />
            </div>
            <div className="form-group">
                <label htmlFor="teluguAudioFile">Telugu Audio File</label>
                <input type="file" id="teluguAudioFile" />
                <button>Play</button>
            </div>
            <div className="form-group">
                <label htmlFor="hindiAudioFile">Hindi Audio File</label>
                <input type="file" id="hindiAudioFile" />
                <button>Play</button>
            </div>
            <div className="form-group">
                <label htmlFor="englishAudioFile">English Audio File</label>
                <input type="file" id="englishAudioFile" />
                <button>Play</button>
            </div>
            <div className="form-group">
                <label htmlFor="teluguText">Telugu Text</label>
                <input type="text" id="teluguText" />
                <button>Play</button>
            </div>
            <div className="form-group">
                <label htmlFor="hindiText">Hindi Text</label>
                <input type="text" id="hindiText" />
                <button>Play</button>
            </div>
            <div className="form-group">
                <label htmlFor="englishText">English Text</label>
                <input type="text" id="englishText" />
                <button>Play</button>
            </div>
            <button className="submit-button">Go Next</button>
        </div>
    );
};

export default UpdateCampaignForm;
