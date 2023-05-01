import { createRoot } from 'react-dom/client';
import App from './docs/App';
import './main.css';

const container = document.getElementById('root');
if (container) {
  const app = createRoot(container);
  app.render(<App />);
}
