import React, {useState} from 'react';
import Modal from 'react-modal'
import * as S from './style'
import Água from '../../Assets/card_04.svg'
import Suja from '../../Assets/card_04.png'

export default function Water() {

    const [ status, setStatus] = useState(false)

    const handleStatus = () => {
      setStatus (!status)
    }

    return (
        <>  
        <S.Button onClick={() => {handleStatus()}}>
            <h4>Saneamento Básico</h4>
            <img src={Água} alt='Água' title='Água' />
        </S.Button> 
        <Modal 
        isOpen={status}
        style={{overlay:{backgroundColor: 'rgb(0 0 0 / 0.5)'}, content: {background:'var(--bg-dark)'}}}>
            <S.ModalBox>
                <img src={Suja} alt='Valão' title='Valão'/>
                <h2>Poluição</h2>
                <p>- Se o povo joga lixo pela a rua, porque não jogar nos rios, quando caia aquela chuva forte, alaga tudo e o pessoal perde tudo, una-se às autoridades que não querem fazer nada, e puff temos a receita pra desgraça :).</p>
                <button onClick={() => {handleStatus()}}>
                    Fechar Menu
                </button>
            </S.ModalBox>
        </Modal>
        </>
    );
}