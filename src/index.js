import { About } from './components/About';
import { App } from './components/App';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Products } from './components/Products';
import './scss/index.scss';

const app = new App('#app', {
  components: [Header, About, Products, Footer],
});

app.render();
