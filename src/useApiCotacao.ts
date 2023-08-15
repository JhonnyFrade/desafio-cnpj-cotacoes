import axios from "axios";

export async function useApi() {

    try {
        const response: any = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL');

        return response.data;
      } catch (error) {
        throw error;
      }
}