import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMobileRetro } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputMask from 'react-input-mask';



const ModalInform = () => {
  const [show, setShow] = useState(false);
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);
  const [tocado, setTocado] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm();

  const preencherInput = (nome: any, telefone: any) => {
    const temNome = !!nome;
    const temTelefone = !!telefone;

    if (!temNome || !temTelefone) {
      return "Preencha todos os campos antes de tentar enviar";
    }
    return null;
  };

  const onSubmit = (data: any) => {
    const { nome, telefone } = data;
    const erroValidacao = preencherInput(nome, telefone);

    if (erroValidacao !== null) {
      setMensagemErro(erroValidacao);
    } else {
      console.log("Dados enviados:", data);
      // setShow(false);
    }
    reset({
      nome: '',
      telefone: '',
    });

  }

  const handleFocus = () => {
    if (tocado) {
      setMensagemErro(null);
    }
  }

  const handleClose = () => setShow(false);
  console.log(handleClose);
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
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <label className="uppercase font-semibold text-[10px] -mb-2">Nome e Sobrenome</label>
              <div className="w-72">
                <div className="relative w-full min-w-[200px] h-10">
                  <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                    <FontAwesomeIcon icon={faUser} className="text-[#705318]" />
                  </div>
                  <input
                  type='text'
                    required
                    id="nome" placeholder="Digite seu nome completo"
                    className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 text-sm px-3 py-2.5 rounded-[7px] border"
                    {...register('nome')}
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <label className="uppercase font-semibold text-[10px] -mb-2">Telefone</label>
              <div className="w-72">
                <div className="relative w-full min-w-[200px] h-10">
                  <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                    <FontAwesomeIcon icon={faMobileRetro} className="text-[#705318]" />
                  </div>
                  <InputMask
                  mask="(99) 99999-9999" maskChar={null} 
                  type="tel" id="telefone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    placeholder='(00) 00000-0000'
                    className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 text-sm px-3 py-2.5 rounded-[7px] border"
                    {...register('telefone')}
                  />

                </div>
              </div>
            </Form.Group>
            {mensagemErro && <p className="text-red-500" onFocus={handleFocus}>{mensagemErro}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-[#917235] hover:bg-[#695327] p-2 rounded-md text-white"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Salvar
          </button>
          <button className="bg-[#727E65] hover:bg-[#34392d] p-2 rounded-md text-white"
            onClick={handleClose}
          >
            
            Fechar
          </button>
        </Modal.Footer>
      </Modal >
    </>
  );
}

export default ModalInform;
