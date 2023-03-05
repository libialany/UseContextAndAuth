import React from 'react';
import { useDataContext } from '../hook/useDataContext';
const Greet = () => {
    const { name } = useDataContext();
    return (
        <div>
            <h2>
                <span>{name?name:'foo'}</span>
            </h2>
        </div>
    )
}

export default Greet;