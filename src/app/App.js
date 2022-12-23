import React from 'react';
import "./styles/app.css";
import { useDispatch, useSelector } from "react-redux";
import { asyncDecrementCreator, asyncIncrementCreator } from "./store/countReducer";
import { fetchUsers } from "./store/userReducer";

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector( state => state.countReducer.count );
    const users = useSelector( state => state.userReducer.users );

    return (
        <div className="app">
            <div style={ { fontSize: "60px" } }>{ count }</div>
            <div style={ { display: "flex" } }>
                <button onClick={ () => dispatch( asyncIncrementCreator() ) }>Пополнить счет</button>
                <button onClick={ () => dispatch( asyncDecrementCreator() ) }>Снять со счета</button>
                <button onClick={() => dispatch(fetchUsers())}>Получить юзеров</button>
            </div>
            <div className="users">
                { users.map( ( user ) =>
                    <div className="user">
                        { user.name }
                    </div>
                ) }
            </div>
        </div>
    );
};

export default App;