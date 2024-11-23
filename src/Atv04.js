import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from './componentes2/Toolbar';
import Gallery from './componentes2/Gallery';
import Counter from './componentes2/Counter';
import Form from './componentes2/Form';
import Form2 from './componentes2/Form2';
import Form3 from './componentes2/Form3';
import List2 from './componentes2/List2';
import ShapeEditor from './componentes2/ShapeEditor';
import CounterList from './componentes2/CounterList';
import List3 from './componentes2/List3';
import List4 from './componentes2/List4';
import BucketList from './componentes2/BucketList';
import './Atv04.css';

function Atv04() {
  return (
    <div className="container">
      <h2>Atividade 04</h2>
      <Toolbar
        onPlayMovie={() => alert('Playing movie!')}
        onUploadImage={() => alert('Uploading image!')}
      />
      <Gallery />
      <Counter />
      <Form />
      <Form2 />
      <Form3 />
      <List2 />
      <ShapeEditor />
      <CounterList />
      <List3 />
      <List4 />
      <BucketList />
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Atv04;