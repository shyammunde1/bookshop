import React from "react";
import { OrderSuccess } from "./component/Success";
import { OrderFail } from "./component/fail";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hook/useTitle";

export const OrderPage = () => {
  const { state } = useLocation();
  useTitle('Order-Status_Check')


  return (
    <main>
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  );
};
