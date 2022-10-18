import React, {useState} from 'react';
import data from '../../Data/info'
import * as S from './style'

export default function Card() {

    const [open, setOpen] = useState (false)

    const [modalContent, setModalContent] = useState ([])

    const selectModal = (item) => {
        setModalContent ([item]);
    }

    const toggleModal = () => {
        setOpen(!open)
    }

    return (
        <>  
        {data.map((item, id) => (
            <>
            <S.Button key={id} open={open} onClick={() => {selectModal(item);toggleModal()}}>
                <p>{item.name}</p>
                <img src={item.btn} alt={item.name} title={item.name} />
            </S.Button> 
            </>
        ))}
        
        <S.Overlay open={open} onClick={() => {toggleModal(false)}}></S.Overlay>

        {modalContent.map((item, id) => (
        <S.ModalBox open={open}>
            <>
                <img src={item.img} alt={item.title} title={item.title}/>
                <h2 key={id}>{item.title}</h2>
                <p>{item.txt}</p>
                <button onClick={() => {toggleModal()}}>Fechar</button>
            </>
        </S.ModalBox>
        ))}
        </>
    );
}