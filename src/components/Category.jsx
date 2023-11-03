import React,{useEffect, useState} from 'react'
import { Modal,Button,Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory,deleteCategory,getAllCategory } from '../services/allAPI';
function Category() {
  const [allCategories,setAllCategories] = useState("")
  const [categoryName,setCategoryName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddCategory = async ()=>{
    if(categoryName){
      let body={
        categoryName,allVideos:[]
      }
      // make api call
      const response = await addCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        // hide modal
        handleClose()
        // rest state
        setCategoryName("")
        // get category
        getCategories()
      }else{
        toast.error("Operation Failed. Please try again later.")
      }
    }else{
      toast.warning("Please provide category name")
    }
  }

  const getCategories = async()=>{
    // make api call
    const{data} =await getAllCategory()
    setAllCategories(data);
  }
  
  useEffect(()=>{
    getCategories()
  },[])

  const handleDelete = async (id)=>{
    await deleteCategory(id)
    getCategories()
  }

  return (
    <>
    <div className="d-grid ms-3">
      <button onClick={handleShow} className="btn btn-primary">Add New Category</button>
    </div>
    {
      allCategories.length>0?allCategories?.map(item=>(
        <div className="mt-3 ms-3 border rounded p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h6>{item?.categoryName}</h6>
            <button onClick={()=>handleDelete(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          </div>
        </div>
      )): <p className="fw-bolder fs-5 ms-3 mt-3 text-danger">No Categories Added!</p>
    }

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border border-secondary rounded p-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Category Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

    </>
  )
}

export default Category