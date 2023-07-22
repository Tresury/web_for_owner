import React, { useState } from "react";
import styles from './Wallet.module.css';

const Tx = (props) => {

    const [itemData, setItemData] = useState([
        {id: 1, name: "Гавайская Пицца", price: 100, pict: './images/pizza_1.png'},
		{id: 2, name: "Француская Пицца", price: 200, pict: './images/pizza_2.png'},
		{id: 3, name: "Деревенская Пицца", price: 120, pict: './images/pizza_3.png'},
		{id: 4, name: "Колбасная Пицца", price: 140, pict: './images/pizza_4.png'},
    ]);

    const [butText, setButText] = useState("Выполнить Заказ");
    const [butStyle, setButStyle] = useState(styles.button7);
    const [orderText, setOrderText] = useState(`В заказ №${props.order} требуется положить ${itemData[(props.item - 1)].name}`)
    const [textSyle, setTextStyle] = useState(styles.text1);



    function handleClick() {
        setButStyle(styles.button8);
        setButText('Заказ готов');
        setOrderText(`В заказ №${props.order} положили ${itemData[(props.item - 1)].name}`);
        setTextStyle(styles.text2);
    }

    //В заказ №{props.order} требуется положить {itemData[props.item - 1].name}

    return (
        <div className={textSyle}>
            <button className={butStyle} onClick={() => handleClick()}> {butText} </button>
            {orderText}
        </div>
    )
}

export { Tx };

