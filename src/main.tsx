import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {UserContextProvider} from "./context/userContext.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./features/home/Home.tsx";
import CryptoList from "./features/crypto/components/CryptoList.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<Home />} />
                </Route>
            </Routes>
            <Routes>
                <Route path="/crypto" element={<App />} >
                    <Route index element={<CryptoList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
  </StrictMode>,
)
