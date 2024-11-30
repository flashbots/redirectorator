export const config = {
  "defaultStatus": 410,
  "hosts": {
    "blocks.flashbots.net": {
      routes: [
        {
          path: "/",
          response: {
            api: {
              message: "This API has been decommissioned. You can visit datasets.flashbots.net for historical data and join us at collective.flashbots.net"
            },
            web: {
              message: "This API has been decommissioned. You can visit <a href='https://datasets.flashbots.net'>datasets.flashbots.net</a> for historical data. Join us at the Flashbots forum.",
              redirectUrl: "https://collective.flashbots.net/"
            },
          },
        },
      ]
    },
    "test": {
      routes: [
        {
          path: "/",
          response: {
            api: {
              message: "api message",
              status: 410,
            },
            web: {
              message: "Web message.",
              redirectDelay: 5,
              redirectUrl: "http://localhost:8787/",
              status: 410,
            },
          },
        },
      ]
    }
  }
};
