# 🚀 NexorDT Landing Page - Premium Edition

Landing page de alto impacto con escalera de valor 3 niveles: **Plan Base ($200k COP)**, **Plan Intermedio ($400k COP)** y **Plan Premium ($600k COP)**.

## 📋 Especificaciones Técnicas

### Stack Tecnológico
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3
- **Lenguaje:** TypeScript
- **Animaciones:** Framer Motion + GSAP 3
- **Base de Datos (Premium):** Firebase Realtime + Firestore
- **Hosting:** Vercel
- **Icons:** Lucide React

### Características Incluidas

#### Plan Base ($200k COP)
- ✅ One-Page estática
- ✅ HTML5 + CSS Vanilla
- ✅ Logo, botón WhatsApp, email, ubicación
- ✅ Minimalista y profesional
- ✅ Entrega: 2-3 días

#### Plan Intermedio ($400k COP)
- ✅ Landing page completa con secciones
- ✅ Next.js + Tailwind CSS
- ✅ SEO local avanzado
- ✅ WhatsApp flotante personalizado
- ✅ Mobile-first responsive
- ✅ Secciones: Hero, Servicios, Portafolio, CTA
- ✅ Entrega: 5-7 días

#### Plan Premium ($600k COP)
- ✅ Stack completo: Vercel + Firebase
- ✅ Motor de partículas GSAP
- ✅ Formulario moderno con validación
- ✅ Captura de leads en BD Realtime
- ✅ Secciones adicionales: Testimonios, FAQ, Comparativa
- ✅ Banner "Llave en Mano 48h"
- ✅ Backend CRM-ready para automatizaciones
- ✅ Analytics integrado
- ✅ 180 días de soporte prioritario
- ✅ **Entrega garantizada: 48 horas**

## 🗂️ Estructura del Proyecto

```
web/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx          # Menú de navegación
│   │   ├── Hero.tsx                # Sección hero
│   │   ├── PricingCard.tsx          # Card de pricing reutilizable
│   │   ├── PricingSection.tsx       # Sección de precios (tabla + cards)
│   │   ├── ParticleBackground.tsx   # Motor de partículas GSAP
│   │   ├── WhatsAppButton.tsx       # Botón flotante WhatsApp
│   │   ├── PortfolioCard.tsx        # Card del portafolio
│   │   ├── PortfolioSection.tsx     # Galería de proyectos
│   │   ├── TestimonialCard.tsx      # Card de testimonios
│   │   ├── TestimonialsSection.tsx  # Sección de testimonios
│   │   ├── FAQItem.tsx              # Item acordeón FAQ
│   │   ├── FAQSection.tsx           # Sección de preguntas frecuentes
│   │   ├── KeyInHandSection.tsx     # Sección "Llave en Mano 48h"
│   │   ├── CTASection.tsx           # Call-to-action final
│   │   └── Footer.tsx               # Pie de página
│   ├── layout.tsx                   # Layout principal
│   ├── page.tsx                     # Página principal
│   └── globals.css                  # Estilos globales
├── lib/
│   ├── types.ts                     # Tipos TypeScript
│   ├── data.ts                      # Datos estáticos (planes, testimonios, etc)
│   └── firebase.ts                  # Configuración Firebase (comentada)
├── public/                          # Archivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
```

## 🎨 Paleta de Colores

- **Primario:** `#1A1A2E` (Azul oscuro profesional)
- **Secundario:** `#16213E` (Azul más oscuro)
- **Accent:** `#00D4FF` (Cian vibrante - CTAs)
- **Neutral Light:** `#EEEEEE`
- **Neutral Dark:** `#333333`

## 🚀 Instalación y Desarrollo Local

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Git

### Pasos de instalación

```bash
# 1. Entrar al directorio del proyecto
cd /workspaces/Nexordt/web

# 2. Instalar dependencias
npm install
# o
yarn install

# 3. Crear archivo .env.local
cp .env.example .env.local

# 4. Ejecutar servidor de desarrollo
npm run dev
# o
yarn dev
```

El sitio estará disponible en `http://localhost:3000`

## 📝 Configuración de Variables de Entorno

Copia `.env.example` a `.env.local` y actualiza con tus credenciales:

```bash
# Firebase (solo para Plan Premium)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=573002831004

# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 🔧 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Build
npm run build        # Compila para producción

# Producción
npm start            # Ejecuta servidor de producción

# Linting
npm run lint         # Verifica código
```

## 🌐 Deployment en Vercel

### Opción 1: Usando Vercel Dashboard (Recomendado)

1. **Pushea tu código a GitHub**
   ```bash
   git add .
   git commit -m "Landing Page NexorDT Premium"
   git push origin main
   ```

2. **Accede a Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con GitHub

3. **Importa el proyecto**
   - Click en "Add New Project"
   - Selecciona tu repositorio
   - Configura las variables de entorno en Vercel

4. **Deploy automático**
   - Vercel detecta cambios en main
   - Deploy automático en cada push

### Opción 2: Deploy Local

```bash
# Instalar Vercel CLI
npm install -g vercel

# Hacer login
vercel login

# Deploy
vercel --prod
```

### Configuración de Variables en Vercel

En el dashboard de Vercel:
1. Project Settings → Environment Variables
2. Agrega las variables de `.env.example`
3. Selecciona Production, Preview, Development según corresponda

## 🔐 Activar Firebase (Plan Premium)

1. Crea proyecto en [Firebase Console](https://console.firebase.google.com)
2. Habilita:
   - **Firestore Database** (para leads)
   - **Realtime Database** (opcional)
   - **Authentication** (Email/Google)
3. Copia las credenciales a `.env.local` y en Vercel
4. Descomenta el código en `lib/firebase.ts`

## 📊 Estructura de Datos Firebase

### Colección: `leads`
```json
{
  "id": "auto-generated",
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "company": "Mi Empresa",
  "selectedPlan": "premium",
  "message": "Interesado en...",
  "createdAt": "timestamp",
  "source": "formulario"
}
```

## 🎯 SEO Optimizations

- ✅ Meta tags configurados en `layout.tsx`
- ✅ Open Graph tags para redes sociales
- ✅ Sitemap.xml generado automáticamente
- ✅ Robots.txt configurado
- ✅ Schema.org para rich snippets
- ✅ Performance optimizado (LCP < 2.5s)

## 📱 Responsividad

- ✅ Mobile-first (320px)
- ✅ Tablet (768px)
- ✅ Desktop (1024px+)
- ✅ Ultra-wide (1400px+)

Todas las secciones se adaptan fluidamente usando Tailwind CSS.

## 🎬 Animaciones

### Framer Motion
- Fade-in en scroll
- Slide-up en entrada
- Scale en hover
- Stagger para listas

### GSAP (Partículas)
- Motor de partículas interconectadas
- Efecto fade-in suave
- Performance optimizado

## 🚨 Troubleshooting

### Error: "Cannot find module 'firebase'"
```bash
npm install firebase
```

### Puerto 3000 en uso
```bash
# Linux/Mac
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Build falla en Vercel
- Verifica variables de entorno
- Elimina node_modules y reinstala: `rm -rf node_modules && npm install`
- Revisa los logs de Vercel en el dashboard

## 📞 Soporte y Mantenimiento

### Durante 180 días (Plan Premium)
- ✅ Actualizaciones de seguridad
- ✅ Correcciones de bugs
- ✅ Optimizaciones de performance
- ✅ Soporte por WhatsApp/Email
- ✅ Cambios menores de contenido

### Después del soporte
- Código es 100% tuyo
- Puedes actualizar por tu cuenta
- Documentación completa incluida

## 📄 Licencia

Todos los componentes son propiedad de NexorDT. Uso permitido solo en el contexto del proyecto.

## 👨‍💻 Desarrollado por

**NexorDT** - Transformando negocios a través de landing pages de alto impacto.

📧 Email: hola@nexordt.com  
📞 WhatsApp: +57 300 283 1004  
🌐 Ubicación: Medellín, Colombia

---

## ✨ Checklist Pre-Deployment

- [ ] Variables de entorno configuradas en .env.local
- [ ] Firebase configurado (si es Plan Premium)
- [ ] Texto personalizado actualizado
- [ ] Teléfono WhatsApp verificado
- [ ] Meta tags actualizados (title, description)
- [ ] Logo/favicon personalizado
- [ ] Build local exitoso: `npm run build`
- [ ] Sin errores en consola de navegador
- [ ] Responsive verificado en mobile/tablet/desktop
- [ ] Links y CTA funcionales
- [ ] Analytics configurado (opcional)

---

**Última actualización:** 2024
**Versión:** 1.0.0
**Estado:** Production-Ready ✅
