import React from 'react';

import { Container } from './styles';

export default function Card( {data} ) {
  return (
   <Container>
     <header>
      {data.labels.map(label => <label key={label} color={label} />)}
     </header>
     <p>{data.content}</p>
     {data.user && <img src={data.user} alt="Avatar"/> }
   </Container>
  );
}