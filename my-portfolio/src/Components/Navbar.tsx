import '/src/stylingComponents/SideBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';
export default function NavbarComponent() {
    return (
        <>

            <div className="sidebar">
                <ul>
                    <li><Link to="profile-container" smooth={false} >Introduction</Link></li>
                    <li><Link to="education" smooth={false} >Education</Link></li>
                    <li><Link to="skills" smooth={false} >SKILLS</Link></li>
                    <li><Link to="work-history" smooth={false} >WORK HISTORY</Link></li>
                    <li><Link to="projects" smooth={false} >PROJECTS</Link></li>
                    <li><Link to="timeline" smooth={false} >TIMELINE</Link></li>
                    <li><Link to="summary" smooth={false} duration={1}>SUMMARY</Link></li>
                    <li><Link to="goal" smooth={false} >Goal</Link></li>
                </ul>
            </div>
        </>
    );
}
