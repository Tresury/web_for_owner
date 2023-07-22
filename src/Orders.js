import React from "react";
import { OneOrder } from "./OneOrder";

const Orders = (props) => {
  const orderData = props.orderData;
  return (
    <div>
      {orderData.map((oneOrder) => {
        return (
          <OneOrder key={oneOrder.counter} counter={oneOrder.counter} amount={oneOrder.amount} user={oneOrder.user}
                    contract={props.contract}></OneOrder>
        );
      })}
    </div>
  );
};

export { Orders };