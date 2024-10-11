import React, { useState } from "react";
import CardComponent from "../card/Card";
import { Col, Container, Row } from "react-bootstrap";
import { blogs } from "../../utils/product/ProductData.jsx";
import TabsFilter from "../tabs/TabsFilter.jsx";

function Blogs() {
  const categories = ["See All"];
  const [filteredBlogs, setFilteredBlogs] = useState(blogs.slice(0, 3));
  
  const handleCategoryChange = (category) => {
    if (category === "See All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.slice(0, 3));
    }
  };

  return (
    <section className="my-5">
      <div className="flex justify-between items-center mx-2">
        <h2 className="mb-0 mx-5">Blog Posts</h2>
        <TabsFilter
          categories={categories}
          onSelectCategory={handleCategoryChange}
        />
      </div>
      <Container>
        <Row>
          {filteredBlogs.map((item, index) => (
            <Col lg={4} md={4} sm={12} key={index} className="mt-5">
              <CardComponent
                imageSrc={item.imageSrc}
                altText={item.altText}
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Blogs;