import { Container, Image, Row, Col } from "react-bootstrap";


function About() {

    const img = "https://images.unsplash.com/photo-1518567283970-1be575199348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"

    return (
            <Container className="my-5 py-5">
                <Row className="g-5">
                    <Col xs={12} md={6}>
                        <Image fluid rounded alt="Montclaire Farms" src={img} />
                    </Col>
                    <Col xs={12} md={6}>
                        <h3 className="display-6">Welcome to</h3>
                        <h1 className="display-2">Montclaire Farms</h1>
                        <div>
                            <p>Montclaire Farms is an online fruit store that delivers an exciting mix of farm-grown fruit, expertly curated and delivered directly to you. All fruits are picked at their peak ripeness and flash-frozen to preserve all their naturally occurring nutritional value. Please browse our extensive assortment of American-grown fruits!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
    )
}
export default About