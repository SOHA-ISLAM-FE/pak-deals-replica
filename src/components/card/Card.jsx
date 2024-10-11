import React from 'react'
import { CardBody, CardImg, CardText } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Card({ imageSrc, altText, description, link, title, date, subtitle }) {
  return (
    <CardBody>
      <CardImg src={imageSrc} alt={altText} className='rounded' />
      <CardText>{description}</CardText>
      <CardText className='font-medium'>{title}</CardText>
      <CardText className='text-gray-500'>{subtitle}</CardText>
      <CardText className='text-gray-500'>{date}</CardText>
      {link && <Link to={link} className="btn btn-primary">Read More</Link>}
    </CardBody>
  );
}

export default Card