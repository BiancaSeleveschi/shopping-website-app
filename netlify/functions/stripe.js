const stripe = require("stripe")(process.env.VUE_APP_STRIPE_SECRET);
exports.handler = async (event) => {
  console.log("*****event******");
  console.log(JSON.parse(event.body));
  const peymentIntentBody = JSON.parse(event.body);
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };
  console.log("secret", process.env.VUE_APP_STRIPE_SECRET);
  const paymentIntent = await stripe.paymentIntents.create(peymentIntentBody);
  console.log("intent", paymentIntent);
  return {
    statusCode: 200, // http status code
    headers,
    body: JSON.stringify({
      paymentIntent,
    }),
  };
};
