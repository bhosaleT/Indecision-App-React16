import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
       <Modal
       isOpen={!!props.selectedOption}
       onRequestClose = {props.handleClosingModal}
       contentLabel = "Seleted Option"
       closeTimeoutMS = {200}
       className = "modal"
       >
        <h3 className = "modal__title">Some text</h3>
        {props.selectedOption && <p className = "modal__body">{props.selectedOption}</p>  }
        <button className = "button" onClick = {props.handleClosingModal}>Okay</button>
       </Modal>
);

export default OptionModal;