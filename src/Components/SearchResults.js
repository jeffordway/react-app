import React, { useContext } from 'react'
import ProductContext from '../Utilities/ProductContext'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function SearchResults() {

    const { productQuery, deleteProduct } = useContext(ProductContext)

  
    function generateProductCard(item) {

        return (
            <Col xs={12} md={6} lg={4} key={'featured' + item.name} className="d-flex align-items-stretch" >
                <Card className="border-0 rounded-0 bg-transparent">
                    <Card.Img variant="top" alt={item.name} src={item.imgUrl} className="border-0 rounded-0" />
                    <Card.Body>
                        <Card.Title className="text-center text-uppercase">{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">${item.price} per pound</Card.Subtitle>
                        <Card.Text className="d-flex justify-content-around text-uppercase  mx-5 my-3">
                            <Link className="btn btn-success rounded-0 flex-grow-1 mx-3" to={`/products/${item.id}`}>
                                View
                            </Link>
                            <Link className="btn btn-secondary rounded-0 flex-grow-1 mx-3" to={`/products/${item.id}/edit`} >
                                Edit
                            </Link>
                            <Button type="button" variant="danger" className="rounded-0 flex-grow-1 mx-3" onClick={handleDeleteProduct.bind(this, item.id)} >Delete</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }

    function renderList() {
        return(productQuery.map((product) => generateProductCard(product)))
    }

    function handleDeleteProduct(id) {
        deleteProduct(id)
        renderList(id)
    }

    function resultsHeader() {
        return(
            productQuery === null
            ? "Sorry We Could Not Find Any Results"
            : "Search Results"
        )
    }




    return (
        <>
        <div className="bg-light">
            <Container >
                <Row>
                    <Col className="position-relative">
                        <div className="m-5 text-center display-1">{resultsHeader()}</div>
                        <div className="position-absolute top-50 end-0">
                            <Link className="btn btn-success rounded-0" to={`/products/add`}>
                                Add New
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {renderList()}
                </Row>
            </Container>
        </div>
    </>
    )
}

export default SearchResults;