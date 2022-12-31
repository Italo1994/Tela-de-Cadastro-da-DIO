import React from 'react';

import { Header } from './components/Header';
import { Form } from './components/Form';
import {Input} from './components/Input';

import { Container } from './styles/styles';

function App() {
  return (
    <Container>
      <Header />
      <Form /> 
    </Container>
  );
}

export default App;
