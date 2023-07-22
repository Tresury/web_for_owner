import React from "react";
import { Tx } from "./Tx";

const Txs = (props) => {
  const txsData = props.txsData;
  return (
    <div>
      {txsData.map((oneTxs) => {
        return (
          <Tx key={oneTxs.order} order={oneTxs.order} item={oneTxs.item}></Tx>
        );
      })}
    </div>
  );
};

export { Txs };