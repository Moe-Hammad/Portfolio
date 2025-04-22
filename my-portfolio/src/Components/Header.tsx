import { Button, ButtonGroup, Card, CardImg } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGraduationCap,
    faCity,
    faDotCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faXing } from "@fortawesome/free-brands-svg-icons";
import "/src/stylingComponents/header.css";

export default function Header() {
    return (
        <>
            <div className="header-container">
                <Card>
                    <CardImg
                        variant="top"
                        src="./src/assets/Gr.svg"
                        alt="Card image"
                    />
                    <Card.Body>
                        <div className="profile-container">
                            <img
                                src="./src/assets/mo_pic.jpg" /* Beispielbild */
                                alt="Profile"
                                className="rounded-image"
                            />
                        </div>
                        <Card.Title className="card-title">Mohammad Hammad</Card.Title>
                        <Card.Text className="inline-text">
                            <span>
                                <FontAwesomeIcon icon={faCity} /> Berlin
                            </span>
                            {/* <span><FontAwesomeIcon icon={faGraduationCap} /> Graduated at <a href='https://www.bht-berlin.de/en/b-mi'>Berliner Hochschule für Technik Berlin</a></span> */}
                            <div className="status">
                                <span>
                                    <FontAwesomeIcon icon={faDotCircle} />

                                </span>
                                <p>Looking for job as Software Engineer</p>
                            </div>
                            <div className="contact">
                                <ButtonGroup>
                                    <Button variant="primary" href="https://www.linkedin.com/in/mohammad-hammad-5b900b352/">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </Button>
                                    <Button variant="success" href="https://www.xing.com/profile/Mohammad_Hammad068648/web_profiles">
                                        <FontAwesomeIcon icon={faXing} />
                                    </Button>
                                    <Button variant="dark" href="https://github.com/Moe-Hammad">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
