
# API's 
Details/Single Data:
https://api.abcz.workers.dev/api/fitlog/:id

--- 

## 🐣 Basic Requirements (Must Do for Everyone)
- Your app must work on all screen sizes — mobile, tablet, and desktop
- Add a nice README.md file with your project name, description, technologies used, and features(minimum 5)

--- 


# 🔧 Main Requirements — 50 Marks
### 1. 🔝 Navbar

- Design the Navbar exactly like the Figma design


### 6. My Plan Page (`/my-plan`) — the "log" page
- **Loading state**: show "Loading workouts…" while fetching before the list renders.

### 7. Footer
- Match the Figma design: dark footer.

### 8. Responsive Design
- The entire website must work correctly on mobile, tablet, and desktop screen sizes (grid collapses correctly, navbar stays usable, hero stacks, etc.).

--- 

#	Requirement
- Add a 404 Page for any unknown/invalid route
- Show a loading animation while the exercise data is being fetched on the Home page
- Show a relevant toast notification when the detail's page button.
- Make sure reloading any page after deployment does not cause an error
- fix data fetching issue in dynamic page

--- 

# Challenge Requirements — 10 Marks


### C1. - **Sort dropdown**: 
"Sort By" → options `Duration`, `Calories`, `Rating` (default `Duration`, with chevron icon); it re-sorts the current list.

### C2. GitHub README
- Add a well-designed `README.md` that includes:
  - Project name
  - Short description
  - Technologies used
  - 5 key features of the project
 

## Optional (No Marks — Highly Recommended)
- Persist the plan/saved data in `localStorage` so it survives a page reload.
- Search the My Plan / library entries by workout name or tag.
- Disable "Add to today's plan" when the plan already contains 5 lifts (the cap mentioned in the subtitle).