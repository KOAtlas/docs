---
title: Next Steps
description: Where to go after setting up your local KOReader environment - how to learn from existing plugins and what to explore next.
group: Getting Started
sidebar:
  label: Next Steps
  order: 2
---
# Next Steps 

At this point you should have a text editor, a basic handle on Lua, and a working KOReader installation extracted from the AppImage. That is enough to start writing and testing your first plugin.

Before jumping into plugin structure and code, it is worth knowing how most KOReader plugin development actually happens in practice - because it is a bit different from projects that have comprehensive API documentation.

---

## Learning From Existing Plugins

KOReader does not have a fully documented public API. The internal modules are well-designed and fairly readable, but there is no exhaustive reference that covers every function and widget you might want to use. In practice, this means the most reliable way to figure out how to do something is to find an existing plugin that already does something similar, and read it.

This is not as daunting as it sounds. KOReader ships with a large number of built-in plugins covering a wide range of functionality, and they are all written in the same Lua patterns you will be using. Once you have read a few, the structure becomes familiar quickly.

When you are trying to figure out how to implement something, it is worth asking: does an existing plugin already do this, or something close to it? Common things to look for include:

- **Menu entries** - how plugins add items to KOReader's reader or file browser menus
- **Dialogs and popups** - how to display information, prompt for input, or show confirmation screens
- **Settings storage** - how plugins persist user preferences between sessions
- **Event handling** - how plugins respond to reader events like page turns or document opens
- **UI widgets** - buttons, input fields, scroll views, and other interface elements

The plugin source files live in the `plugins/` directory of the extracted AppImage under `squashfs-root/`. Browsing that directory and opening a few files is a good way to get oriented before writing any code of your own.

For anything more advanced or undocumented, the rest of the KOReader source - particularly the `ui/` and `frontend/` directories - is the most reliable reference.

---

## Keeping the Source Code Handy

Because KOReader's internal APIs can change between releases, it is often useful to have the KOReader source repository open alongside your plugin code. The repository is available at:

**[https://github.com/koreader/koreader](https://github.com/koreader/koreader)**

When you find a widget or function being used in an existing plugin and want to understand exactly what it does, looking up the source is usually faster than searching for documentation - and more accurate.
