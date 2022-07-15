import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import 'swiper/dist/css/swiper.min.css'
import 'weui'
import 'react-weui/build/dist/react-weui.css'
import { Provider } from 'react-redux'  
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
)
