# Frontmatter

You may also want to check out the [frontmatter](https://vuepress.vuejs.org/guide/frontmatter.md#alternative-frontmatter-formats) in VuePress.

Frontmatter gives you the freedom to manually add properties to a page.

## Predefined Varibles

```md
---
catalogGraph:
  - target: ../../../House Lannister/Tywin Lannister/Cersei Lannister/Joffrey Baratheon.md
  - target: ../../../House Lannister/Tywin Lannister/Cersei Lannister/Tommen Baratheon.md
---

# Margaery Tyrell
```

```md
---
catalogGraph:
  - word: Winter Is Coming
---

# House Stark
```

## Alternatively

[node.frontmatter](../api.md#node-frontmatter) allows you to access varibles defined outside the `catalogGraph`.
