import React from 'react';
import "./styles/app.css";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";
import { addCashAction, getCashAction } from "./store/cashReducer";
import { fetchCustomers } from "./asyncActions/customers";

const App = () => {
    const dispatch = useDispatch();
    const cash = useSelector( state => state.cash.cash );
    const customers = useSelector( state => state.customers.customers );

    const addCash = ( cash ) => {
        dispatch( addCashAction(cash) );
    };
    const getCash = ( cash ) => {
        dispatch( getCashAction(cash) );
    };
    const addCustomer = ( name ) => {
        const customer = {
            name,
            id: Date.now(),
        };
        dispatch( addCustomerAction( customer ) );
    };
    const removeCustomer = ( customer ) => {
        dispatch( removeCustomerAction( customer.id ) );
    };

    return (
        <div className="app">
            <div style={ { fontSize: "60px" } }>{ cash }</div>
            <div style={ { display: "flex" } }>
                <button onClick={ () => addCash( Number( prompt() ) ) }>Пополнить счет</button>
                <button onClick={ () => getCash( Number( prompt() ) ) }>Снять со счета</button>
                <button onClick={ () => addCustomer( prompt() ) }>Добавить клиента</button>
                <button onClick={ () => getCash( Number( prompt() ) ) }>Удалить клиента</button>
                <button onClick={ () => dispatch(fetchCustomers()) }>Получить клиентов из базы</button>
            </div>
            { customers.length > 0 ?
                <div>
                    { customers.map( customer =>
                        <div style={ {
                            fontSize: "2rem",
                            border: "1px solid black",
                            padding: "10px",
                            marginTop: 5
                        } }
                             onClick={ () => removeCustomer( customer ) } key={ customer.id }
                        >
                            { customer.name }
                        </div>
                    ) }
                </div>
                :
                <div style={ { fontSize: "2rem", marginTop: 20 } }>
                    Клиенты отсутствуют!
                </div>
            }
        </div>
    );
};

export default App;