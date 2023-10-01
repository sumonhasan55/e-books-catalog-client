import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/index.tsx'
import { store } from './redux/store.tsx'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')!).render(


  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>,

  </Provider>,


)

