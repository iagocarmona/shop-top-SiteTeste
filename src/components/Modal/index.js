import React from 'react'
import ButtonIcon from '../../components/Buttons/ButtonIcon'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import './style.css'

const ModalEl = (props) => {
  return (
    <div>
      <ButtonIcon
        icon={props.icon}
        name={props.buttonLabel}
        onClick={props.toggle}
      />
      <Modal
        isOpen={props.open}
        toggle={props.toggle}
        className={props.className}
        size="lg"
        scrollable="true"
      >
        <ModalHeader toggle={props.toggle}>{props.modalHeader}</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
      </Modal>
    </div>
  )
}

export default ModalEl
