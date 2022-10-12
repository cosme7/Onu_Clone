import React, {useState} from 'react';
import Modal from 'react-modal'
import * as S from './style'
import Lixo from '../../Assets/card_05.svg'
import Lixão from '../../Assets/card_05.jpg'

export default function Trash() {

    const [ status, setStatus] = useState(false)

    const handleStatus = () => {
      setStatus (!status)
    }

    return (
        <>  
        <S.Button onClick={() => {handleStatus()}}>
            <h4>Lixo</h4>
            <img src={Lixo} alt='Lixo' title='Lixo' />
        </S.Button> 
        <Modal 
        isOpen={status}
        style={{overlay:{backgroundColor: 'rgb(0 0 0 / 0.5)'}, content: {background:'var(--bg-dark)'}}}>
            <S.ModalBox>
                <img src={Lixão} alt="Lixão" title='Lixão'/>
                <h2>Lixões</h2>
                <p>- Pessoal joga lixo na rua, foto acima foi na Av.Brasil que praticamente virou um lixão aquilo ali, Comlurb faz a coleta de lixo 3 vezes por semana, o problema... O povo não ajuda, aí já é questão de bom senso (ou não).</p>
                <button onClick={() => {handleStatus()}}>
                    Fechar Menu
                </button>
            </S.ModalBox>
        </Modal>
        </>
    );
}