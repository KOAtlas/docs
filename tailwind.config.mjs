export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#faf8f3",
          100: "#f4f0e6",
          200: "#e8e0cc",
          300: "#d6c9a8",
        },
        ko: {
          brown: "#3d2b1f",
          dark: "#1c1008",
          ink: "#2a1f14",
          warm: "#5c3d28",
          amber: "#b87333",
          rust: "#c45c26",
          muted: "#8a7060",
          light: "#a89070",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ['"DM Sans"', "sans-serif"],
      },
      typography: (theme) => ({
        ko: {
          css: {
            "--tw-prose-body": theme("colors.ko.brown"),
            "--tw-prose-headings": theme("colors.ko.dark"),
            "--tw-prose-lead": theme("colors.ko.muted"),
            "--tw-prose-links": theme("colors.ko.amber"),
            "--tw-prose-bold": theme("colors.ko.brown"),
            "--tw-prose-counters": theme("colors.ko.muted"),
            "--tw-prose-bullets": theme("colors.ko.amber"),
            "--tw-prose-hr": theme("colors.cream.200"),
            "--tw-prose-quotes": theme("colors.ko.warm"),
            "--tw-prose-quote-borders": theme("colors.ko.amber"),
            "--tw-prose-captions": theme("colors.ko.muted"),
            "--tw-prose-code": theme("colors.ko.brown"),
            "--tw-prose-pre-code": theme("colors.cream.50"),
            "--tw-prose-pre-bg": theme("colors.ko.ink"),
            "--tw-prose-th-borders": theme("colors.cream.300"),
            "--tw-prose-td-borders": theme("colors.cream.200"),
            maxWidth: "none",

            // ── Headings ──
            h1: {
              fontFamily: '"JetBrains Mono", monospace',
              fontWeight: "600",
              letterSpacing: "-0.025em",
              fontSize: "2.25rem",
              lineHeight: "1.25",
              marginTop: "2rem",
              marginBottom: "1rem",
            },
            h2: {
              fontFamily: '"JetBrains Mono", monospace',
              fontWeight: "600",
              letterSpacing: "-0.015em",
              fontSize: "1.875rem",
              lineHeight: "1.25",
              marginTop: "2.5rem",
              marginBottom: "0.75rem",
              borderBottom: `1px solid ${theme("colors.cream.200")}`,
              paddingBottom: "0.5rem",
            },
            h3: {
              fontFamily: '"JetBrains Mono", monospace',
              fontWeight: "600",
              fontSize: "1.5rem",
              marginTop: "2rem",
              marginBottom: "0.75rem",
            },
            h4: {
              fontFamily: '"JetBrains Mono", monospace',
              fontWeight: "500",
              fontSize: "1.25rem",
              marginTop: "1.5rem",
              marginBottom: "0.5rem",
            },
            h5: {
              fontFamily: '"JetBrains Mono", monospace',
              fontWeight: "500",
              fontSize: "1.125rem",
              marginTop: "1.5rem",
              marginBottom: "0.5rem",
            },
            h6: {
              fontFamily: '"JetBrains Mono", monospace',
              fontWeight: "500",
              fontSize: "1rem",
              marginTop: "1rem",
              marginBottom: "0.5rem",
            },

            // ── Paragraphs & Text ──
            p: {
              marginTop: "1rem",
              marginBottom: "1rem",
              lineHeight: "1.625",
              fontSize: "0.9375rem",
            },

            // ── Inline Code ──
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            code: {
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.8em",
              background: theme("colors.cream.200"),
              color: theme("colors.ko.brown"),
              padding: "1px 5px",
              borderRadius: "3px",
              fontWeight: "400",
            },

            // ── Code Blocks ──
            pre: {
              background: theme("colors.ko.ink"),
              color: theme("colors.cream.100"),
              borderRadius: "6px",
              border: `1px solid ${theme("colors.ko.warm")}33`,
              padding: "1rem",
              marginTop: "1rem",
              marginBottom: "1rem",
              overflow: "auto",
            },
            "pre code": {
              background: "transparent",
              padding: "0",
              color: "inherit",
              fontSize: "0.875em",
              fontWeight: "400",
            },

            // ── Lists ──
            ul: {
              marginTop: "1rem",
              marginBottom: "1rem",
              paddingLeft: "1.5rem",
            },
            ol: {
              marginTop: "1rem",
              marginBottom: "1rem",
              paddingLeft: "1.5rem",
            },
            li: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              lineHeight: "1.625",
            },
            "ul > li": {
              paddingLeft: "0.375rem",
            },
            "ol > li": {
              paddingLeft: "0.375rem",
            },

            // ── Links ──
            a: {
              color: "#5a5a6e",
              textDecorationColor: "rgba(90, 90, 110, 0.3)",
              textUnderlineOffset: "2px",
              fontWeight: "500",
              "&:hover": {
                color: theme("colors.ko.dark"),
                textDecorationColor: "#5a5a6e",
              },
            },

            // ── Blockquote ──
            blockquote: {
              borderLeftColor: theme("colors.ko.amber"),
              borderLeftWidth: "4px",
              background: theme("colors.cream.100"),
              borderRadius: "0 4px 4px 0",
              padding: "0.75rem 1rem",
              fontStyle: "normal",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              color: theme("colors.ko.muted"),
            },
            "blockquote p": {
              margin: "0",
              fontStyle: "italic",
            },

            // ── Horizontal Rule ──
            hr: {
              borderColor: theme("colors.cream.200"),
              marginTop: "2rem",
              marginBottom: "2rem",
            },

            // ── Tables ──
            table: {
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              width: "100%",
            },
            "thead th": {
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.75em",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontWeight: "600",
              background: theme("colors.cream.100"),
              borderBottom: `2px solid ${theme("colors.cream.300")}`,
              padding: "0.75rem 1rem",
              textAlign: "left",
            },
            "tbody td": {
              padding: "0.625rem 1rem",
              borderBottom: `1px solid ${theme("colors.cream.200")}`,
            },
            "tbody tr:hover": {
              backgroundColor: theme("colors.cream.50"),
            },

            // ── Strong / Bold ──
            strong: {
              fontWeight: "600",
              color: theme("colors.ko.brown"),
            },

            // ── Emphasis ──
            em: {
              fontStyle: "italic",
            },

            // ── Captions ──
            figcaption: {
              fontSize: "0.875em",
              color: theme("colors.ko.muted"),
              marginTop: "0.5rem",
            },

            // ── Strikethrough & Mark ──
            del: {
              color: theme("colors.ko.muted"),
              textDecoration: "line-through",
            },
            mark: {
              backgroundColor: "rgba(184, 115, 51, 0.1)",
              padding: "2px 4px",
              borderRadius: "2px",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
