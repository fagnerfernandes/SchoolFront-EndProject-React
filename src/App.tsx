import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';

import './assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/scss/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';

import Routes from './routes';
import history from './history';

import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router history={history}>
        <ToastContainer autoClose={4000} />
        <Routes />
      </Router>
    </AuthProvider>
  );
};

export default App;
