
import { useParams, useNavigate, Outlet, Link } from "react-router-dom";
import { useContext, useState, useEffect } from 'react'
import { Alert, Col, Container, Image, Spinner, Row, Button } from "react-bootstrap";
import ProductContext from "../Utilities/ProductContext";

function ProductDetails(props) {

    let params = useParams()
    let navigate = useNavigate()

    let { getProduct, deleteProduct } = useContext(ProductContext)
    let [product, setProduct] = useState()
    let [error, setError] = useState()

    useEffect(() => {
        setError(null)
        async function fetch() {
            await getProduct(params.productId)
                .then((product) => setProduct(product))
                .catch((message) => setError(message))
        }
        fetch()
    }, [params.productId, getProduct])

    function handleDeleteProduct(id) {
        deleteProduct(id)
        navigate('/products')
    }

    function loading() {
        return <div className="w-25 text-center"><Spinner animation="border" variant="primary" /></div>
    }

    function errorMessage() {
        return <Alert variant="danger">There was an error attempting to find this product: <strong>{error}</strong></Alert>
    }

    function productInfo() {
        let { id, name, imgUrl, price, type, color, description } = product

        return (
            <Container className="my-5 py-5">
                <Row className="g-5">
                    <Col xs={12} md={6}>
                        <Image fluid alt={name} src={imgUrl} />
                    </Col>
                    <Col xs={12} md={6}>
                        <h1 className="display-1">{name}</h1>
                        <div className="d-flex justify-content-between">
                            <h1 className="display-6 ">${price} per pound</h1>
                            <h1 className="display-6">Fruit Type: {type}</h1>
                            <h1 className="display-6">Color: {color}</h1>
                        </div>
                        <br />
                        <div>{description}</div>
                        <div className="d-flex text-uppercase  my-5">
                            <Link className="btn btn-secondary rounded-0 flex-grow-1 me-3" to={`/products/${id}/edit`} >
                                Edit
                            </Link>
                            <Button type="button" variant="danger" className="rounded-0 flex-grow-1 " onClick={handleDeleteProduct.bind(this, id)} >Delete</Button>

                        </div>
                    </Col>
                    <Col>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        )
    }
    if (error) return errorMessage()
    if (product === undefined) return loading()
    return (
        product.id !== parseInt(params.productId)
            ? loading()
            : productInfo())
}

export default ProductDetails;