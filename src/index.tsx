import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BoardPage } from './pages/BoardPage'
import { ListPage } from './pages/ListPage'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './fireBase'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/list/:id" element={<ListPage />} />
                <Route path="/board" element={<BoardPage />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: '1rem', textAlign: 'center' }}>
                            <h1>404 Not Found</h1>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    </Provider>
)
