import axios from 'axios'
import React, { useState, useEffect} from 'react'
import {useHistory ,  useParams} from 'react-router-dom'

function View() {
     const [data, setData] = useState([])
     const {id} = useParams()
     let history = useHistory();

     const view = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alingItem: 'center',
        backgroundColor: '#edf5ef',
        width: "50%",
        marginTop: "20px",
        padding: "10px"
     }
     useEffect(() => {
        axios.get(`http://localhost:3001/view/${id}`)
        .then(info => {
            setData(info.data)
        })
    }, [id])
    const btn = {
        margin: '5px',
        backgroundColor: '#c0fad0',
        border: '3px solid #04d63c'
    }
    return (
        <div style = {view}>
            <h2>Name: {data.name}</h2>
            <h3>Age: {data.age}</h3>
            <button style={btn} onClick={() => history.goBack()}>Back</button>
        </div>
        
    )
}

export default View
