# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Type-check (tsc -b) then bundle (vite build)
npm run lint      # ESLint across entire codebase
npm run preview   # Serve the production build locally
```

There are no test commands — the project has no test suite.

## Environment

The app connects to a backend API server. Configure the base URL in `.env.local`:
```
VITE_REACT_APP_REMOTE_SERVER=http://localhost:3000
```

All axios clients use `withCredentials: true` for session cookie authentication.

## Architecture

This is a **Kambaz LMS** (Learning Management System) built with React + TypeScript + Vite. The app has two top-level sections under `src/`:

- **`Kambaz/`** — The primary LMS (courses, assignments, modules, users, enrollment)
- **`Labs/`** — A separate educational sandbox (Lab1–Lab5) with its own Redux store

The root `App.tsx` uses `HashRouter` and routes `/Labs/*` and `/Kambaz/*` to their respective sub-routers.

### Kambaz Module Structure

Each feature area follows a consistent pattern: a React component, a `client.ts` for API calls, and a `reducer.ts` for Redux state.

| Area | Route | Redux Slice | API Client |
|------|-------|-------------|------------|
| Account | `/Kambaz/Account/*` | `accountReducer` | `Account/client.ts` |
| Dashboard | `/Kambaz/Dashboard` | `enrollmentReducer` | `Dashboard/client.ts` |
| Courses | `/Kambaz/Courses/:cid/*` | `modulesReducer`, `assignmentsReducer` | `Courses/client.ts`, `Courses/Modules/client.ts`, `Courses/Assignments/client.ts` |

The Redux store is configured in `src/Kambaz/store.ts` and provided at `Kambaz/index.tsx`.

### Authentication Flow

- `Account/Session.tsx` runs on mount, calls `client.profile()` (POST `/api/users/profile`), and dispatches `setCurrentUser` to Redux.
- `Account/ProtectedRoute.tsx` checks `currentUser` in Redux; unauthenticated users are redirected to `/Kambaz/Account/Signin`.
- Roles are `STUDENT` and `FACULTY` — several UI elements and routes are role-gated.

### API Pattern

Every feature area has a `client.ts` that creates a module-level `axiosWithCredentials` instance and exports named async functions (e.g., `fetchAllCourses()`, `createCourse(course)`). Components call these directly — there is no centralized API layer.

### State Management Pattern

Redux Toolkit slices use `createSlice`. Components read state with `useSelector` and dispatch actions with `useDispatch`. Server data is fetched in `useEffect` hooks and then dispatched into the store (e.g., `setModules`, `setAssignments`).

### Local Database Fallback

`src/Kambaz/Database/` contains static JSON files (courses, modules, assignments, users, enrollments) that were used before backend integration. These are largely unused now but still exported from `Database/index.ts`.
