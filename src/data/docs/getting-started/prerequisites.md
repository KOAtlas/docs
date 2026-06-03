---
title: Prerequisites
description: What you need before you start developing KOReader plugins - a text editor and some basic Lua knowledge.
group: Getting Started
sidebar:
  label: Prerequisites
  order: 0
---
# Prerequisites

KOReader plugins are written entirely in Lua, which keeps the barrier to entry low. You do not need a compiled language, a complex build system, or a specialized IDE. If you have a text editor and a basic grasp of Lua, you have everything required to start.

This page covers what to install and where to learn before moving on to setting up your local environment.

---

## Text Editor

Any editor that can save plain `.lua` files will work. There is no official recommendation - use whatever you are already comfortable with.

If you do not have a preference yet, here are some commonly used options:

| Platform       | Editors                   |
| -------------- | ------------------------- |
| Windows        | Notepad++                 |
| Linux          | Neovim, Kate, Gedit, Nano |
| Cross-platform | VS Code, Sublime Text     |

Editors like VS Code and Neovim have Lua language plugins available if you want syntax highlighting and basic autocomplete, but neither is required.

---

## Lua Knowledge

KOReader plugins use Lua 5.1. You do not need to be an expert, and you definitely do not need to memorize the language - most developers keep a reference open in a browser tab and look things up as they go.

Before diving in, it helps to be comfortable with:

- **Basic syntax** - variables, strings, numbers, booleans
- **Control structures** - `if`, `for`, `while`
- **Functions** - defining and calling them, returning multiple values
- **Tables** - Lua's all-purpose data structure, used for arrays, dictionaries, and objects
- **Modules** - how `require` works and how files expose their contents

You do not need to know everything about Lua upfront. These concepts will come up repeatedly as you read existing plugins and write your own, so picking them up as you go is completely reasonable.

### Learning Resources

If you are new to Lua or want a quick refresher, these two resources cover everything you need:

- **[Learn X in Y Minutes - Lua](https://learnxinyminutes.com/lua/)**
  A dense, code-heavy cheat sheet that gets through the whole language in one page. Good for developers who already know another language and just want to see how Lua works.

- **[Learn Lua in 10 Minutes](https://learnin10minutes.com/posts/learn-lua-in-10-minutes/)**
  A more narrative introduction that walks through the language at a slightly slower pace.

Either resource should be enough to get you writing basic plugin code. You can always go deeper later.

---

## A Note on API Stability

KOReader's internal APIs are not officially versioned and are not guaranteed to remain stable between releases. This means that code you write against one version of KOReader may need small adjustments when a new version changes an internal module.

This guide documents the APIs and patterns that are in current use, but it may lag behind the codebase. **When this guide conflicts with the source code, the source code is always authoritative.** If something does not behave the way this guide describes, it is worth checking the relevant module in the KOReader repository directly.
