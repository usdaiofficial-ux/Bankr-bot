const API_KEY = process.env.BANKR_API_KEY;

async function checkBalance() {
  try {
    const res = await fetch("https://api.bankr.bot/agent/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY
      },
      body: JSON.stringify({
        prompt: "show all my assets and balances"
      })
    });

    const data = await res.json();

    console.log("JOB:", data);

  } catch (err) {
    console.error(err);
  }
}

setInterval(checkBalance, 60000);
