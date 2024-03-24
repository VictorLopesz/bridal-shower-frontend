'use client'
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import GatoAgradecendo from '../../../../public/assets/gato-agradecendo.gif'
import { GiConfirmed } from 'react-icons/gi';

interface ConfirmacaoProps {
    showConfirmacao: boolean;
    handleCloseConfirmationModal: () => void;
}

const Confirmacao: React.FC<ConfirmacaoProps> = ({ showConfirmacao, handleCloseConfirmationModal }: any) => {
    return (
        <div>
            <Modal show={showConfirmacao} onHide={handleCloseConfirmationModal} dialogClassName="modal-custom" centered>
                <Modal.Header className="flex items-center justify-center w-full">
                    <span className="flex items-center justify-center w-full h-full font-semibold text-2xl text-[#fff] uppercase">
                        Informações salvas <GiConfirmed className="ml-1 w-7 h-7" />
                    </span>
                </Modal.Header>
                <Modal.Body>
                    <span className="grid grid-cols-1 justify-self-center text-sm">
                        <div>
                            <p className="text-sm flex items-center justify-center w-full font-semibold uppercase">
                                Obigado pela sua escolha!
                            </p>
                            <p className="text-sm flex items-center justify-center w-full text-justify">
                                Você receberá uma mensagem de confirmação no whatsapp cadastrado.
                                Nesta mensagem terá o presente escolhido, e a data da confraternização.
                            </p>
                        </div>
                        <br />
                        <div className="flex items-center justify-center w-full">
                            <img src={GatoAgradecendo.src} alt='gatoagradecendo' className="ml-1 w-12 h-12" />
                        </div>
                    </span>
                </Modal.Body>
                <Modal.Footer>
                    <button className="
          text-[#1c4a55] hover:text-[#85e3fa] bg-[#dbdddb] hover:bg-[#6c6d6c] font-semibold 
          py-2 px-2 rounded-md m-1 transition ease-in-out delay-150 active:scale-50 duration-150
          "
                        onClick={handleCloseConfirmationModal}
                    >
                        Fechar
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Confirmacao;