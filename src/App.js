import Container from './components/Container';
import MainLayout from './components/MainLayout';
import Router from './router';
import { ProductProvider } from './context/ProductContext';
import { useThemeContext } from './context/ThemeContext';
import { THEMES } from './constants';

export default function App() {
  const { theme } = useThemeContext();
  return (
    <ProductProvider>
      <div className={theme == THEMES.LIGHT ? 'light' : 'dark'}>
        <MainLayout>
          <Container>
            <Router />
          </Container>
        </MainLayout>
      </div>
    </ProductProvider>
  );
}
