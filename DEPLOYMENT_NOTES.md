# Deployment & Connectivity Notes

This document contains the exact steps to ensure the frontend (Vercel) can connect to the backend (Render).

1) Vercel environment variable

- In the Vercel Dashboard for the project, go to Settings → Environment Variables.
- Add the following environment variable **for Production** (and Preview/Development if you want builds there too):
  - Key: `REACT_APP_API_URL`
  - Value: `https://sirha-sala3-dosw-backend-4.onrender.com`
- If a variable with the same name exists and is referencing a Secret that does not exist, delete it and recreate it as above.

2) Build-time note

- Create React App reads `REACT_APP_*` variables at build time. After adding the variable in Vercel, trigger a new deployment (push to `main` or trigger redeploy in the Vercel UI).

3) Backend CORS (Spring Boot example)

- If preflight OPTIONS requests return `403 Invalid CORS request`, update the backend CORS config to allow the Vercel origin and OPTIONS requests. Example snippets:

In `WebConfig.java` (MVC CORS):

```java
@Override
public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/Autenticación/**")
            .allowedOrigins("https://sirha-sala3-dosw-frontend.vercel.app", "http://localhost:3000")
            .allowedMethods("GET","POST","PUT","DELETE","OPTIONS","PATCH")
            .allowedHeaders("*")
            .allowCredentials(true)
            .maxAge(3600);

    registry.addMapping("/api/**")
            .allowedOrigins("https://sirha-sala3-dosw-frontend.vercel.app","http://localhost:3000")
            .allowedMethods("*")
            .allowedHeaders("*")
            .allowCredentials(true);
}
```

In Security configuration (permit OPTIONS and auth-free endpoints):

```java
http
  .csrf().disable()
  .authorizeHttpRequests()
    .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
    .requestMatchers("/Autenticación/login", "/Autenticación/register", "/Autenticación/refresh").permitAll()
    .anyRequest().authenticated();
```

4) Quick checks (local)

- Run the included PowerShell script to verify root and preflight:

```powershell
./scripts/check_backend_connection.ps1
```

5) Fallback strategy

- The frontend includes fallback endpoints without accents in case some proxies/gateways mishandle accented paths. The list is in `src/config/apiConfig.js` under `AUTH_ALIASES`.

6) If you need help

- I can:
  - Run the check script from CI or my terminal after you apply backend changes.
  - Prepare a PR for the backend with the CORS/security changes.
  - Guide you step-by-step in the Vercel UI to add the env var.
