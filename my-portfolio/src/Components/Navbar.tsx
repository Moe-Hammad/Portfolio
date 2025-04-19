import '/src/stylingComponents/SideBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';
export default function NavbarComponent() {
    return (
        <>
            <div className='top'></div>
            <div className="sidebar">
                <ul>
                    <li><Link to="summary" smooth={true} duration={1}>SUMMARY</Link></li>
                    <li><Link to="introduction" smooth={true} duration={500}>Introduction</Link></li>
                    <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
                    <li><Link to="work-history" smooth={true} duration={500}>WORK HISTORY</Link></li>
                    <li><Link to="skills" smooth={true} duration={500}>SKILLS</Link></li>
                    <li><Link to="projects" smooth={true} duration={500}>PROJECTS</Link></li>
                    <li><Link to="timeline" smooth={true} duration={500}>TIMELINE</Link></li>
                </ul>
            </div>
        </>
    );
}
