import axios from 'axios'
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddEdit() {
    const [name, setName ] = useState("")
    const [age, setAge] = useState(0)
    let history = useHistory();
    var data = {}

    const notify = ()=>{
        toast.success('successfully Added', {autoClose:1000})   
    }

    const addUser = ()=>{
        data = {
            name: name,
            age: age
        }
        console.log(data)
        axios.post("http://localhost:3001/add", data)
        notify()
    }
    const add = {
        display: 'flex',
        flexDirection: 'column',
        height: '50px',
        width: '200px',
        marginTop: '20px'
    }
    const inp = {
        margin: '5px',
        outline: "none"
    }
    const btn = {
        margin: '5px',
        backgroundColor: '#c0fad0',
        border: '3px solid #04d63c'
    }

    return (
        <div style = {add}>
            <input style ={inp} type = "text" placeholder='Enter name..' onChange={(e)=>{setName(e.target.value)}}/>
            <input style ={inp} type = "text" placeholder='Enter age..' onChange={(e)=>{setAge(e.target.value)}}/>
            <button style = {btn} onClick={addUser}>Add User</button>
            <button style={btn} onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default AddEdit
