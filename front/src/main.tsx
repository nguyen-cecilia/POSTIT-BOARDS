import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {Provider} from 'react-redux';
import Store from '@/store/store';
import {BrowserRouter, Route, Routes} from 'react-router';
import Boards from "@/pages/Boards.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={Store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route index element={<Boards/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)
