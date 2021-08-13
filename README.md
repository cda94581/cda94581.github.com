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