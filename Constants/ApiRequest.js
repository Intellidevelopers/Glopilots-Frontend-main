import { API_URL, OTHER_CONSTANT } from '../constants';


async function makeRequest(requestType, apiUrl, requestData) {
    try {
      const response = await fetch(apiUrl, {
        method: requestType,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      const data = await response.json();
      console.log('Response:', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Request failed');
    }
  }
  
  export default makeRequest;
  