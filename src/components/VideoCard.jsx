import React,{useState} from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addToHistory, deleteAVideo } from '../services/allAPI';
function VideoCard({displayData, setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    // make api call http://localhost:4000/history
    const {caption,embedLink}= displayData
    let today = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    let videoDetails = {
      caption,embedLink,timeStamp
    }
    await addToHistory(videoDetails)
  }

  // deleting a video
  const removeVideo = async(id)=>{
    // make api call
    const response = await deleteAVideo(id)
    setDeleteVideoStatus(true)
  }

  return (
    <>
   {
   displayData &&
   <Card className='mb-3'>
      <Card.Img onClick={handleShow} height={'180px'} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>
          <button onClick={()=>removeVideo(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
        </Card.Title>
      </Card.Body>
    </Card>}
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="315" src={`${displayData?.embedLink}?autoplay=1`} title={`${displayData?.caption}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></Modal.Body>
      </Modal>
    </>

    
  )
}

export default VideoCard