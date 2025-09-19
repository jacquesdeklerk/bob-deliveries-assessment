# Answers

## Scaling Design

If the list grows significantly, I would:

1. Add **Pagination** which, as a framework agnostic pattern, is always a reliable way to improve UI rendering.

- Large network responses payloads are "chunked" reducing single API call latency.
- The downside to this is more API calls are made and any manipulation of list display (filter/sort/search) requires network calls. State management also becomes more complicated.
- Pagination is simpler to implement and and easier to maintain than infinite scrolling for example - I feel sorry for the Pinterest front-end developers :P

2. Another option could be to **virtualize the list** (e.g., `react-window`), so only visible items render to the DOM. My knowledge on this React implementation is still limited, ChatGPT helped me with this one.
3. **Lift state management** into a global store (e.g., Redux) for predictable updates and testability.
4. **Normalising state** using an object keyed by ID instead of an array. This will add initial complexity in formatting the data for the store, but will simplify and speed up data lookup subsequently.
5. **Add unit tests** around step progression rules to ensure correctness regardless of list size.
6. **Performance monitoring** with React DevTools profiler and testing against large sets of mock data on various devices.

---

## AI Usage

I used ChatGPT for:

- Generating the base implementation of the filter function in `DeliveriesList.tsx`.
  - ChatGPT Prompt - `given the following reactjs code, provide an implementation for filtering the list` (`DeliveriesList.tsx` added as context)
  - I manually verified and adapted the code to align with the given coding standards and project goals.
- Drafting the structure of `README.md` and `ANSWERS.md`.
- Summarizing the scaling considerations into concise bullet points.

## EXPLANATION

A written explanation describing decisions, tradeoffs and what can be improved can be found in `EXPLANATION.md`.

## OPTIONAL ITEMS

- When all steps are `done`, a "Finished" banner and a "Start over" button that resets state to the initial values is displayed.
  - resetDeliveriesProgress function was modified and renamed to be more reusable and also resets time values to null and used for resetting values "Start over" button click
