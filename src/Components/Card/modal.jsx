import React, {useState, useEffect, useRef} from 'react';
import * as S from './style'

export default function Modal({children}) {

    const [open, setOpen] = useState (false)
    const btnRef = useRef()

    const toggleModal = () => {
        setOpen(!open)
    }

    useEffect (() => {

        const closeModal = e => {
            if(e.path[0] !== btnRef.current){
              setOpen(!true)
            }
          };

          document.body.addEventListener('click', closeModal);
          return () => document.body.removeEventListener('click', closeModal);
    }, [open]);

    return (
        <>  
        <S.Button  open={open} ref={btnRef} onClick={() => {toggleModal()}}>
            {children}
        </S.Button>
        <S.Overlay open={open}></S.Overlay> 
        <S.ModalBox open={open}>
            {children}
        </S.ModalBox>
        </>
    );
}

