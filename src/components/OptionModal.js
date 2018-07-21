import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
       <Modal
       isOpen={!!props.selectedOption}
       onRequestClose = {props.handleClosingModal}
       contentLabel = "Seleted Option"
       >
        <h3>Some text</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>  }
        <button onClick = {props.handleClosingModal}>Okay</button>
       </Modal>
);

export default OptionModal;