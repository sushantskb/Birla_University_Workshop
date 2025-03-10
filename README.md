# Setup Routes

This commit introduces the initial routing structure for the application using Expo Router.

## Changes

* **File-Based Routing:** Implemented a directory structure within the `app/` folder to define the application's navigation.
* **Dynamic Routes:** Created dynamic route files (`[id].tsx`, `[name].tsx`) to handle parameters in URLs.
* **Layout Component:** Added `_layout.tsx` to define the root layout, enabling consistent UI across screens.
* **Screen Components:** Created initial screen components:
    * `index.tsx`: Main application screen.
    * `add-notes.tsx`: Screen for adding new notes.
    * `editor/[id].tsx`: Screen for editing notes.
    * `notes/[id].tsx`: Screen for viewing notes.
    * `search/[name].tsx`: Screen for searching notes.

## Purpose

This commit establishes the navigational foundation of the application, allowing for structured and dynamic screen transitions.

## Next Steps

* Implement the UI for each screen.
* Add logic to handle route parameters.
* Integrate data fetching and state management.
* Implement navigation between screens.