# Design System: Alicia Ambroise (Jules Studio Aesthetic)

Ce document définit les fondations visuelles pour la reproduction "Pixel-Perfect" du site d'Alicia Ambroise, avec une direction artistique inspirée par Jules Studio : minimalisme haut de gamme, typographie contrastée et micro-animations fluides.

## 🎨 Color Palette

Les couleurs sont sélectionnées pour créer une atmosphère "Papier Premium" et "Intemporelle".

| Token          | Value                       | Hex       | Description                                           |
| :------------- | :-------------------------- | :-------- | :---------------------------------------------------- |
| `brand-bg`     | `var(--color-brand-bg)`     | `#EAE9E2` | Fond principal, texture papier beige clair.           |
| `brand-card`   | `var(--color-brand-card)`   | `#E3E2DB` | Fond des cartes et sections secondaires.              |
| `brand-dark`   | `var(--color-brand-dark)`   | `#1A1A1A` | Texte principal et éléments de contraste.             |
| `brand-muted`  | `var(--color-brand-muted)`  | `#1A1A1A80`| Texte secondaire, légendes et éléments atténués.      |
| `brand-accent` | `var(--color-brand-accent)` | `#1A1A1A` | Accentuation (monochromatique pour plus de luxe).     |
| `white`        | `var(--color-white)`        | `#F5F4F4` | Blanc cassé premium utilisé pour les fonds de cartes. |

---

## 字体 Typography

Le contraste entre une Serif élégante et une Sans-Serif fonctionnelle est la clé de l'esthétique.

### Primary Font: **Libre Caslon Text** (Serif)

Utilisée pour les titres et les éléments narratifs.

- **Usage** : `h1`, `h2`, `h3`, `.italic`.
- **Style** : Elégant, classique, avec des ligatures subtiles.
- **Tokens** : `--font-serif`.

### Secondary Font: **Geist** (Sans-Serif)

Utilisée pour le corps de texte, la navigation et les petits détails.

- **Usage** : `p`, `span`, `button`, navigation.
- **Style** : Moderne, lisible, géométrique.
- **Tokens** : `--font-sans`.

---

## 🪄 Motion & Physics

Les animations ne sont pas de simples transitions, elles doivent donner une sensation de "légèreté" et de "qualité".

| Animation    | Duration | Easing                          | Effect                                              |
| :----------- | :------- | :------------------------------ | :-------------------------------------------------- |
| **Slide Up** | `1.2s`   | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrée fluide des titres par le bas.                |
| **Fade In**  | `1.5s`   | `ease-out`                      | Apparition douce des images et décors.              |
| **Stagger**  | `+0.1s`  | -                               | Délai progressif pour créer un rythme d'apparition. |

---

## 📐 Layout & Rhythm

- **Radius** : `rounded-[1.25rem]` pour les conteneurs majeurs, créant un aspect doux et organique.
- **Width** : Largeur maximale standardisée à `max-w-8xl` (88rem) pour tous les conteneurs principaux afin d'assurer un alignement vertical parfait.
- **Spacing** : Utilisation de marges généreuses (`px-8 md:px-16`, `gap-16 md:gap-24`) pour laisser respirer le contenu.
- **Shadows** : Ombres très diffuses (`shadow-sm` avec bordures `border-black/5`) pour simuler la profondeur sur du papier.

---

## ✨ Design Spells (Micro-interactions)

1. **Image Hover** : `hover:scale-105 transition-transform duration-1000`. L'image s'agrandit très lentement, presque imperceptiblement.
2. **Button Physics** : `active:scale-95`. Retour tactile au clic.
3. **Background Pulse** : Animation pulsée sur les éléments décoratifs circulaires pour un effet de "souffle" de l'interface.
