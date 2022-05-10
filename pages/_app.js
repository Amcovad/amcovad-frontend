import 'rsuite/dist/rsuite.min.css';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../app/index';
// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
