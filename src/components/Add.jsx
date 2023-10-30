import React,{useState} from 'react'
import { Modal,Button,Form } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
function Add({setUploadVideoServerResponse}) {
  const[video,setVideo] = useState({
    id:"",caption:"",url:"",embedLink:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getEmbedLink=(e)=>{
    const {value} = e.target
    if(value){
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }else{
      setVideo({...video,embedLink:""})
    }
    
  }
  const handleUpload = async ()=>{
    const {id,caption,url,embedLink} = video
    if(!id || !caption || !url || !embedLink){
      alert("Please fill the form completely!")
    }else{
      // make api call uploadVideo
      const response = await uploadVideo(video)
      console.log(response);
      if(response.status>=200 && response.status<300){
        //set server response
        setUploadVideoServerResponse(response.data)
        alert(`'${response.data.caption}' video uploaded successfully!`)
        //hide modal
        handleClose()
      }else{
        console.log(response);
        alert("Cannot perform the action at the moment. Please try again later!")
      }
    }
  }
  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn'><i className='fa-solid fa-circle-plus fs-5'></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <Form className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>
          setVideo({...video,id:e.target.value})
        } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>
          setVideo({...video,caption:e.target.value})
        } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e)=>
          setVideo({...video,url:e.target.value})
        } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={getEmbedLink} />
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add