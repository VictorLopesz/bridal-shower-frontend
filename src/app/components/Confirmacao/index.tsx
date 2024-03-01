'use client'
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faLaughBeam } from '@fortawesome/free-regular-svg-icons';
import GatoAgradecendo from '../../../../public/assets/gato-agradecendo.gif'

interface ConfirmacaoProps {
    showConfirmacao: boolean;
    handleCloseConfirmationModal: () => void;
}

const Confirmacao: React.FC<ConfirmacaoProps> = ({ showConfirmacao, handleCloseConfirmationModal }: any) => {
    return (
        <div>
            <Modal show={showConfirmacao} onHide={handleCloseConfirmationModal} dialogClassName="modal-custom" centered>
                <Modal.Header>
                    <span className="flex items-center justify-self-center font-semibold text-[#727E65] uppercase">
                        Informações salvas! <FontAwesomeIcon icon={faCircleCheck} className="ml-1 w-7 h-7" />
                    </span>
                </Modal.Header>
                <Modal.Body>
                    <span className="grid grid-cols-1 justify-self-center text-sm">
                        <p>
                            Você receberá um SMS de confirmação no número cadastrado.
                            Nesse SMS irá constar seu nome cadastrado, o presente escolhido, data e hora do evento.                            <br />
                            <br />
                            Próximo à data, lembraremos você novamente.
                        </p>
                        <br />
                        <p className="flex items-center justify-center">
                            Obrigado <img src={GatoAgradecendo.src} alt='gatoagradecendo' className="ml-1 w-12 h-12" />
                        </p>
                    </span>
                </Modal.Body>
                <Modal.Footer>
                    <button className="bg-[#ad9762] hover:bg-[#857449] p-2 rounded-md text-[#ffffff]" onClick={handleCloseConfirmationModal}>
                        Fechar
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Confirmacao;