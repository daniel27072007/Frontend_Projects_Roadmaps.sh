import React, {useState, useContext, use} from 'react'
import { CardContext } from '../Context/CardContext';
import { AtualCardContext } from '../Context/AtualCard';

const ButtonMenu = () => {
    const {EsconderResposta, setEsconderResposta} = useContext(CardContext);
    const {AtualCard, setAtualCard} = useContext(AtualCardContext);

    return (
        <div className='buttonMenu'>
            <button
                id='previous'
                className='cardsButtons' 
                disabled={AtualCard == 0}
                onClick={() => {setAtualCard(AtualCard-1)}}>
                Previous
            </button>

            <button
                disabled={AtualCard == 20}
                onClick={() => {setEsconderResposta(!EsconderResposta)}}>
                {EsconderResposta ? 'Show Awnser' : 'Hide Awnser'}
            </button>

            <button
                id='next'
                className='cardsButtons' 
                disabled={AtualCard == 20}
                onClick={() => {setAtualCard(AtualCard+1), setEsconderResposta(EsconderResposta == true ? (EsconderResposta) : (!EsconderResposta))}}>
                Next
            </button>
        </div>
    )
}

export default ButtonMenu