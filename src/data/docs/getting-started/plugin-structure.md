---
title: Plugin Structure
description: Understanding how KOReader plugins are organized, discovered, and loaded.
group: Getting Started
sidebar:
  label: Plugin Structure
  order: 3
---
# Plugin Structure 

Before writing a plugin, it is important to understand how KOReader discovers and loads plugins.

A KOReader plugin is simply a directory ending with the `.koplugin` extension that contains a specific set of files. At minimum, every plugin requires:

- `_meta.lua`
- `main.lua`

A minimal plugin might look like this:

```text
myplugin.koplugin/
├── _meta.lua
└── main.lua
```

As plugins become more complex, additional files and directories are often added:

```text
myplugin.koplugin/
├── _meta.lua
├── main.lua
├── settings.lua
├── assets/
│   ├── icon.png
│   └── images/
├── ui/
│   └── settingsdialog.lua
├── lib/
│   └── helper.lua
└── README.md
```

The exact structure is up to the plugin author. KOReader only requires the files necessary to identify and load the plugin.

---

## Plugin Location

Plugins are typically stored in KOReader's plugin directory:

```text
plugins/
```

Within the extracted AppImage used during development, the plugin directory can be found at:

```text
squashfs-root/usr/lib/koreader/plugins/
```

Every directory ending with `.koplugin` is treated as a plugin candidate and may be loaded by KOReader.

Example:

```text
plugins/
├── statistics.koplugin/
├── coverbrowser.koplugin/
├── wallabag.koplugin/
└── myplugin.koplugin/
```

---

## Understanding `_meta.lua`

The `_meta.lua` file contains metadata describing the plugin.

A typical example looks like:

```lua
return {
    name = "myplugin",
    fullname = "My Plugin",
    description = "Example plugin used for documentation."
}
```

This file is used by KOReader to gather information about the plugin before loading it.

Common fields include:

| Field         | Description                |
| ------------- | -------------------------- |
| `name`        | Internal plugin identifier |
| `fullname`    | Human-readable plugin name |
| `description` | Short plugin description   |

Depending on the plugin, additional metadata fields may also be present.

> The exact set of supported metadata fields may change over time. Existing KOReader plugins are often the best reference for current usage.

---

## Understanding `main.lua`

The `main.lua` file serves as the plugin's entry point.

When KOReader loads a plugin, this file is executed and is responsible for creating the plugin object.

A simplified example:

```lua
local WidgetContainer = require("ui/widget/container/widgetcontainer")

local MyPlugin = WidgetContainer:extend{
    name = "myplugin",
}

return MyPlugin
```

In most plugins:

1. Required modules are imported.
2. A plugin class is created.
3. The class extends an existing KOReader base class.
4. The plugin object is returned.

KOReader then uses the returned object to integrate the plugin into the application.

---

## Plugin Classes

Most plugins extend one of KOReader's existing classes.

A common pattern is:

```lua
local WidgetContainer = require("ui/widget/container/widgetcontainer")

local MyPlugin = WidgetContainer:extend{
    name = "myplugin",
}
```

This creates a new class named `MyPlugin` that inherits behavior from `WidgetContainer`.

Additional methods can then be attached:

```lua
function MyPlugin:init()
    -- Plugin initialization code
end
```

The specific base class used depends on the plugin's purpose and architecture.

---

## Loading Process

A simplified view of the plugin loading process looks like:

```text
KOReader Startup
        │
        ▼
Scan plugins directory
        │
        ▼
Read _meta.lua
        │
        ▼
Load main.lua
        │
        ▼
Create plugin object
        │
        ▼
Register plugin
        │
        ▼
Plugin becomes available
```

Understanding this process helps explain why `_meta.lua` and `main.lua` are required.

---

## Organizing Larger Plugins

As plugins grow, it is common to separate functionality into multiple files.

Example:

```text
myplugin.koplugin/
├── _meta.lua
├── main.lua
├── settings.lua
├── ui/
│   ├── settingsdialog.lua
│   └── aboutdialog.lua
├── network/
│   └── api.lua
└── util/
    └── helpers.lua
```

This keeps the codebase easier to maintain and prevents `main.lua` from becoming excessively large.

Modules can then be loaded using Lua's `require` function:

```lua
local Helpers = require("plugins.myplugin.util.helpers")
```

The exact module path depends on the plugin's directory structure.

---

## Reading Existing Plugins

One of the fastest ways to learn KOReader plugin development is by examining existing plugins.

Useful things to look for include:

- How menu entries are registered
- How dialogs are displayed
- How settings are stored
- How events are handled
- How widgets are created
- How plugin initialization is performed

Many commonly used patterns appear repeatedly across the official plugins bundled with KOReader.

---

## Minimal Plugin Structure

At minimum, a valid plugin requires:

```text
myplugin.koplugin/
├── _meta.lua
└── main.lua
```

Everything else is optional and depends on the plugin's functionality.
