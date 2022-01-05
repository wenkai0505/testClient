import React, { useState } from 'react'
import Addpepole from '../service/addpepole.service'

const Add = () => {

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState('')
    let [age, setAge] = useState('')


    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleChangeAge = (e) => {
        setAge(e.target.value)
    }

    const handleAdd = () => {
        Addpepole.post(name, email, phone, age)
        setName('')
    }


    return (
        <div className='add'>
            <div className="inputRow">
                <label >姓名：</label>
                <input onChange={handleChangeName} type="text" value={name} />
            </div>
            <div className="inputRow">
                <label >信箱：</label>
                <input onChange={handleChangeEmail} type="text" />
            </div>
            <div className="inputRow">
                <label >電話：</label>
                <input onChange={handleChangePhone} type="text" />
            </div>
            <div className="inputRow">
                <label >年齡：</label>
                <input onChange={handleChangeAge} type="text" />
            </div>
            <button onClick={handleAdd} className='submit'>新增資料</button>

        </div>
    )
}

export default Add
