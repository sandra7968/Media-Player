import React from 'react'
import { Link } from 'react-router-dom'
import { getAllHistory } from '../services/allAPI'

function WatchHistory() {
 
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory