# Lessons

## Buttondown embed + CORS (BRY-12)
Buttondown's embed-subscribe endpoint doesn't set `Access-Control-Allow-Origin` for arbitrary domains. Use `mode: 'no-cors'` — the response is opaque so treat a non-throw as success; only network failures land in the `catch`.
