import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../public/logo/logoNew.jpg";

const Header = () => {
  const router = useRouter();
  const menubar = [
    { title: "Home", path: "/" },
    { title: "Accomodation", path: "/AccomodationPage" },
    { title: "Program", path: "/ProgramPage" },
    { title: "Speakers", path: "/SpeakerPage" },
  ];

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="d-block d-sm-flex text-center">
        <Navbar.Brand href="/" className="d-block d-sm-inline">
          <Image src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-xl-auto">
            {menubar.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`cursor-pointer ${
                    router.pathname === item.path ? "menu active__hov" : "menu"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}

            <NavDropdown
              className={`${
                router.pathname === "ExhibitorsPage" &&
                router.pathname === "PostConferencePage" &&
                router.pathname === "SupportingOrganizations" &&
                router.pathname === "GalleryPage"
                  ? "menu active__hov"
                  : "menu"
              }`}
              title="Exhibitors & More"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="menu1" href="ExhibitorsPage">
                Exhibition
              </NavDropdown.Item>
              <NavDropdown.Item className="menu1" href="PostConferencePage">
                Post Conference Workshop
              </NavDropdown.Item>
              <NavDropdown.Item
                className="menu1"
                href="SupportingOrganizations"
              >
                Supporting Organisations
              </NavDropdown.Item>

              <NavDropdown.Item className="menu1" href="GalleryPage">
                Gallery
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link href="RegistrationPage">
              <div className="primary__btn register__btn">Register Now</div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
