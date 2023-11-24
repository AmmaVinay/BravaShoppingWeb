// _app.js

import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Add Bootstrap JavaScript and Popper.js scripts */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-VL9fQN3gEFWDk7fnhvt15hldEXyv8n9KIICNCd4FXTc8XS3aXp8pTC58Y5fL02BQ" crossOrigin="anonymous" />

      {/* Render your main React component here */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
