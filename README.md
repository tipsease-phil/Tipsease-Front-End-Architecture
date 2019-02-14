# Tipsease-Front-End-Architecture
React front-end build for Tipsease project.

React front-end build for Tipsease project.

deployed to Netlify @ Netlify Status

Front-end Architecture for Tipsease App.

Pitch: A service Employee can login and create, read and update a profile. Regular User can login and select a service employee and give them a tip.

MVP Features Breakdown:

Login Page - After a user logs in, they'll be directed to a home page.

Navigation - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.

Home Page - Contains a list of Service workers, (Restaurant servers, Bellhops, Valet Attendants etc.) laid out in a grid format.

Service Worker Page - Loads information about the worker, thumbnail photo, how long they've been at their current job in years/months, Name, and a tagline to help you remember who they are. Action items found on page are Add Tip.ecid

Monday - Milestones

Github repo must be set up.

Project file structures, scaffolded and project architecture decided.

Front-end will use React and front-end styling platforms such as Material UI, Reactstrap, or Styled-Components chosedn and implemented as your technology choice.

Note: baack-end will use Node/Express and all required packages for things like CORS, Body-Parser, JWT.

Nightly deploys to Heroku or Netlify.

User Login/Signup endpoints and features built out including the User Models. Front and Backend. Use JWT/Sessions strategies learned in Authentication here (unless agreed upon by the team and scrum master to move with an OAuth strategy).

Front-end is pulling in data from the back-end.

React app and back-end app talking to one another - focus on CORS issues.

** Tuesday - Milestones **

80% of front-end features and UI components built and consuming data from the back-end(functionality over form for now). ** Wednesday - Milestones **

100% of Front end features & UI Components, built and consuming data from the backend (Now is the time to focus on Form). Front end is pulling in all data necessary from backend, users can interact with ALL CRUD operations on the Project data. Finish implementation of MVP features. Implement visual design/theme.

IMPORTANT: Submit your app to TestFlight by Wednesday at 5 PM pacific. It does not need to be complete done/working, but it must be submitted to TestFlight.

** Thursday - Milestones **

CODE FREEZE! - NO NEW FEATURES IMPLEMENTED PAST 11 AM PST.

Strong emphasis on bug fixes.

** Friday - Milestones **

DEMO day.

BACKEND ARCHITECTURE VIA KAI LOVINGFOSS (KAI IS AWESOME WOOT WOOT!)

ref git repo: https://github.com/tipsease/tipsease-backend-kai-lovingfoss

Company endpoints GET /api/companies returns [ { "id": integer, "name": string, "address": string } ] Tipper endpoints GET /api/tippers returns [ { "id": integer, "name": string, "photo_url": string, "email": string }, { "id": integer, "name": string, "photo_url": string, "email": string } ] GET /api/tipper/:id returns [ { "name": string, "photo_url": string, "email": string } ] DELETE /api/tipper/:id returns [ { "name": string, "email": string } ] PUT /api/tipper/:id injest { "name": string:required, } returns [ { "id": integer, "name": string, "photo_url": string, "email": string } ] Tippee endpoints GET /api/tippees/ returns [ { "id": integer, "name": string, "company": string, "photo_url": string, "start-date": integer, "email": string, "tagline": text, "qr_url": text }, { "id": integer, "name": string, "company": string, "photo_url": string, "email": string, "tagline": text, "qr_url": text } ] GET /api/tippees/:id returns [ { "name": string, "email": string, "company": string } ] PUT /api/tippeess/:id injest [ { "name": string:required, "company": string, "company-address": string, "photo_url": string, "start-date": integer, "email": string, "tagline": text, "qr_url": text } ] returns [ { "name": string:required, "company": string, "photo_url": string, "start-date": integer, "email": string, "tagline": text, "qr_url": text } ] DELETE /api/tipper/:id returns [ { "name": string, "email": string, "company": string } ] Register endpoints POST /api/register/tipper injest [ { "id": integer, "name": string, "photo_url": string, "email": string } ] POST /api/register/tippee injest [ { "name": string:required, "company": string, "company-address": string, "photo_url": string, "start-date": integer, "email": string, "tagline": text, "qr_url": text } ] Tipping endpoints POST /api/tippee/:id/tips injest [ { "tipper_id": integer, "amount": float } ]

