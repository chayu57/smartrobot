import React from 'react';
import Modal from 'react-modal';
import './EnterKeyModal.css';
Modal.setAppElement('#root');

const EnterKeyModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Enter Key Modal"
            className="enter-key-modal"
            overlayClassName="enter-key-modal-overlay"
        >
            <div className="enter-key-content">
                <div className="product-id">
                    <p>Your product ID:</p>
                    <p>K000000001</p>
                </div>
                <div className="key-input-section">
                    <label>New Key</label>
                    <input type="text" placeholder="Please enter new key here" />
                </div>
                <div className="button-group">
                    <button onClick={onRequestClose} className="back-button">Back to Home</button>
                    <button className="validate-button">Validate Key</button>
                </div>
            </div>
        </Modal>
    );
};

export default EnterKeyModal;
