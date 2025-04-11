import { Card, CardImg } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCity } from '@fortawesome/free-solid-svg-icons';
import '/src/stylingComponents/header.css';


export default function Header() {
    return (
        <>
            <div className='text'>
                <Card>

                    <CardImg variant="top" src="https://picsum.photos/id/684/600/400" alt="Card image" />
                    <Card.Body>
                        <div className="profile-container">
                            <img
                                src="https://picsum.photos/200" /* Beispielbild */
                                alt="Profile"
                                className="rounded-image"
                            />
                        </div>
                        <Card.Title className="card-title">Mohammad Hammad</Card.Title>
                        <Card.Text className="inline-text">
                            <span><FontAwesomeIcon icon={faCity} /> Berlin</span>
                            <span><FontAwesomeIcon icon={faGraduationCap} /> Graduated from Berliner Hochschule für Technik Berlin</span>
                        </Card.Text>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div></>
    )
}
