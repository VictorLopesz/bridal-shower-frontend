import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';




const ModalConfirm = ({showModal, onHide}:any) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return(
<>

          <Button className="bg-[#917235] hover:bg-[#705318] p-2 rounded-md text-white mr-2" onClick={handleShow}>
            Salvar
          </Button>

<Modal showModal={showModal} onHide={onHide}>
    <Modal.Title>
        Confirmado!
    </Modal.Title>
    <Modal.Body>
        <div>
        <span>
        Seu presente foi salvo.<br/>
        Não esqueça de levá-lo no dia da festa, em.
        <br/>
        Data: ...
        <br/>
        Hora: ...
        <br/>
        Local: ...

        <br/>
        Contamos com sua presença!
        </span>
        </div>
    </Modal.Body>
    <Modal.Footer>
        <button className="bg-[#727E65] hover:bg-[#34392d] p-2 rounded-md text-white" onClick={handleClose}>
                Fechar
        </button>
    </Modal.Footer>
</Modal>
</>
    );
}

export default ModalConfirm;