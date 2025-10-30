#!/bin/bash
# Script de validación - Frontend conectando con Backend

echo "🔍 Validando conexión Frontend ↔ Backend"
echo "=========================================="

# Detectar el OS
if [[ "$OSTYPE" == "win32" ]] || [[ "$OSTYPE" == "msys" ]]; then
  # Windows
  BACKEND_URL="https://sirha-sala3-dosw-backend-4.onrender.com"
  FRONTEND_URL="http://localhost:3000"
else
  # Linux/Mac
  BACKEND_URL="https://sirha-sala3-dosw-backend-4.onrender.com"
  FRONTEND_URL="http://localhost:3000"
fi

echo ""
echo "📊 1. Verificando Backend en Render..."
if curl -s -o /dev/null -w "%{http_code}" "$BACKEND_URL/swagger-ui/index.html" | grep -q "200"; then
  echo "✅ Backend accesible"
else
  echo "❌ Backend NO accesible"
  exit 1
fi

echo ""
echo "🔐 2. Probando endpoint de login..."
LOGIN_RESPONSE=$(curl -s -X POST "$BACKEND_URL/Autenticaci%C3%B3n/login" \
  -H "Content-Type: application/json" \
  -H "Origin: https://vercel.app" \
  -d '{"email":"admin@example.com","password":"AdminPassword123!"}')

if echo "$LOGIN_RESPONSE" | grep -q "token"; then
  echo "✅ Login exitoso"
  echo "Response: $LOGIN_RESPONSE"
elif echo "$LOGIN_RESPONSE" | grep -q "403\|Forbidden"; then
  echo "❌ Error 403 - Verificar CORS en backend"
  echo "Response: $LOGIN_RESPONSE"
elif echo "$LOGIN_RESPONSE" | grep -q "401\|Unauthorized"; then
  echo "⚠️  Error 401 - Credenciales inválidas o usuario no existe"
  echo "Response: $LOGIN_RESPONSE"
else
  echo "❌ Error desconocido"
  echo "Response: $LOGIN_RESPONSE"
fi

echo ""
echo "🌐 3. Verificando conexión desde Frontend..."
if curl -s -o /dev/null -w "%{http_code}" "$FRONTEND_URL" | grep -q "200"; then
  echo "✅ Frontend accesible en $FRONTEND_URL"
else
  echo "⚠️  Frontend no está corriendo. Ejecuta: npm start"
fi

echo ""
echo "=========================================="
echo "✅ Validación completada"
