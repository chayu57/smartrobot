import React , { useRef , useState}from 'react';
import './MainContent.css';
import Modal from 'react-modal';
import bhavishyaLogo from '../assets/bhavishya-robotics.png';
import teleRobotLogo from '../assets/tele-robot.png';
import aiAudioLogo from '../assets/ai-audio-logo.png';
import enterKeyLogo from '../assets/enter-key-logo.jpeg';
import backgroundImage from '../assets/background-robo-image.webp';
import signalBarLogo from '../assets/signal-bar-logo.jpeg';
import uploadIcon from '../assets/upload-icon.png';
import refreshIcon from '../assets/refresh-icon.png';
import callGreenIcon from '../assets/call-green-icon.png';
import callRedIcon from '../assets/call-red-icon.jpg';
import settingsIcon from '../assets/settings-icon.png';
import powerIcon from '../assets/power-icon.png';
import SettingsModal from './SettingsModal';
import EnterKeyModal from './EnterKeyModal';

Modal.setAppElement('#root');

const MainContent = () => {

    const fileInputRef = useRef(null);
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    const [isEnterKeyModalOpen, setIsEnterKeyModalOpen] = useState(false);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Selected file:', file.name);
           
        }
    };

    const handleRefreshClick = () => {
        window.location.reload();
    };
    const handlePowerClick = () => {
        window.close();
    };
    const openSettingsModal = () => {
        console.log("Opening settings modal...");
        setIsSettingsModalOpen(true);
    };

    const closeSettingsModal = () => {
        setIsSettingsModalOpen(false);
    };
    
    const openEnterKeyModal = () => {
        setIsEnterKeyModalOpen(true);
    };

    const closeEnterKeyModal = () => {
        setIsEnterKeyModalOpen(false);
    };
    
    const emptyRows = Array.from({ length: 10 }, (_, index) => (
        <tr key={index}>
            <td>{index + 2}</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    ));

    return (
        <div className="main-content">
            <div className="sidebar">
                <img src={uploadIcon} alt="Upload" className="icon" onClick={handleUploadClick} />
                <img src={refreshIcon} alt="Refresh" className="icon" onClick={handleRefreshClick}  />
                <img src={callGreenIcon} alt="Call Green" className="icon" />
                <img src={callRedIcon} alt="Call Red" className="icon" />
                <img src={settingsIcon} alt="Settings" className="icon" onClick={openSettingsModal} />
                <img src={powerIcon} alt="Power" className="icon"  onClick={handlePowerClick}/>
            </div>
            <div className="content-wrapper" >
           
                <div className="table-container" style={{ marginTop:'5rem'}}>
                <div className="logos" >
                        <div style={{ position:'absolute',left:'6rem', bottom:'46.5rem' }}><img src={bhavishyaLogo} alt="Bhavishya Robotics" className="logo" /></div>
                        <div style={{ position:'absolute',left:'20rem', bottom:'46rem' }}><img src={teleRobotLogo} alt="Tele Robot" className="logo" /></div>
                        
                    </div>
                    <table style={{marginTop:'2rem'}}>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Number</th>
                                <th>Status</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>9581666279</td>
                                <td>Interested</td>
                                <td>Ramakrishna</td>
                            </tr>
                            {emptyRows}
                        </tbody>
                    </table>
                    <div className="processing-completed">100% processing completed</div>
                </div>
                <div className="status-section" style={{ marginTop:'5rem'}}>
                    <div className="logos" style={{ position:'absolute',left:'65rem', bottom:'47rem' }}>
                        
                        <img src={aiAudioLogo} alt="AI Audio" className="logo" />
                    </div>
                   
                    <div className="status-item">
                        <label>Real01</label>
                        <input type="text" value="Real01" readOnly />
                    </div>
                    <div className="status-item">
                        <label>Total Processed</label>
                        <input type="text" value="1" readOnly />
                    </div>
                    <div className="status-item">
                        <label>Total Remaining</label>
                        <input type="text" value="0" readOnly />
                    </div>
                    <div className="status-item">
                        <label>Interested</label>
                        <input type="text" value="1" readOnly />
                    </div>
                    <div className="status-item">
                        <label>Not Interested</label>
                        <input type="text" value="0" readOnly />
                    </div>
                    <div className="status-item">
                        <label>Not Answered</label>
                        <input type="text" value="0" readOnly />
                    </div>
                    <div className="status-item">
                        <label>Not Reachable</label>
                        <input type="text" value="0" readOnly />
                    </div>
                    <div className="status-item">
                        <label>Other Errors</label>
                        <input type="text" value="0" readOnly />
                    </div>
                    <div className="status-item">
                        <label>Total Records</label>
                        <input type="text" value="1" readOnly />
                    </div>
                    <div className="subscription-message">
                        <p>Your subscription has expired. Your subscription expired 389 days ago.</p>
                    </div>
                </div>
                <div className="background-section" style={{ backgroundImage: `url(${backgroundImage})`,marginTop:'5rem',backgroundColor:'#2e2e2e' }}>
                    <div className='signal' style={{ position:'absolute',left:'87rem', bottom:'47rem' }}><img src={signalBarLogo} alt="Signal Bar" className="signal-bar-logo" /></div>
                    <img src={enterKeyLogo} alt="Enter Key" className="footer-logo" onClick={openEnterKeyModal} />
        
                </div>
            </div>
           
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <SettingsModal 
            isOpen={isSettingsModalOpen} 
            onRequestClose={closeSettingsModal} />

            <EnterKeyModal
                isOpen={isEnterKeyModalOpen}
                onRequestClose={closeEnterKeyModal}
            />
            <div className="footer">
                @2023, BhavisyaRobotics. All rights reserved.
            </div>
        </div>
    );
}

export default MainContent;
