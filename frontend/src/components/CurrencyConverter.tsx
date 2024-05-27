import axios from 'axios';

async function CurrencyConverter(from: string, to: string) {
    const response = await axios.get(`http://localhost:8080/api/bankAccount/convertCurrency?from=${from}&to=${to}`);
    return response.data;
}

export default CurrencyConverter;