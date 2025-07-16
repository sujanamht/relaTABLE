# relaTABLE

A modern, interactive relational database design tool with AI assistance built with React, TypeScript, and Vite.

## Features

- 🎨 **Visual Database Designer** - Interactive schema design with drag-and-drop tables
- 🤖 **AI-Powered Assistant** - Get intelligent suggestions for your database design
- 📊 **Table Management** - Create and manage database tables with relationships
- 🔗 **Relationship Mapping** - Visual relationship edges between tables
- 📤 **Export Functionality** - Export your designs to various formats
- ⚙️ **Modern UI** - Beautiful interface built with shadcn/ui and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd relatable
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Technology Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Build Tool**: Vite
- **Visualization**: React Flow (XYFlow)
- **State Management**: React Query
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router DOM

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── AIPromptPanel.tsx
│   ├── TableBlock.tsx
│   └── ...
├── pages/              # Main application pages
│   ├── Designer.tsx    # Main design interface
│   ├── Export.tsx      # Export functionality
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
