import React from 'react';
import { Navbar } from 'react-bootstrap';
import Link from 'next/link';

const BrandFunc = p => (
  <Link href="/">
    <a>
      <Navbar.Brand>
        <img src={p.image} alt="brand" />
      </Navbar.Brand>
    </a>
  </Link>
);

export default BrandFunc;
