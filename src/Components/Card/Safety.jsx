import React, {useState} from 'react';
import Modal from 'react-modal'
import * as S from './style'
import Segurança from '../../Assets/card_03.svg'
import Trafico from '../../Assets/card_03.jpg'

export default function Safety() {

    const [ status, setStatus] = useState(false)

    const handleStatus = () => {
      setStatus (!status)
    }

    return (
        <>  
        <S.Button onClick={() => {handleStatus()}}>
             <h4>Segurança</h4>
            <img src={Segurança} alt='Segurança' title='Segurança' />
        </S.Button> 
        <Modal 
        isOpen={status}
        style={{overlay:{backgroundColor: 'rgb(0 0 0 / 0.5)'}, content: {background:'var(--bg-dark)'}}}>
            <S.ModalBox>
                <img src={Trafico} alt='Apreensão' title='Apreensão' />
                <h2>Segurança</h2>
                <p>- Favela, logo a segurança não é das melhores, se fosse Milícia duvido muito que melhoria algo, solução? Têm várias, escolha o seu veneno.</p>
                <button onClick={() => {handleStatus()}}>
                    Fechar Menu
                </button>
            </S.ModalBox>
        </Modal>
        </>
    );
}