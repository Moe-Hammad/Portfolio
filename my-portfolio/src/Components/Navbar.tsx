import '/src/stylingComponents/SideBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbarComponent() {
    return (
        <div className="sidebar">
            <ul>
                <li>SUMMARY</li>
                <li>OVERVIEW</li>
                <li>WORK HISTORY</li>
                <li>EDUCATION</li>
                <li>SKILLS</li>
                <li>PERSONAL INFORMATION</li>
                <li>PROJECTS</li>
                <li>TIMELINE</li>
            </ul>
        </div>
    );
}

