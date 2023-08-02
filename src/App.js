import { useRef } from 'react';
import CodeInput from './CodeInput';
import Container from './components/Container';
import MainLayout from './components/MainLayout';
import Router from './router';
import { ProductProvider, useProductContext } from './context/ProductContext';

export default function App() {
  const refs = useRef([]);
  // const { products } = useProductContext();
  const handleChange = (e) => {
    if (
      e.target.value.length === 1 &&
      e.target.name < refs.current.length - 1
    ) {
      refs.current[+e.target.name + 1].focus();
    }
    if (e.target.value.length === 0 && e.target.name > 0) {
      refs.current[+e.target.name - 1].focus();
    }
  };
  // console.log(products);
  return (
    <ProductProvider>
      <div className='App'>
        <MainLayout>
          <Container>
            {/* {[...Array.from(Array(10).keys())].map((ref, index) => (
            <input
              key={index}
              ref={(ref) => (refs.current[index] = ref)}
              name={index}
              type='text'
              onChange={handleChange}
            />
          ))} */}
            <Router />
          </Container>
        </MainLayout>
      </div>
    </ProductProvider>
  );
}
