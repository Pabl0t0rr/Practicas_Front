This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Structure of Proyect

```
├── public/                     ← Carpeta para almacenar imágenes y recursos estáticos
├── src/
│   ├── app/                    ← Proyecto principal (App Router)
│   │   ├── components/         ← Definición de los componentes reutilizables
│   │   └── country/
│   │       └── [nameCountry]/  ← Ruta dinámica para mostrar un país concreto
│   │
│   ├── lib/
│   │   └── api/                ← Definición y lógica de llamadas a la API
│   │       ├── api/            ← Configuración base de la API
│   │       └── country/        ← Funciones relacionadas con países
│   │
│   └── types/                  ← Definición de los tipos
│       ├── country/            ← Tipos relacionados con países
│       └── index.ts            ← Exportaciones globales de tipos
│
├── .prettierc                  ← Configuración para formateo automático del código
├── .gitignore                  ← Archivos y carpetas ignorados por Git
└── README.md
```
