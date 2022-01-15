import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import './home.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/")
        .then(info => {
            console.log(info.data)
            setData(info.data)
        })
    }, [data])

    const notify = ()=>{
        toast.success('successfully Deleted', {autoClose:1000})   
    }


    const del = ()=>{
        if (window.confirm('Are you sure you wish to delete this item?')){
        axios.delete(`http://localhost:3001/delete/${data._id}`)
        notify()
        }
    }
    
    return (
        <div className='table'>
            <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th colSpan={3}>Action To Perform</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((info, index) => {
                    return(
                        <tr key = {index}>
                            <th>{index + 1}</th>
                            <td>{info.name}</td>
                            <td>{info.age}</td>
                            <td>
                                <Link to = {`/update/${info._id}`}>
                                    <button id = "update">Update</button>
                                </Link>
                            </td>
                            <td>
                                <Link to = {`/view/${info._id}`}>
                                    <button id = "view">View</button>
                                </Link>
                            </td>
                            <td>
                                <div>
                                    <button id = "delete" onClick={del}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    )
                }
            )
        }
            </tbody>
            </table>
        </div>
    )
}

export default Home
