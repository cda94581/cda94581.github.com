# website-rewrite
A rewrite of [cda94581.github.io](https://cda94581.github.io).

## Notes while editing
- Be sure to set a permalink. This is from the `pages` folder, starting with a `/`, and is put into each page's frontmatter. For example, if you wanted to do the `pages/unrelated/stories` file:
```yml
---
permalink: /unrelated/stories/
---
```
- When using relative links, refer back to the last part of the permalink first, before adding `/NAME`. Add a `./` at the start for easier understanding. For example, if we wanted to add relative link to the file at `/unrelated/stories/the-campaign-series/`, on the `/unrelated/stories/` file:
```md
[Link Display](./stories/the-campaign-series)
```
- Information about `<span v-for="i in X">Something</span>` - Uses Vue (idk im not an expert) to loop `X` amount of times and input something.

## To-Do
- [ ] Move Tutorial Pack Downloads to "videos/"
- [x] Responsive Design
- [x] Better Color Scheme
- [ ] Better Design In General
- [ ] Landing Page for Each Asset Y/M/D
- [ ] Tutorials Pages
- [ ] Video List & Summary
- [ ] Move Non YouTubey Things Elsewhere?
- [ ] Something That I Forget