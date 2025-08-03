import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {UserContextProvider} from "./context/userContext.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import CryptoList from "./features/crypto/components/CryptoList.tsx";
import Landing from "./pages/Landing.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./features/login/Login.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<Landing />} />
                </Route>
                <Route path="/home" element={<App />} >
                    <Route index element={<Home />} />
                </Route>
                <Route path="/crypto" element={<App />} >
                    <Route index element={<CryptoList />} />
                </Route>
                <Route path="/auth/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
  </StrictMode>
)
