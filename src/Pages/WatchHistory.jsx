import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHistory } from '../services/allAPI'

function WatchHistory() {
  const [history,setHistory] = useState([])
  const handleHistory = async ()=>{
    // make api call
    const {data} = await getAllHistory()
    setHistory(data);
  }

  useEffect(()=>{
    handleHistory()
  },[])
  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <h3>Watch History</h3>
        <Link to={'/home'} style={{textDecoration:'none', fontSize:'20px'}}><i className='fa-solid fa-arrow-left fa-beat me-2'></i>Back to Home</Link>
      </div>
      <table className='table mt-5 mb-5 container'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
          </tr>
        </thead>
        <tbody>
          {
            history?history?.map((item,index)=>(
            <tr key={index}>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td><a href={item?.embedLink} target='_blank'>{item?.embedLink}</a></td>
            <td>{item?.timeStamp}</td>
          </tr>)):
          <p className='fw-bolder fs-5 text-danger'>Nothing to display!</p>
          }
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory