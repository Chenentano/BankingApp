import {Routes, Route} from "react-router-dom";
import './App.css'

import LoginPage from "./pages/authPages/LoginPage.tsx";
import RegisterPage from "./pages/authPages/RegisterPage.tsx";
import Home from "./pages/userPages/Home.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";
import NotAuthorised from "./pages/authPages/Not-Authorised.tsx";
import TransferForm from "./pages/userPages/TransferForm.tsx";
import AccountTransactions from "./pages/userPages/AccountTransactions.tsx";
import CurrencyConverterForm from "./pages/userPages/CurrencyConverterForm.tsx";
import {useEffect} from "react";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";


function App() {

    useEffect(() => {
        Kommunicate.init("db447252d5a393cef5d729181537b4a7", {
            automaticChatOpenOnNavigation: true,
            popupWidget: true
        });
    }, []);

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
