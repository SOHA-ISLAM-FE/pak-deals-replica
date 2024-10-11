import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardComponent from "../../../components/card/Card";
import { majorSavings } from "../../../utils/product/ProductData";

function MajorSavings() {
  return (
    <section>
      <Container>
        <Card className="px-5 py-4 mt-5">
          <h5>Major Savings</h5>
          <Row>
            {majorSavings.map((item, index) => (
              <Col lg={4} md={4} sm={12} key={index}>
                <CardComponent
                  imageSrc={item.imageSrc}
                  altText={item.altText}
                  description={item.description}
                />
              </Col>
            ))}
          </Row>
        </Card>
      </Container>
    </section>
  );
}

export default MajorSavings;