# redirectorator

a simple tool for redirecting or returning custom responses. designed with the goal of having a single, simple service that can gently handle decommissioned api and websites.

# usage

1. add source and desired handling to `src/config.js`
2. add a `route` for the domain to `wrangler.toml`
3. on commit to `main` the worker is deployed by github actions
4. update source cname record to `redirectorator.<account-name>.workers.dev`
