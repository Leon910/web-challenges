# List of Movies

## Value Proposition

**As a** `Movie-App-User` <br>
**I want to** `see a list of current movies` <br>
**so that** `I can decide which movie I want to watch` <br>

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria

- a main title should be displayd
- [ ] when opening the app the user sees a list of all current movies
- [ ] every movie is displayed as one card
- [ ] every card displays an image, the title and the rating
- [ ]if movie data can not be retrieved, the page should display an error message

## Tasks

- create feature branch
- create a home-page-file(index.js)
- set up React "Card"-component for movie list
  - map over the data as a list
- render "Card"-component in home-page
- fetch data with api and create error message within api-fetch
