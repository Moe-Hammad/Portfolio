import { Card, CardBody, CardSubtitle, CardTitle } from "react-bootstrap";

import '/src/stylingComponents/workhistory.css';

export default function WorkHistory() {
    return (
        <>
            <h2>Work History</h2>
            <Card className="skm">
                <div className="skm-background">SKM</div>
                <CardTitle>Internship</CardTitle>
                <CardSubtitle className="skm-duration">02/24 - 05/24</CardSubtitle>
                <CardBody>
                    <div className="work-details">
                        <p><strong>Project:</strong> Fahrtenbuch</p>
                        <p><strong>Goal:</strong> Digitalization of a logbook for company drivers, including graphical representation of driving, rest, and working hours with timestamps, as well as designing the company website.</p>
                        <p><strong>Tech-Stack:</strong> MERN-Stack, Chart.js, MongoDB Atlas </p>
                        <p><strong>My Task:</strong> Developed a feature for user authentication and implemented a trip management system.</p>
                        <p><strong>Result:</strong> Successfully implemented and deployed the feature, improving user experience and functionality.</p>
                        <p><strong>Company Website:</strong> <a href="https://www.e-skm.de/">SKM GmbH</a></p>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}
