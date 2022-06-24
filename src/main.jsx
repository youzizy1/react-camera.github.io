import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import 'swiper/dist/css/swiper.min.css'
import 'weui'
import 'react-weui/build/dist/react-weui.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
