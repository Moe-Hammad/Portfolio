import '/src/stylingComponents/SideBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbarComponent() {
    return (
        <>
            <div className='top'></div>
            <div className="sidebar">
                <ul>
                    <li>SUMMARY</li>
                    <li>Introduction</li>
                    <li>Education</li>
                    <li>WORK HISTORY</li>
                    <li>Summary</li>
                    <li>SKILLS</li>
                    <li>PROJECTS</li>
                    <li>TIMELINE</li>
                </ul>
            </div>
        </>
    );
}

