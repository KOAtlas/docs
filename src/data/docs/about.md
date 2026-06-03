---
title: About KOAtlas
description: Community-maintained reference for KOReader plugin development. APIs, architecture, patterns, and examples.
group: About
sidebar:
  label: About KOAtlas
  order: 0
---
# About KOAtlas

Community-maintained reference for KOReader plugin development — APIs, architecture, patterns, and practical examples drawn from the codebase and existing plugins.

> **Disclaimer:** This project is unofficial and not affiliated with KOReader. Internal APIs may change. When this guide conflicts with the source code, the source code wins.

## Start here

If you're new, go through these in order:

1. [Prerequisites](/docs/getting-started/prerequisites)
2. [Development Environment Setup](/docs/getting-started/installation)
3. [Plugin Structure](/docs/getting-started/plugin-structure/)
4. [First Plugin](/docs/getting-started/first-plugin/)

Then continue to [Fundamentals](/fundamentals/lifecycle/) to understand how plugins interact with the rest of KOReader.

## What's in this guide

**Getting Started** — everything required to write and run your first plugin.

**Fundamentals** — plugin lifecycle, events, widgets, dispatcher, and settings.

**API Reference** — UIManager, Event, Dispatcher, WidgetContainer, InputContainer, dialog widgets.

**Tutorials** — adding menu items, showing dialogs, handling events, saving settings, building custom widgets.

**References** — source code pointers, development notes, and external resources.

## How to learn KOReader development

Most of plugin development is learned by reading existing plugins and the source code. This guide documents common patterns — it doesn't replace the code itself.

When implementing something new:

1. Search existing plugins for similar behavior.
2. Read the relevant section of this guide.
3. Read the source code — many details only make sense there.
4. Experiment and test frequently.

## Links

**KOReader**

- [koreader.rocks](https://koreader.rocks/) — official website
- [github.com/koreader/koreader](https://github.com/koreader/koreader) — source code
- [Official wiki](https://github.com/koreader/koreader/wiki)
- [Building.md](https://github.com/koreader/koreader/blob/master/doc/Building.md) — build docs
- [OTA builds](https://ota.koreader.rocks/)
- [Releases](https://github.com/koreader/koreader/releases)

**Lua**

- [Lua documentation](https://www.lua.org/docs.html)
- [Learn X in Y Minutes — Lua](https://learnxinyminutes.com/lua/)
- [Learn Lua in 10 Minutes](https://learnin10minutes.com/posts/learn-lua-in-10-minutes/)

## Credits

Created and maintained by [Rupak Chaulagain](https://chaulagainrupak.com.np) — [GitHub](https://github.com/chaulagainrupak)

Thanks to the KOReader developers, plugin authors whose code serves as learning material, and community members who share examples and bug reports.

If this helped you build a plugin, consider [supporting on Ko-fi](https://ko-fi.com/richtrash).

Corrections, improvements, and new tutorials are always welcome.
