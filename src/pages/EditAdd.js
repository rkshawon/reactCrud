import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useHistory ,  useParams} from 'react-router-dom'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditAdd() {
    const [name, setName ] = useState("")
    const [age, setAge] = useState(0)
    var [data, setData] = useState([])
    const {id} = useParams()
    let history = useHistory();

    const notify = ()=>{
        toast.success('successfully Updated', {autoClose:1000})   
    }

    const addUser = ()=>{
        data = {
            id: id,
            name: name,
            age: age
        }
        axios.post(`http://localhost:3001/update`, data)
        notify()
    }
    useEffect(() => {
        axios.get(`http://localhost:3001/view/${id}`)
        .then(info => {
            setData(info.data)
            console.log(data)
        })
    }, [])
    const update = {
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
        <div style={update}>
            <input style={inp} type = "text" placeholder = {data.name || ""} onChange={(e)=>{setName(e.target.value)}}/>
            <input style={inp}  type = "text" placeholder = {data.age || 0}  onChange={(e)=>{setAge(e.target.value)}}/>
            <button style={btn} onClick={addUser}>Update Info</button>
            <button style={btn} onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default EditAdd
