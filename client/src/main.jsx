import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/GlobalStyle';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <GlobalStyle />
      <GlobalProvider>
        <App />
      </GlobalProvider>
  </React.StrictMode>
);



