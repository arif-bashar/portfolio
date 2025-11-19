# Styling Guide - Modern CSS Modules Approach

This project uses **CSS Modules with SCSS** for a modern, maintainable styling approach.

## Structure

```
styles/
├── variables/          # SCSS variables (colors, typography)
│   ├── _colors.scss
│   ├── _typography.scss
│   └── _index.scss
├── global/            # Global styles (base, typography, cursor)
│   ├── _base.scss
│   ├── _typography.scss
│   ├── _cursor.scss
│   └── _index.scss
├── fonts.scss         # Font definitions
└── styles.scss        # Main entry point

components/
└── [Component].module.scss  # Component-scoped styles
```

## How It Works

### 1. CSS Modules
- Files named `*.module.scss` are automatically scoped to components
- Class names are hashed at build time (prevents conflicts)
- Import styles as an object: `import styles from './Component.module.scss'`
- Use: `className={styles.className}`

### 2. Global Styles
- Base styles (html, body, typography) in `styles/global/`
- Imported once in `app/layout.tsx` via `styles/styles.scss`
- Use for styles that should apply globally

### 3. Variables
- Shared SCSS variables in `styles/variables/`
- Import in any `.module.scss` file: `@import "../../styles/variables/index"`

## Migration Pattern

### Before (Global Styles):
```tsx
// Component
<div className="browser">
  <div className="browser-top">...</div>
</div>

// styles.scss
.browser { ... }
.browser-top { ... }
```

### After (CSS Modules):
```tsx
// Component
import styles from './Component.module.scss'

<div className={styles.browser}>
  <div className={styles.browserTop}>...</div>
</div>

// Component.module.scss
@import "../../styles/variables/index";

.browser { ... }
.browserTop { ... }  // camelCase in CSS Modules
```

## Benefits

✅ **Scoped Styles** - No naming conflicts between components
✅ **Better Organization** - Styles live next to components
✅ **Type Safety** - TypeScript autocomplete for class names
✅ **Tree Shaking** - Unused styles are removed
✅ **Maintainability** - Easier to find and update styles

## Converting Existing Components

1. Create `ComponentName.module.scss` next to component
2. Copy relevant styles from `styles/styles.scss`
3. Convert kebab-case to camelCase (`.browser-top` → `.browserTop`)
4. Import variables: `@import "../../styles/variables/index"`
5. Import in component: `import styles from './ComponentName.module.scss'`
6. Update className usage: `className={styles.className}`

## Example: Header Component

**Before:**
```tsx
<header className="header">
  <div className="inner-header">...</div>
</header>
```

**After:**
```tsx
import styles from './header.module.scss'

<header className={styles.header}>
  <div className={styles.innerHeader}>...</div>
</header>
```

## Remaining Components to Migrate

- Footer
- IntroScreen
- AboutSection
- ExperienceSection
- ProjectsSection
- MenuButton
- SectionNumber
- Tag

Follow the same pattern for each component!

