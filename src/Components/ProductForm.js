import { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import ProductContext from '../Utilities/ProductContext';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';


function ProductForm() {
    const params = useParams()
    const [product, setProduct] = useState({
        id: params.productId,
        name: "",
        featured: true,
        imgUrl: "",
        price: "",
        type: "",
        color: "",
        description: ""
    })


    let { getProduct, addProduct, updateProduct } = useContext(ProductContext)
    let navigate = useNavigate()
    let { id, name, featured, imgUrl, price, type, color, description } = product

    useEffect(() => {
        if (id === undefined) return
        async function fetch() {
            await getProduct(id)
                .then((product) => setProduct(product))
        }
        fetch()
    }, [id, getProduct])

    function handleChange(event) {
        setProduct((preValue) => {
            return {
                ...preValue, [event.target.name]: event.target.value

            }
        })
    }

    function handleChecked(event) {
        setProduct((preValue) => {
            return {
                ...preValue, [event.target.name]: event.target.checked

            }
        })
    }

    function addOrUpdate() {

        return (
            id === undefined
                ? addProduct(product)
                : updateProduct(product)
        )
    }

    function addOrUpdateName() {
        return (
            id === undefined
                ? "Add New Product"
                : "Update Product"
        )
    }


    function handleSubmit(event) {
        event.preventDefault()
        addOrUpdate()
            .then((product) => navigate(`/products/${product.id}`))
    }

    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <div className=" m-5 text-center display-1">{addOrUpdateName()}</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form className="my-5" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" name="name" value={name} onChange={handleChange} className="rounded-0" />
                            <Form.Check
                                type="checkbox"
                                name="featured"
                                label="Featured Product"
                                onChange={handleChecked}
                                className="rounded-0"
                                checked={featured}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Product Price <span>(per pound)</span></Form.Label>
                            <Form.Control type="text" name="price" value={price} onChange={handleChange} className="rounded-0" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Product Type</Form.Label>
                            <Form.Select name="type" value={type} onChange={handleChange} className="rounded-0">
                                <option value="">Select an Option</option>
                                <option value="Citrus">Citrus</option>
                                <option value="Seed">Seed</option>
                                <option value="Stone">Stone</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Product Color</Form.Label>
                            <Form.Control type="text" name="color" value={color} onChange={handleChange} className="rounded-0" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Product Image URL </Form.Label>
                            <Form.Control type="text" name="imgUrl" value={imgUrl} onChange={handleChange} className="rounded-0" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control as="textarea" rows={5} name="description" value={description} onChange={handleChange} className="rounded-0" />
                        </Form.Group>

                        <Button type="submit" className="btn btn-primary rounded-0">Save</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductForm;