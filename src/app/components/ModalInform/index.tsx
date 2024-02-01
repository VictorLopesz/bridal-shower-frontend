import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMobileRetro } from '@fortawesome/free-solid-svg-icons';


import 'bootstrap/dist/css/bootstrap.min.css';


const ModalInform = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>

      <button onClick={handleShow} className="bg-[#917235] hover:bg-[#48391b] text-white font-bold py-1 px-2 rounded m-1">
        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
      </button>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-custom" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex justify-content-center align-items-center text-[#727E65] uppercase text-lg font-semibold">
              <span>Registro de Presente <FontAwesomeIcon icon={faGift} className="ml-1" />
              </span>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <label className="uppercase font-semibold text-[10px] -mb-2">Nome e Sobrenome</label>
              <div className="w-72">
                <div className="relative w-full min-w-[200px] h-10">
                  <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                    <FontAwesomeIcon icon={faUser} className="text-[#705318]" />
                  </div>
                  <input type="text" name="nome" id="nome" required
                    className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 text-sm px-3 py-2.5 rounded-[7px] border "
                    placeholder=" " />
                  <label
                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-300 before:border-blue-gray-200 peer-focus:before:!border-gray-300 after:border-blue-gray-200 peer-focus:after:!border-gray-300">
                  </label>
                </div>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3" controlId="exampleForm.ControlTextarea1"
            >
              <label className="uppercase font-semibold text-[10px] -mb-2">Telefone</label>
              <div className="w-72">
                <div className="relative w-full min-w-[200px] h-10">
                  <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                    <FontAwesomeIcon icon={faMobileRetro} className="text-[#705318]" />
                  </div>
                  <input type="number" name="telefone" id="telefone" required
                    className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 text-sm px-3 py-2.5 rounded-[7px] border "
                    placeholder=" "

                  /><label
                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-300 before:border-blue-gray-200 peer-focus:before:!border-gray-300 after:border-blue-gray-200 peer-focus:after:!border-gray-300">
                  </label>
                </div>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="bg-[#917235] hover:bg-[#695327] p-2 rounded-md text-white" onClick={handleClose}>
            Salvar
          </button>
          <button className="bg-[#727E65] hover:bg-[#34392d] p-2 rounded-md text-white" onClick={handleClose}>
            Fechar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalInform;