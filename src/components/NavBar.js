
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LogoIcon } from "./LogoIcon";
import { ConnectionIcons } from "./ConnectionIcons";
import MainButton from "./mainButton";
import '../asserts/css/components/navbar.css'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const onUpdateActiveClass = (value) => {
        return activeLink === value ? 'active navbar-link' : 'navbar-link'
    }

    return (
        <Navbar collapseOnSelect expand="lg"  bg="light"  className={scrolled ? "scrolled" : ""}>
            <Container className="flex justify-content">
                <Navbar.Brand>
                    Dima<span style={{color:'Fuchsia'}}>Kassem</span>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className={onUpdateActiveClass('home')} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={onUpdateActiveClass('skills')} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={onUpdateActiveClass('projects')} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                   
                    <Nav className="flex alignCenter my-2" >
                        <ConnectionIcons />
                    </Nav>
                     
                    <Nav>
                       
                        <MainButton border={false } text={"Let's Connect "} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}