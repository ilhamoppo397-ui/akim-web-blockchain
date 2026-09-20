import { d as defineMiddleware, s as sequence } from './chunks/render-context_B44cWz1R.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Cltbpj38.mjs';
import 'cookie';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const response = await next();
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  const origin = context.request.headers.get("origin");
  const allowedOrigins = [
    "https://akim.web.id",
    "https://certificate.akim.web.id"
  ];
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  } else {
    response.headers.delete("Access-Control-Allow-Origin");
  }
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
