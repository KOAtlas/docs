---
title: Setting Up a Local Testing Environment
description: How to download and extract the KOReader AppImage to get a working local environment for plugin development on Linux.
group: Getting Started
sidebar:
  label: Installation
  order: 1
---

# Installation 

When developing KOReader plugins, you generally do not need to build KOReader from source. The full build process exists for people modifying KOReader's core - for plugin development, the official AppImage contains everything you need, including all the Lua runtime libraries and KOReader's frontend code.

The official build documentation notes this directly:

> If you only want to work with Lua frontend stuff, you can grab the AppImage and run it with `--appimage-extract`.
>
> - [KOReader Build Documentation](https://github.com/koreader/koreader/blob/master/doc/Building.md)

Extracting the AppImage gives you a complete, self-contained KOReader installation that you can run on your desktop, modify, and test against immediately. This guide assumes an **x86_64 Linux** system, but the same workflow applies on other platforms.

---

## Downloading the AppImage

AppImage builds are distributed through KOReader's OTA server:

**[https://ota.koreader.rocks/](https://ota.koreader.rocks/)**

The directory lists builds for several architectures. Pick the one that matches your system:

| Architecture | Intended Devices                  |
| ------------ | --------------------------------- |
| x86_64       | Most desktop and laptop computers |
| aarch64      | ARM64 systems                     |
| armhf        | 32-bit ARM systems                |

If you are on a standard Linux desktop or laptop, you want the **x86_64** build. The filename will look something like:

```
koreader-v2026.03-x86_64.AppImage
```

Download the most recent version available.

---

## Extracting the AppImage

AppImages are self-contained executables, but running KOReader directly from the AppImage is not ideal for development - you cannot easily inspect or modify files inside it. Instead, extract it to a plain directory.

First, make the file executable:

```bash
chmod +x koreader-v2026.03-x86_64.AppImage
```

Then extract its contents:

```bash
./koreader-v2026.03-x86_64.AppImage --appimage-extract
```

This will create a directory called `squashfs-root/` in your current working directory. That folder is a complete KOReader installation - all the Lua source files, assets, and bundled libraries are in there and can be browsed, edited, and replaced freely.

---

## Running KOReader

To launch KOReader from the extracted directory:

```bash
cd squashfs-root
./AppRun
```

KOReader should start normally and show its full interface. If it does, your environment is working correctly and you are ready to start installing and testing plugins.

---

## Recommended Directory Layout

It is worth taking a moment to organize your workspace before you start. Keeping your plugins and notes separate from the extracted AppImage makes everything easier to manage - especially when you want to test against a newer KOReader version, since you can extract a fresh AppImage without touching your plugin files.

A layout like this works well:

```
koreader-dev/
├── squashfs-root/    ← extracted AppImage, leave this mostly untouched
├── plugins/          ← your plugin source files
└── test-books/       ← EPUB/PDF files for testing your plugins against
```

The exact structure is up to you, but separating your work from the KOReader installation itself will save you headaches later.

---

## Why Use the AppImage Instead of Building from Source?

Unless you are making changes to KOReader's core C or C++ code, the AppImage approach is almost always the right choice. It is faster to set up, easier to update, and produces an environment that closely matches what end users are running. Building from source introduces a significantly longer setup process with a lot of dependencies that are simply not needed for Lua plugin work.

If at some point you do need to modify KOReader itself, the full build instructions are available in the [KOReader repository](https://github.com/koreader/koreader/blob/master/doc/Building.md).
