import React, { useState } from 'react';
import './CopyCampaignForm.css';

const CopyCampaignForm = ({ onBack, onCopy }) => {
    const [existingCampaignName, setExistingCampaignName] = useState('');
    const [newCampaignName, setNewCampaignName] = useState('');

    const handleCopy = () => {
        
        onCopy(existingCampaignName, newCampaignName);
    };

    return (
        <div className="copy-campaign-form">
            <div className="form-header">
                <h2>Copy Campaign</h2>
            </div>
            <div className="form-group">
                <label htmlFor="existingCampaign">Select Existing Campaign Name</label>
                <input
                    type="text"
                    id="existingCampaign"
                    placeholder="real01"
                    value={existingCampaignName}
                    onChange={(e) => setExistingCampaignName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="newCampaign">Enter New Campaign Name</label>
                <input
                    type="text"
                    id="newCampaign"
                    placeholder="Enter new campaign name"
                    value={newCampaignName}
                    onChange={(e) => setNewCampaignName(e.target.value)}
                />
            </div>
            <div className="form-buttons">
                <button className="back" onClick={onBack}>Back</button>
                <button className="copy" onClick={handleCopy}>Copy</button>
            </div>
        </div>
    );
};

export default CopyCampaignForm;
