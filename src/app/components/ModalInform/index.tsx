import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMobileRetro } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputMask from 'react-input-mask';
import { IoMdAlert } from "react-icons/io";
import Confirmacao from '../Confirmacao';

const ModalInform = ({ id, ...props }: any) => {
  const [show, setShow] = useState(false);
  const [preenchido, setPreenchido] = useState(false);
  const [showConfirmacao, setShowConfirmacao] = useState(false);
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);
  const [tocado, setTocado] = useState<{ nome: boolean; telefone: boolean }>({ nome: false, telefone: false });
  const { register, handleSubmit, reset, watch } = useForm();

  const nome = watch('nome');
  const telefone = watch('telefone');

  useEffect(() => {
    if (nome && telefone) {
      setPreenchido(true);
    } else {
      setPreenchido(false);
    }
  }, [nome, telefone])

  const preencherInput = (nome: any, telefone: any) => {
    const temNome = !!nome;
    const temTelefone = !!telefone;

    if (!temNome || !temTelefone) {
      return "Preencha todos os campos";
    }
    return null;
  };

  const onSubmit = (data: any) => {
    const { id, nome, telefone } = data;
    const dados = { id, nome, telefone };
    const validacao = preencherInput(nome, telefone);
    console.log(dados);

    if (validacao !== null) {
      setMensagemErro(validacao);
    } else {
      setShow(false);
      setShowConfirmacao(true);
    }
  }

  const handleFocus = (campo: 'id' | 'nome' | 'telefone') => {
    setTocado((prevState) => ({
      ...prevState,
      [campo]: true,
    }));

    if (mensagemErro !== null) {
      setMensagemErro(null);
    }
  }

  const handleClose = () => {
    reset({ nome: '', telefone: '' });
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const handleCloseConfirmationModal = () => {
    setShowConfirmacao(false);
    handleClose();
    reset({
      nome: '',
      telefone: '',
      id: '',
    });
  }

  return (
    <>
      <FontAwesomeIcon icon={faGift} onClick={handleShow}
        className="
        text-[#edeeed] hover:text-[#b6b5b5] bg-[#43aec9]
        hover:bg-[#152529]
       font-bold py-2 px-2 rounded cursor-pointer
       m-1 mb-2 transition ease-in-out delay-100
       active:scale-50 duration-150"
      />

      <Modal show={show} onHide={handleClose} dialogClassName="modal-custom" centered>
        <Modal.Header closeButton>
          <Modal.Title className="flex items-center justify-center w-full">
            <div className=" text-[#917235] uppercase text-lg font-semibold">
              <span>
                Registro de Presente <FontAwesomeIcon icon={faGift} className="ml-1" />
              </span>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <span
              className="font-semibold uppercase text-[13px] text-[#2d6133] flex items-center justify-center">
              {id}
            </span>
            <input type="hidden" value={id} {...register('id')} />
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <label className="uppercase font-semibold text-[10px] -mb-2 ml-2 text-[#2d3a1f]">Nome e Sobrenome</label>
              <div className="w-72">
                <div className="relative w-full min-w-[200px] h-10">
                  <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                    <FontAwesomeIcon icon={faUser} className="text-[#727E65]" />
                  </div>
                  <input
                    type='text'
                    required
                    id="nome" placeholder="Digite seu nome completo"
                    className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 text-sm px-3 py-2.5 rounded-[7px] border"
                    {...register('nome')}
                    onFocus={() => handleFocus('nome')}
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <label className="uppercase font-semibold text-[10px] -mb-2 ml-2 text-[#2d3a1f]">WhatsApp</label>
              <div className="w-72">
                <div className="relative w-full min-w-[200px] h-10">
                  <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                    <FontAwesomeIcon icon={faMobileRetro} className="text-[#727E65]" />
                  </div>
                  <InputMask
                    mask="(99) 99999-9999" maskChar={null}
                    type="tel" id="telefone"
                    required
                    placeholder='(00) 00000-0000'
                    className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 text-sm px-3 py-2.5 rounded-[7px] border"
                    {...register('telefone')}
                    onFocus={() => handleFocus('telefone')}
                  />

                </div>
              </div>
            </Form.Group>
            {mensagemErro &&
              <p className="flex items-center justify-center" onFocus={() => handleFocus}>
                <IoMdAlert className="animate-pulse text-red-500 w-6 h-6" />
                <span className="text-red-700 text-xs uppercase">{mensagemErro}</span>
              </p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className={`${!preenchido ? 'pointer-events-none bg-gray-300 text-gray-600' : ''}
            bg-[#917235] hover:bg-[#695327] p-2 rounded-md text-white`}
            type="submit"
            onClick={handleSubmit((data) => onSubmit({ ...data, id }))}
          >
            Salvar
          </button>
          <button className="bg-[#727E65] hover:bg-[#34392d] p-2 rounded-md text-white"
            onClick={handleClose}
          >

            Fechar
          </button>
        </Modal.Footer>
      </Modal>

      <Confirmacao showConfirmacao={showConfirmacao} handleCloseConfirmationModal={handleCloseConfirmationModal} />
    </>
  );
}

export default ModalInform;
