import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const rootRender = createRoot(rootElement);

rootRender.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)