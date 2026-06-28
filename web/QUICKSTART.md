# ⚡ GUÍA RÁPIDA - NexorDT Landing Page Premium

## 🎯 En 5 Minutos

### 1️⃣ Instalación
```bash
cd web
npm install
```

### 2️⃣ Desarrollo Local
```bash
npm run dev
# Abre: http://localhost:3000
```

### 3️⃣ Build para Producción
```bash
npm run build
npm start
```

### 4️⃣ Deploy en Vercel (Recomendado)
```bash
# Opción A: Dashboard Vercel
# 1. Push a GitHub: git push origin main
# 2. Ve a vercel.com → Importa repositorio
# 3. Agrega variables de entorno
# 4. Deploy automático ✅

# Opción B: CLI
npm install -g vercel
vercel login
vercel --prod
```

## 📋 Archivos Importantes

| Archivo | Propósito |
|---------|-----------|
| `app/page.tsx` | Página principal |
| `lib/data.ts` | Datos de planes, testimonios, FAQ |
| `.env.example` | Variables de entorno (copiar a `.env.local`) |
| `app/components/` | Componentes reutilizables |
| `README.md` | Documentación completa |

## 🔧 Configuración Mínima

### 1. Copiar `.env.local`
```bash
cp .env.example .env.local
```

### 2. Actualizar en `.env.local`
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=573002831004  # Tu número
```

### 3. (Opcional) Firebase Premium
- Descomenta código en `lib/firebase.ts`
- Agrega credenciales en `.env.local`
- Crea colección `leads` en Firebase

## 🎨 Personalización Rápida

### Cambiar Números de Contacto
**Archivo:** `lib/data.ts`
```typescript
// Busca: whatsappMessage
// Actualiza el número en WhatsAppButton.tsx
```

### Cambiar Contenido
**Archivo:** `lib/data.ts`
```typescript
export const pricingPlans = [...]  // Planes
export const faqs = [...]           // Preguntas
export const testimonials = [...]   // Testimonios
export const portfolioItems = [...]  // Proyectos
```

### Cambiar Colores
**Archivo:** `tailwind.config.ts`
```typescript
colors: {
  primary: '#1A1A2E',      // Azul oscuro
  secondary: '#16213E',    // Más oscuro
  accent: '#00D4FF',       // Cian
}
```

## ✅ Checklist Deploy

- [ ] `npm run build` ejecuta sin errores
- [ ] `.env.local` configurado
- [ ] `npm run dev` funciona en localhost
- [ ] Contenido personalizado
- [ ] Teléfono WhatsApp correcto
- [ ] Push a GitHub: `git push origin main`
- [ ] Vercel importado y variables configuradas
- [ ] Deploy exitoso en Vercel
- [ ] Test en: `https://tu-dominio.vercel.app`
- [ ] Dominio personalizado configurado (opcional)

## 📱 Testing Rápido

```bash
# Terminal 1: Servidor dev
npm run dev

# Terminal 2: Accede y prueba
curl http://localhost:3000

# Pruebas:
- Hero visible
- Precios clickeables
- WhatsApp button funciona
- Responsive en mobile
```

## 🆘 Errores Comunes

| Error | Solución |
|-------|----------|
| `Cannot find firebase` | `npm install firebase` |
| Puerto 3000 en uso | `kill -9 $(lsof -t -i :3000)` |
| Build falla | `rm -rf .next && npm run build` |
| Vercel: vars no definidas | Agregar en Vercel Dashboard |

## 📞 Soporte Incluido

✅ 180 días (Plan Premium)  
✅ WhatsApp + Email  
✅ Cambios menores de contenido  
✅ Actualizaciones de seguridad  

## 🚀 Próximo Paso

**Conectar dominio personalizado (Vercel):**
1. Compra dominio (NameCheap, GoDaddy)
2. En Vercel: Settings → Domains
3. Agrega tu dominio
4. Sigue instrucciones DNS
5. ¡Listo! 🎉

---

**Versionado:** 1.0.0  
**Estado:** Production Ready ✅  
**Última actualización:** 2024
