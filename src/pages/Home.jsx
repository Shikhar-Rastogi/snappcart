import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "../shared/Slider";
import ProductList from "../pages/ProductList"; 

const Home = () => {
  return (
    <>
      <section>
        <Slider />
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <h2>Welcome to Our Store</h2>
            </Col>
          </Row>
        </Container>
      </section>

      
      <section className="py-5 bg-light">
        <Container>
          <h2 className="mb-4">Products</h2>
          <ProductList />
        </Container>
      </section>
    </>
  );
};

export default Home;
