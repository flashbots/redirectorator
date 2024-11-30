import { config } from './config';
import { redirectTemplate } from './template';

export default {
  async fetch(request, env) {
    const debug = env.DEBUG;
    const defaultStatus = env.DEFAULT_STATUS;
    const defaultRedirectDelay = env.DEFAULT_REDIRECT_DELAY;

    const url = new URL(request.url);
    const host = url.hostname;
    const path = url.pathname;
    const conf = config.hosts[host];

    // Determine if it's a browser request
    const acceptHeader = request.headers.get('Accept') || '';
    const isBrowserRequest = acceptHeader.includes('text/html');

    // Find matching route
    const route = conf.routes
      .sort((a, b) => b.path.length - a.path.length)
      .find(r => path.startsWith(r.path));

    if (debug === 'true') {
      console.log(JSON.stringify({
        request: {
          host,
          path,
          isBrowserRequest,
          config: conf
        }
      }));
    }

    // Handle 404
    if (!route) {
      return new Response(JSON.stringify({
        status: 404,
        message: 'Unknown service'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Handle browser requests
    if (isBrowserRequest && route.response.web) {
      const { message, redirectUrl, redirectDelay = defaultRedirectDelay, status = defaultStatus } = route.response.web;
      return new Response(redirectTemplate(message, redirectUrl, redirectDelay), {
        status,
        headers: { 'Content-Type': 'text/html' }
      });
    }

    // Handle API requests
    if (route.response.api) {
      const { message, status = defaultStatus } = route.response.api;
      return new Response(JSON.stringify({
        status,
        message
      }), {
        status,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
};
