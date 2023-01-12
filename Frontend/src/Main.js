import React from 'react';
import Description2 from './Description2';
import List from './List';
import Nav2 from './Nav2';
import Property from './Property';
import data from './Data';
import Mylist from './Mylist';
import Footer from './Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Main() {

  const navigate = useNavigate();

  const [property,setProperty] = useState(data);

  const favorits = property.filter(item => item.favorit);

  const [mylist,setMylist] = useState(favorits);

  

  return (
    <div className='h-screen'>
          <Nav2/>
          <Description2 />
          <Property/>
          <List property={property} mylist={mylist} setMylist={setMylist}/>
          <Mylist property={property} mylist={mylist} setMylist={setMylist}/>
          <Footer />
    </div>
  )
}

export default Main