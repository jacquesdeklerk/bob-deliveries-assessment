# Deliveries Assessment

This is a small React + TypeScript + Tailwind CSS project implementing a **DeliveriesList** component.

## Setup & Run

1. Clone the repo:

```bash
git clone git@github.com:jacquesdeklerk/bob-deliveries-assessment.git
cd bob-deliveries-assessment
```

2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn start
```

## Design Notes

- The BOB coding standards (https://tech.bob.co.za/coding-standards/javascript/) were followed
- Built with React + TypeScript and styled using TailwindCSS.
- Typescript Type Aliases, Interfaces and sample data were provided in src/data/sampleDeliveries.ts
- An Additional Type Alias (ProgressValue) and ProgressValue[] data was created in src/components/DeliveriesList.tsx
- DeliveriesList component manages state locally with useState hook.
- List can be filtered by progress values `all | pending | current | done`.
- Each step can only advance if the rules are satisfied:
  - Sequential disabling: Only allow setting a step to `current` or `done` when the previous step (in sorted order) is `done` (first step allowed).
  - Done behavior: Marking a step `done` sets its `time` to now; Marking a step `current` clears later steps' times.
  - Reset behavior: If a previously `done` step is changed back to `pending` or `current`, later steps are reset to `pending` and their times cleared.
- AI usage was deliberately kept to a minimum to use this assessment as a further opportunity for learning React.
