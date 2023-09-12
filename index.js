const axios = require('axios');

async function doRequest(endpoint) {
  if (!window || window === undefined) {
    throw new Error('This function is only available in the browser');
  }

  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = doRequest;