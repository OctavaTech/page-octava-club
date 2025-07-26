# Configuración de la Aplicación Octava Club

## Variables de Entorno

Para que la aplicación funcione correctamente, necesitas crear un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```bash
# FourVenues API Configuration (Server-side only - SECURE)
FOURVENUES_API_KEY=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
FOURVENUES_BASE_URL=https://channels-service.fourvenues.com
```

## Pasos para configurar:

1. **Crear el archivo `.env.local`**:
   ```bash
   # En la raíz del proyecto
   touch .env.local
   ```

2. **Agregar las variables de entorno** al archivo `.env.local`

3. **Reiniciar el servidor de desarrollo**:
   ```bash
   bun run dev
   ```

## Estructura de la Aplicación

### Store (Zustand)
- `src/app/store/eventsStore.ts` - Maneja el estado global de los eventos

### Hooks
- `src/app/hooks/useEvents.ts` - Hook para obtener eventos de la API
- `src/app/hooks/useEventFilters.ts` - Hook para filtrar eventos

### Utilidades
- `src/app/utils/eventTransformers.ts` - Transforma eventos de la API al formato de la app

### Componentes
- `src/app/components/LoadingSpinner.tsx` - Componente de carga mejorado
- `src/app/components/EventGrid.tsx` - Grid de eventos
- `src/app/components/Card.tsx` - Tarjeta individual de evento

## API Endpoints

### Funcionando ✅
- `GET /auth` - Autenticación e información del canal
- `GET /events` - Todos los eventos del canal

### Características
- **13 eventos reales** de Octava Club
- **Datos en tiempo real** desde FourVenues
- **Manejo de errores** con opciones de reintento
- **Loading states** mejorados
- **Filtrado por categorías** (Techno, House, etc.)

## Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Zustand** - Manejo de estado global
- **Tailwind CSS** - Estilos
- **Bun** - Runtime y package manager
- **FourVenues API** - Datos de eventos

## Comandos Útiles

```bash
# Instalar dependencias
bun install

# Ejecutar en desarrollo
bun run dev

# Construir para producción
bun run build

# Ejecutar en producción
bun run start
``` 