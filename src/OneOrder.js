import React, { useState } from "react";
import styles from './Wallet.module.css';

const OneOrder = (props) => {

    const [butText, setButText] = useState(`Отправить ${props.amount} токенов`);
    const [butStyle, setButStyle] = useState(styles.button7);
    const [textSyle, setTextStyle] = useState(styles.text1);

    const transferHandler = async (amount, addressTo) => {
		let transferAmount = amount;
		let recieverAddress = addressTo; //
		let txt = await props.contract.transfer(recieverAddress, transferAmount);

        setButStyle(styles.button8);
        setButText('Токены отправлены');
        setTextStyle(styles.text2);
	}



    return (
        <div>
            <div className={textSyle}>
                <button className={butStyle} onClick={() => transferHandler(props.amount, props.user)}> {butText} </button>
                Заказ №{props.counter} на сумму {props.amount} от {props.user.slice(0, 6)}
            </div>
        </div>
    )
}

export { OneOrder };