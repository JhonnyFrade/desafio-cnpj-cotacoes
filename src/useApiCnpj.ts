import axios from "axios";

export async function  useApi(getCNPJ: string) {


    try {
        const response: any = await axios.get(`https://api.cnpja.com/office/${getCNPJ}`,  {
          headers: {
            Authorization:  `37b3eb33-6381-4a24-81be-5cf5f1201623-49efd359-ae4a-4fc2-8b39-0703badfedbf`,
          },
        });

        return response.data;
      } catch (error) {
        throw error;
      }
}