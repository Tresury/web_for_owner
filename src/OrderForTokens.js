import { useState, useEffect } from "react";
import { Txs } from "./Txs";
import styles from './Wallet.module.css';

export default function OrderForTokens(props) {

  const [txsData, setTxsData] = useState([]);

  const hangleTransferSingle = (order, item) => {
    console.log(order);
 
    setTxsData((prev) => [
      {
        order: order.toString(), 
        item: item.toString(),
      },
      ...prev
    ], [])

  };

  useEffect(() => {
    props.eventContract.on("NewPurchase", hangleTransferSingle);

    return () => {
      props.eventContract.removeAllListeners("NewPurchase");
    }
  }, [])

  
  return (
    <div className={styles.ordersCard}>
       <h1>Заказы сделанные на Токены</h1>
      <Txs txsData={txsData}></Txs>
    </div>
  );
}

export { OrderForTokens };