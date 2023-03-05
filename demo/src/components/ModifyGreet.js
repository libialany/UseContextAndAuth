import React, { useState } from 'react';
import { useDataContext } from '../hook/useDataContext';
const ModifyGreet = () => {

    const { setName } = useDataContext();
    const [data, setData] = useState("")
    const onInputChange = (e) => {
        setData(e.target.value);
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (data !== "") {
            setName(data)
        }
        else {
            alert("Fill Name Input!")
        }
    }
    return (
        <form onSubmit={e => onHandleSubmit(e)}>
            <input onChange={e => onInputChange(e)} value={data} />
            <button>
                Submit
            </button>
        </form>
    )
}

export default ModifyGreet;