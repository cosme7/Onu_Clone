import React, {useState} from 'react';
import Modal from 'react-modal'
import * as S from './style'
import Health from '../../Assets/card_02.svg'
import Cuidados from '../../Assets/card_02.jpg'

export default function Saúde() {

    const [ status, setStatus] = useState(false)

    const handleStatus = () => {
      setStatus (!status)
    }

    return (
        <>  
        <S.Button onClick={() => {handleStatus()}}>
            <h4>Saúde</h4>
            <img src={Health} alt='Saúde' title='Saúde' />
        </S.Button>  
        <Modal 
        isOpen={status}
        style={{overlay:{backgroundColor: 'rgb(0 0 0 / 0.5)'}, content: {background:'var(--bg-dark)'}}}>
            <S.ModalBox>
                <img src={Cuidados} alt='Clínica da Família' title='Clínica da Família' />
                <h2>Saúde</h2>
                <p>- Os serviços do Bairro são muito precários nesse ponto, a clínica da família do Bairro, não tem Médicos de plantão, somente infermeiro e caso você for marcar uma consulta pra algum exame, vai demorar séculos, e caso queira encamiamento para outra unidade, difícilmente eles dão (baseando em testemunho de terceiros), ah, esqueci dá UPA que demora um século para o atendimento :), arrumar esse problema creio que seria um vespeiro, muito peixe grande... ¯\_(ツ)_/¯.</p>
                <button onClick={() => {handleStatus()}}>
                    Fechar Menu
                </button>
            </S.ModalBox>
        </Modal>
        </>
    );
}