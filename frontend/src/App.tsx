import {Routes, Route} from "react-router-dom";
import './App.css'

import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import Home from "./pages/Home.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";
import NotAuthorised from "./pages/Not-Authorised.tsx";
import TransferForm from "./pages/TransferForm.tsx";
import AccountTransactions from "./pages/AccountTransactions.tsx";
import CurrencyConverterForm from "./pages/CurrencyConverterForm.tsx";


function App() {

  return (
      <>
      <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/401-not-authorised" element={<NotAuthorised />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transfer-form" element={<TransferForm />} />
          <Route path="/account-transactions" element={<AccountTransactions />} />
          <Route path="/currency-converter" element={<CurrencyConverterForm/>} />
      </Routes>
  </>
          )
}

export default App
