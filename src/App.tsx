import './App.css'
import Layout from "./layout/Layout.tsx";
import {Navigate} from "react-router-dom";

function App() {
  if (localStorage.getItem("token") === null || !localStorage.getItem("token")) return <Navigate to="/auth/login" />

  return (
      <Layout />
  )
}

export default App
