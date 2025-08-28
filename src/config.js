var defaultRedirectConfig = {
  routes: [
    {
      path: "/",
      response: {
        api: {
          message: "This website has been decommissioned. Please visit writings.flashbots.net and join us at collective.flashbots.net"
        },
        web: {
          message: "This website has been decommissioned. Please join us at the <a href='https://collective.flashbots.net'>Flashbots forum</a> and visit <a href='https://writings.flashbots.net'>writings.flashbots.net</a>.",
          redirectUrl: "https://writings.flashbots.net/"
        }
      }
    }
  ]
};

var config = {
  "defaultStatus": 410,
  "hosts": {
    "blocks.flashbots.net": defaultRedirectConfig,
    "explore.flashbots.net": defaultRedirectConfig,
    "suave.flashbots.net": defaultRedirectConfig,
    "suave-alpha.flashbots.net": defaultRedirectConfig,
    "transparency.flashbots.net": defaultRedirectConfig,
    "datasets.flashbots.net": defaultRedirectConfig,
    "test": {
      routes: [
        {
          path: "/",
          response: {
            api: {
              message: "api message",
              status: 410
            },
            web: {
              message: "Web message.",
              redirectDelay: 5,
              redirectUrl: "http://localhost:8787/",
              status: 410
            }
          }
        }
      ]
    }
  }
};
