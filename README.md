# Tech Tarot Server🔮

## Overview

Tech Tarot is a developer-themed tarot experience where users can draw three symbolic cards — Past, Present, and Future; from a custom 22-card deck. Each card reflects an archetype from the dev journey, offering space for reflection and introspection.

## Objective

I'm learning **TypeScript** and created this project to get my feet wet with both backend (Node + Express) and frontend (React) development. The goal is to build a simple full-stack app with real-world structure, routing, and data handling.

## Features

- Draw 3 cards: Past, Present and Future
- Each card includes meanings and reversed meanings
- Matched tech tarot cards from traditional tarot

## Getting Started

1. Clone the repo
2. Install the dependencies: `npm install`
3. Create `env` file. Look at .sample.env for detiails on what env variables you need.
4. Run the server: `npm run dev`

## Implementation

### ⚙️ Tech Stack

- React
- Sass
- TypeScript
  - Node
  - Express

## Data

data/tarot-arcana.json

```
[
  {
    "id": 0,
    "name": "The Boot Sequence",
    "traditionalMatch": "The Fool",
    "archetype": "frontend",
    "message": "You’ve begun your journey with no expectations. Embrace the unknown.",
    "reversedMessage": "You’re stuck in setup—afraid to start, afraid to fail. Just boot.",
    "emoji": "🧭"
  },
  ...
]
```

## About the Deck

The deck includes 22 symbolic cards inspired by the Major Arcana of traditional tarot, reimagined through a developer lens. Each card has:

- Name
- Archetype (e.g. chaos, logic, balance)
- Upright message
- Reversed message
- Emoji

Card data is stored in:
[src/data/tech_tarot_arcana.json](./src/data/tarot-arcana.json)

## Roadmap

- [x] Setup folders
- [x] Setup backend server
- [x] Create and format custom 22-card Tech Arcana JSON deck
- [x] Build draw 3 random cards along with reversed logic
- [x] Build /api/draw route with past, present and future cards
- [ ] Serve responses to frontend

## Future Implementations

- Expand to minor arcanas
