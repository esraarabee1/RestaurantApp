import React, { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";

const NavBar = ({ filterbySearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    filterbySearch(searchValue);
    setSearchValue("");
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <div className="brand-color">مطعم على نار هادية</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex" onSubmit={onSearch}>
            <FormControl
              type="text"
              placeholder="ابحث عن طبقك المفضل"
              className="mx-2"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <button className="btn-search">بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
