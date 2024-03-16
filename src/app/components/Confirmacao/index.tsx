'use client'
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FaRegGrinHearts } from "react-icons/fa";
import GatoAgradecendo from '../../../../public/assets/gato-agradecendo.gif'

interface ConfirmacaoProps {
    showConfirmacao: boolean;
    handleCloseConfirmationModal: () => void;
}

const Confirmacao: React.FC<ConfirmacaoProps> = ({ showConfirmacao, handleCloseConfirmationModal }: any) => {
    return (
        <div>
            <Modal show={showConfirmacao} onHide={handleCloseConfirmationModal} dialogClassName="modal-custom" centered>
                <Modal.Header className="flex items-center justify-center w-full">
                    <span className="flex items-center justify-center font-semibold text-[#727E65] uppercase">
                        Informações salvas! <FontAwesomeIcon icon={faCircleCheck} className="ml-1 w-7 h-7" />
                    </span>
                </Modal.Header>
                <Modal.Body>
                    <span className="grid grid-cols-1 justify-self-center text-sm">
                        <div className="text-sm flex items-center justify-center w-full">
                            <p>
                                <p className="font-semibold">
                                    Obigado pela sua escolha!
                                </p>
                                <p className="text-sm">
                                    Você receberá uma mensagem de confirmação no whatsapp cadastrado.
                                    Nesta mensagem terá o presente escolhido, e a data da confraternização.
                                </p>
                            </p>
                        </div>
                        <br />
                        <div className="flex items-center justify-center w-full">
                            <img src={GatoAgradecendo.src} alt='gatoagradecendo' className="ml-1 w-12 h-12" />
                        </div>
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