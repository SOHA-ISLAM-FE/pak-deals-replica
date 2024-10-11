import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function SocialLinks() {
  return (
    <>
      <Link to="#" className="text-gray-600">
        <Facebook />
      </Link>
      <Link to="#" className="text-gray-600">
        <Twitter />
      </Link>
      <Link to="#" className="text-gray-600">
        <Instagram />
      </Link>
      <Link to="#" className="text-gray-600">
        <Linkedin />
      </Link>
    </>
  );
}

export default SocialLinks;