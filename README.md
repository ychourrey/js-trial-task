# 🌈 PlanetRomeo - JS Trial Task 📱

## 🙏 Thanks!
First of all, thank you for this interesting and fun frontend assignment! It’s cleanly scoped and open-ended enough to express both engineering and design decisions.

---

## 📂 Project Overview

This repository is structured with a clear **separation of concerns** between the **backend** and the newly implemented **frontend UI**.

### 🔁 Assumption
> The provided repo at [https://github.com/erasys/js-trial-task](https://github.com/erasys/js-trial-task) is assumed to be the **Backend-for-Frontend (BFF)** or API layer.

Accordingly, all UI-related development is encapsulated under the new `planetromeo/` folder.

> ✅ **Note**: The original backend code under `/lib` and `/data` is **untouched**. A new project was created **side-by-side** as a sibling directory named `planetromeo` to represent the frontend.

---

## 🌱 Why this separation?

- Respect original codebase boundaries
- Mimic real-world structure where frontend and backend evolve independently
- Allow scalable and production-level frontend build setup (e.g., React Native + Expo)
- Avoid breaking anything in the original assignment repo

---

## 🛠 Project Overview

This app is a mobile-first, responsive **React Native (Expo)** implementation of the [JS Trial Task](https://github.com/erasys/js-trial-task).

The goal was to create a user discovery screen that:

- Fetches & displays paginated user data
- Adapts layout based on device width (mobile, tablet, desktop)
- Implements dark/light theming
- Shows distance, location, and activity info

---

## 🧱 Project Structure

```txt
planetromeo/
├── api/                          # Data fetch logic
│   ├── fetchProfiles.ts
│   └── fetchSearch.ts
│
├── components/
│   ├── userCard/                # User display component + data logic
│   │   ├── UserCard.tsx
│   │   └── UserData.ts
│   └── utilComponents/          # Reusable UI pieces
│       ├── Header.tsx
│       ├── ThemeToggle.tsx
│       └── ConnectionErrorMessages.tsx
│
├── constants/                   # Configurable values & enums
│   ├── apiConstants.ts
│   └── errorConstants.ts
│
├── theme/                       # Dark/light theme config
│   ├── dark.ts
│   ├── light.ts
│   ├── ThemeProvider.tsx
│   └── themeTypes.ts
│
├── utils/                       # Utilities
│   ├── commonUtils.ts
│   └── userResponsiveColumns.ts
│
├── types/                       # Shared TS types
│   └── index.ts
│
├── assets/                      # Optional (for fonts/images)
│
├── App.tsx                      # Root entry
├── Home.tsx                     # Main screen
├── config.ts                    # API base config
├── package.json / tsconfig.json

---

## ✨ Design Philosophy

This project was kept **lightweight and focused**, aligning with the MVP scope. It intentionally avoids external state libraries like `zustand` or `react-query` to prioritize:

- Code readability
- Simplicity
- Performance
- Strong type safety

That said, the app is designed for **high scalability**:

### 🔮 Possible Enhancements

| Feature                | Suggested Tool                |
|------------------------|-------------------------------|
| Global state           | `zustand`, `Jotai`            |
| Data caching / retries | `@tanstack/react-query`       |
| Filtering UI           | `react-hook-form`, `zustand` |
| UX animations          | `react-native-reanimated`    |
| Testing                | `Jest`, `Testing Library`     |

---

## ✅ Tested Devices & Browsers

| Device Type             | Tested On                             |
|-------------------------|----------------------------------------|
| iOS (Physical)          | iPhone 12 Pro, iPhone 12   |
| iOS (Simulator via Xcode) | iPhone 16, 16 Pro, iPad Pro 11", 13", iPhone 15 Pro, iPhone15 |
| Android (Physical)      | Samsung Galaxy A12                    |
| Web Browsers            | Chrome, Safari, Firefox  (on Macbook Pro)             |

---

## ▶️ How to Run the App

> Prerequisites:
- Node.js v18+
- Yarn / npm
- Expo CLI: `npm install -g expo-cli`

---

### 1. Clone the Repo (I would share my code as a MR, which could be downloaded, probably, or cloned)
cd /js-trial-task/planetromeo

### 2. Install Dependencies
yarn install
# or
npm install

### 3. Start the App
# For Web
yarn web

# For iOS simulator (Xcode must be installed)
yarn ios

# For Android (emulator or connected device)
yarn android

OR

# simply run
npx expo start
  and scan the QR using Expo Go.

---
📸 Features Implemented
	•	🖼 Responsive user cards (2–4 per row); except desktop, where leverage of wide screen allows multiple cards in single row
	•	🔦 Dark & light toggle with theme context
	•	🔁 Pagination using cursor-based API
	•	📏 Distance calculation + relative timestamps
	•	🎯 Error boundary messages
	•	💅 Adaptive layout per screen size
---

🌈Thanks🌈
