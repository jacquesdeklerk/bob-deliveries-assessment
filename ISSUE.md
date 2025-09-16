# Assignment — Deliveries list (React + TypeScript + Tailwind)

**Short:** Implement a DeliveriesList UI that displays and manages a list of deliveries. This repo is a skeleton — implement the logic in `src/components/DeliveriesList.tsx`.

**Use:** Create React App (TypeScript), Yarn, and Tailwind CSS.

## Requirements (summary)
- Display: each item shows `label`, a status circle (yellow=pending, green=current, blue=done), and `time` if present.
- Filter: control to show `all | pending | current | done`.
- Sequential disabling: Only allow setting a step to `current` or `done` when the previous step (in sorted order) is `done` (first step allowed).
- Done behavior: Marking a step `done` sets its `time` to now; Marking a step `current` clears later steps' times.
- Reset behavior: If a previously `done` step is changed back to `pending` or `current`, later steps must be reset to `pending` and their times cleared.
- UI: use Tailwind utility classes for styling (no inline `style={...}` for layout).
- Coding standards: Make sure you follow and enforce our coding standards https://tech.bob.co.za/coding-standards/javascript/

## Optional bonus (nice-to-have)
- When all steps are `done`, show a "Finished" banner and a "Start over" button that resets state to the initial values.

## Deliverables
- GitHub repo link with your solution (private/public).
- At least 3 meaningful commits.
- `README.md` with run instructions and a short note on AI usage (if used).
- `ANSWERS.md` with the 6–10 bullet scaling answer and disclosure of AI prompts if used.
- A 2–4 minute screencast or 200–400 word write-up explaining decisions.
