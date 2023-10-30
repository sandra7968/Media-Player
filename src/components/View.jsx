import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Row, Col } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'
function View({uploadVideoServerResponse}) {
  const [AllVideos,setAllVideos] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

  const getAllUploadedVideos = async ()=>{
    // make api call
    const {data} = await getAllVideos()
    setAllVideos(data);
  }
  useEffect(()=>{
    getAllUploadedVideos()
  },[uploadVideoServerResponse,deleteVideoStatus])

  return (
    <>
      <Row>
        { 
          AllVideos.length>0?
          AllVideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
          </Col>
          ))
             :
             <p className='fw-bolder fs-5 text-danger'>Nothing to display!</p>
        }

      </Row>
    </>
  )
}

export default View