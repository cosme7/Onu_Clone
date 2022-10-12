import React, {useState} from 'react';
import Modal from 'react-modal'
import * as S from './style'
import Transporte from '../../Assets/card_01.svg'
import Busão from '../../Assets/card_01.png'

export default function Transport() {

    const [ status, setStatus] = useState(false)

    const handleStatus = () => {
      setStatus (!status)
    }

    return (
        <>  
        <S.Button onClick={() => {handleStatus()}}>
            <h4>Transporte</h4>
            <img src={Transporte} alt='Transporte' title='Transporte' />
        </S.Button> 
        <Modal 
        isOpen={status}
        style={{overlay:{backgroundColor: 'rgb(0 0 0 / 0.5)'}, content: {background:'var(--bg-dark)'}}}>
            <S.ModalBox>
                <img src={Busão} alt='Busão' title='Busão' />
                <h2>Transporte</h2>
                <p>- Tranposrte pelo menos aqui no Bairro é tranquilo até, MAS, ônibus sucateados, povo que não preversa o que eles próprios usam, e claro interesse político por trás disso, não acho que o BRT vá melhorar muita coisa, ainda mais que dependendo a galera da Zona Oeste vai ficar refém de 1 linha de ônibus.</p>
                <button onClick={() => {handleStatus()}}>
                    Fechar Menu
                </button>
            </S.ModalBox>
        </Modal>
        </>
    );
}