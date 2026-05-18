const axios = require("axios");

const API_KEY = process.env.BANKR_API_KEY;

async function checkBalance() {
  try {
    const response = await axios.post(
      "https://api.bankr.bot/v1/agent/run",
      {
        message: "show my wallet balance"
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

checkBalance();
