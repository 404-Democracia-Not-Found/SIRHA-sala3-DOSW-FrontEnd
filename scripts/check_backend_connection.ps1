<#
Check backend connectivity and CORS preflight from developer machine.

Usage (PowerShell):
  ./scripts/check_backend_connection.ps1

This will:
 - HEAD the backend root URL
 - Send an OPTIONS preflight to the login endpoint (percent-encoded)

Edit the $backendUrl variable if needed.
#>

$backendUrl = 'https://sirha-sala3-dosw-backend-4.onrender.com'
$frontendOrigin = 'https://sirha-sala3-dosw-frontend.vercel.app'

Write-Host "Testing backend root: $backendUrl"
curl -I "$backendUrl" --max-time 15

Write-Host "`nTesting CORS preflight to /Autenticación/login (percent-encoded) with Origin $frontendOrigin"
$encodedPath = '/Autenticaci%C3%B3n/login'
curl -i -X OPTIONS "$($backendUrl)$encodedPath" -H "Origin: $frontendOrigin" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type, Authorization" --max-time 15

Write-Host "`nIf you see 200 and Access-Control-Allow-Origin header, CORS is good. If you see 403 'Invalid CORS request', adjust backend CORS as described in DEPLOYMENT_NOTES.md"
