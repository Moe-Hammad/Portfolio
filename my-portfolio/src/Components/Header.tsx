import { Card, CardImg } from 'react-bootstrap';
import '/src/stylingComponents/header.css';

export default function Header() {
    return (
        <>
            <div className='text'>
                <Card>
                    <CardImg variant="top" src="https://picsum.photos/id/684/600/400" alt="Card image" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            This is an example of a card with an image at the top.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div></>
    )
}
