# Security

Follow these security guidelines when rendering files uploaded by users.

## Security Practices

### 1. CORS Headers
Ensure that files served from external domains contain CORS headers allowing your site's origin:
```http
Access-Control-Allow-Origin: https://your-site.com
```
Without this, resource fetching will fail in browser environments.

### 2. Content Security Policy (CSP)
If your application uses strict Content Security Policies, allow connection and frames to the script source:
```http
Content-Security-Policy: default-src 'self'; frame-src 'self' blob:;
```

### 3. File Sanitization
Never pass raw user file uploads directly to the PDF viewer component without validating their MIME types. Ensure files are parsed as `application/pdf` before passing them as blobs.

---

### Navigation
* Prev: [SSR Support](ssr.md)
* Next: [Debugging](debugging.md)
