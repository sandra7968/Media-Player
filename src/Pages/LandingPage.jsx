import React from 'react'
import { Col,Row,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
     <Row className="mt-5 mb-5 align-items-center justify-content-between w-100">
      <Col></Col>
      <Col lg={4}>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nemo earum, sapiente harum reiciendis blanditiis pariatur perspiciatis tempore voluptatem autem cumque. Molestias cumque illum laboriosam saepe voluptatem odit quae tenetur.</p>
        <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-primary'>Get Started <i className='fa-solid fa-arrow-right fa-beat ms-2'></i></button>
      </Col>
      <Col></Col>
      <Col lg={6}>
        <img className='img-fluid' src="https://i.pinimg.com/originals/ab/45/bb/ab45bb4451536652faca51ae4f42d5dd.gif" alt="Landing" />
      </Col>
      </Row> 

      <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Features</h3>
        <div className="cards mt-5 d-flex align-items-center justify-content-between w-100">
        <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/0c/cd/96/0ccd96bc52dc46b1f5f3ea89cad58ecb.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/6e/d4/47/6ed447c4470bf234478fc661c0145bce.gif" />
      <Card.Body>
        <Card.Title>Categorise Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/50/8f/11/508f1181449ccca9dc2f8f49afdc928b.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>

      <div className='container border rounded p-5 border-secondary mt-5 d-flex align-items-center justify-content-between w-100 mb-5'>
        <div className="col-lg-5">
          <h3 className='mb-5 text-warning'>Simple, Fast and Powerful</h3>
          <h6 className='mb-3' style={{textTransform:'none'}}><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perferendis incidunt totam quia a illum vel.</h6>
          <h6 className='mb-3' style={{textTransform:'none'}}><span className='fs-5 fw-bolder'>Categorise Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perferendis incidunt totam quia a illum vel.</h6>
          <h6 className='mb-3' style={{textTransform:'none'}}><span className='fs-5 fw-bolder'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perferendis incidunt totam quia a illum vel.</h6>

        </div>
        <div className="video col-lg-6">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/i5nUufn_FmE?si=t6ukVpUz97O6H0Fq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default LandingPage