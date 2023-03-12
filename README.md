## What is Sveltekit

- a fullstack framework to make websites

  - svelte => frontend (like react)
  - sveltekit => frontend and backend (routing, combine serverSide and clientSide rendering, make custome api, ...)

- serverSide and clientSide rendering =>
  - How react, vue, svelte, works =>
    - makes single page application with blank html page
    - in the browser (client) content gets rendered
  - How sveltekit works
    - makes both serverSide and clientSide rendering possible
    - it doesn't send the initial blank html, but pre-rendered page from server
    - and when user interacts with it it doesn't send requests to server but instead

## some basic details

- svelte files
  - .svelte
- content
  - script
  - html that will render on the page
  - style
- routing
  - static (name of folders inside route)
  - dynamic (singlePlayer, multiPlayer)
  - (news)
- dynamic value
  - pass props - (playOption)
- layout (for pages that have fixed and repatitive elements)
  - about and about/more
- syntax (/syntax)
  - for loop
  - if
