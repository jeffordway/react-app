import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="d-flex align-items-stretch bg-success text-light position-static-bottom">
            <Container fluid className="py-2 text-light d-flex align-items-center" >
                <div className="d-flex align-items-center">
                    <div className="fw-lighter">Designed by Jeff Ordway</div>
                    <div className="fw-lighter mx-2">
                        <a href="https://github.com/jeffordway" target="_blank" rel="noreferrer">
                            <img
                                alt="My GitHub Page"
                                src={"/Assets/Icons/github.svg"}
                                width="30"
                                height="30"
                            />
                        </a>
                    </div>
                    <div className="fw-lighter mx-2">
                        <a href="https://github.com/jeffordway" target="_blank" rel="noreferrer">
                            <img
                                alt="My LinkedIn Page"
                                src={"/Assets/Icons/linkedin.svg"}
                                width="30"
                                height="30"
                            />
                        </a>
                    </div>
                </div>



                <div className="spacer align-self-stretch"></div>
                <div className="fw-lighter">Created using <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="link-light">ReactJS</a></div>
                <div className="spacer align-self-stretch"></div>
                <div className="fw-lighter"> Icons by <a href="https://iconscout.com/contributors/iconscout/icons" target="_blank" rel="noreferrer" className="link-light">IconScoutStore</a>
                </div>
                <div className="spacer align-self-stretch"></div>
                <div className="fw-lighter"> Photos by <a href="https://unsplash.com/" target="_blank" rel="noreferrer" className="link-light">Unsplash</a></div>
            </Container>
        </footer>
    )
}

export default Footer