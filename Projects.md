# PROJECTS SECTION DIRECTIVES ("Scandi-Café" Aesthetic)

## 1. DESIGN PHILOSOPHY
Implement the "Minimalist Scandinavian Coffee Shop" vibe. The aesthetic must be warm, airy, and organic, rejecting standard "dark mode dev" tropes. Focus on texture, natural light simulation, and significant whitespace.

## 2. VISUAL LANGUAGE

### Color Palette (Strict adherence)
* **Global Background:** Cream/Off-white (e.g., `#F8F5F0` or very pale oatmeal). Must feel like unbleached paper.
* **Card Backgrounds:** Pure white or very light "latte foam" beige to create subtle depth against global background.
* **Primary Text:** Deep Espresso Brown (`#3E3227`) or warm Charcoal (`#333333`). **PROHIBITED:** Pure black (`#000000`).
* **Accents (Links/Highlights):** Muted Sage Green or warm muted Terracotta.
* **Tech Badges:** Monochromatic. Light beige background with dark brown text. Resembles artisanal coffee labels. No bright brand colors.

### Typography
* **Project Titles:** Warm, modern serif (e.g., Merriweather, Lora). Feels editorial.
* **Body Text & Badges:** Clean humanist sans-serif (e.g., Work Sans, Open Sans). High readability.

### UI Components
* **Borders:** Softly rounded. `border-radius: 12px-16px`.
* **Shadows:** Extremely soft, diffused, distant. Simulates natural morning light, not harsh digital drops.
* **Icons (GitHub/Demo):** Outline style only. Color must match Primary Text (espresso brown). No solid fills.

## 3. LAYOUT SPECIFICATIONS: "The Countertop Spread"

Implement "Concept B" designed to break rigid grids.

* **Structure:** Staggered 2x2 layout. It must feel organic, like notebooks tossed loosely onto a table.
* **Offset:** The second column must start vertically lower than the first column to create the staggered effect. Use significant vertical margin offsets.
* **Spacing:** maximize "airy" whitespace between cards. Do not pack densely.
* **Background Decor (Optional):** Very subtle, abstract organic shapes (e.g., pale blobs) behind cards to connect space.

## 4. CARD CONTENT SCHEMA (Per Project)
1.  **Title:** Serif font. Larger weight.
2.  **Description:** Sans-serif. Concise summary.
3.  **Tech Stack:** Flex wrap container of monochromatic badges.
4.  **Links:** Row of outline icons (GitHub, Live Demo, etc.) colored in espresso brown.

----------Minimalist

# Scandi-Café Design System Directives

## 1. Design Philosophy

* **Aesthetic Goal:** "Minimalist Scandinavian Coffee Shop."
* **Key Tones:** Warm, airy, organic, tactile.
* **Anti-Patterns:** Reject standard "dark mode dev" tropes, high-contrast neon colors, and harsh digital effects.
* **Focus:** Emphasize texture (like unbleached paper), simulation of natural morning light, and significant, breathable whitespace.

## 2. Visual Language

### Color Palette (Strict Adherence)

| Context | Color Value | Description | Do Not Use |
| :--- | :--- | :--- | :--- |
| **Global Background** | `#F8F5F0` (or similar pale oatmeal) | Feels like organic, unbleached paper. | Pure White (`#FFFFFF`) |
| **Card Background** | `#FFFFFF` or very light beige | Creates subtle depth against the global background. | Dark grays, pure black |
| **Primary Text** | `#3E3227` (Deep Espresso) or `#333333` (Warm Charcoal) | Soft, warm contrast. | Pure Black (`#000000`) |
| **Accents (Links/Highlights)** | Muted Sage Green or warm, muted Terracotta | Organic, non-disruptive highlights. | Bright, saturated blues, reds, or greens |
| **Tech Badges** | Monochromatic Beige | Light beige background with dark brown text. Resembles artisanal labels. | Brand colors for tech stacks |

### Typography

* **Project Titles & Headings:** Use a warm, modern serif font (e.g., Merriweather, Lora) with a larger weight for an editorial feel.
* **Body Text, Badges, & Interface:** Use a clean humanist sans-serif font (e.g., Work Sans, Open Sans) for high readability.

### UI Components & Effects

* **Borders:** Softly rounded corners. Recommended `border-radius: 12px-16px`.
* **Shadows:** Extremely soft, diffused, and distant. Must simulate natural morning light, not harsh digital drop shadows. Avoid sharp, dark shadows.
* **Icons:**
    * **Style:** Outline style only. No solid fills.
    * **Color:** Match the Primary Text color (e.g., Deep Espresso Brown).
* **Buttons/Links:** Text links should use the accent color. Icon links (like GitHub) should follow the icon rules above.

## 3. Layout Specifications: "The Countertop Spread"

* **Concept:** Break rigid grid structures to mimic notebooks tossed loosely onto a table.
* **Structure:** Implement a staggered grid (e.g., a 2x2 layout).
* **Staggered Effect:** The second column must start vertically lower than the first column to create a distinct, organic offset. Use significant vertical margin offsets.
* **Spacing:** Maximize "airy" whitespace between cards. Do not pack content densely.
* **Background Decor (Optional):** Use very subtle, abstract organic shapes or real-world objects (plants, mugs) in the background to connect the space, as seen in reference imagery.

## 4. Card Content Schema (Per Project)

Each project card must follow this structure:

1.  **Title:** Serif font, heavier weight.
2.  **Description:** Sans-serif font, concise summary of the project.
3.  **Tech Stack:** A flex-wrap container of **monochromatic badges** (light beige bg, dark brown text).
4.  **Links:** A row of outline icons (GitHub, Live Demo, etc.) colored in the primary text color.
