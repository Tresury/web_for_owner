import { useState, useEffect } from "react";
import styles from './Wallet.module.css';
import { Orders } from "./Orders";

export default function OrderToTokens(props) {

  const [orderData, setOrderData] = useState([]);

  const hangleTransferSingle = (counter, amount, user) => {
 
    setOrderData((prev) => [
      {
        counter: counter.toString(), 
        amount: amount.toString(),
        user
      },
      ...prev
    ], [])

  };

  useEffect(() => {
    props.eventContract.on("NewOrder", hangleTransferSingle);

    return () => {
      props.eventContract.removeAllListeners("NewOrder");
    }
  }, [])

  
  return (
    <div className={styles.ordersCard}>
       <h1>Отправить токены за заказы</h1>
      <Orders orderData={orderData} contract={props.contract}></Orders>
    </div>
  );
}

export { OrderToTokens };