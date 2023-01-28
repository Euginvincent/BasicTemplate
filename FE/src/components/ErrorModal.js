
  import React from 'react';
  import { Button, Modal } from 'react-bootstrap';
  
  const ErrorModal = (props) => {
    const { show, setShow } = props
  
    const { errmessage, setMessage } = props
    const message = typeof errmessage === 'string' ? errmessage : 'Something went wrong!'
  
    const handleClose = () => {
      setShow(false)
    }
    return (
      <div>
        <>
          <Modal show={show} onHide={handleClose} animation={false} className='confirmation-modal'>
            <Modal.Header closeButton>
              <i class="fas fa-exclamation-triangle pulse"></i>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>
  
            <Modal.Body>
              <p>{message}</p>
            </Modal.Body>
  
            <Modal.Footer>
              <Button variant="secondary" className='delete-btn' onClick={handleClose}>Ok</Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    )
  }
  export default ErrorModal;