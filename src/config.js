export const config = {
  routes: [
    {
      host: "blocks.flashbots.net",
      path: "/v1",
      type: "api",
      message: "This API has been decommissioned. You can visit datasets.flashbots.net for historical data and join us at collective.flashbots.net",
      status: 410
    },
    {
      host: "blocks.flashbots.net",
      path: "/",
      type: "web",
      message: "<p>This API has been decommissioned. You can visit <a href='https://datasets.flashbots.net'>datasets.flashbots.net</a> for historical data. </p><p>Join us on the Flashbots forum 👉 ",
      redirectUrl: "https://collective.flashbots.net/",
      status: 410
    },
  ]
};
