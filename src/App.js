import './assets/css/custom.css'
import './assets/js/custom.js'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { RouterConfig } from './core';
import routers from './routers'
import store from './redux'
import TranslateProvider from './core/useTranslate';
import vi from './translate/vi.json'
let translate = {
  vn: vi,
}
function App() {
  return (
    <TranslateProvider translate={translate}>
      <Provider store={store}>
        <BrowserRouter>
          {RouterConfig(routers)}
        </BrowserRouter>
      </Provider>
    </TranslateProvider>
  );
}
export default App;
