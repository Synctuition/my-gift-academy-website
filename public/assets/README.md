# My Gift Academy — Asset Drop-In Guide

Place production assets in the folders below. The site references these paths directly.

## Folder Structure

```
public/assets/
├── golden-boy/          # Golden Boy motif (already populated)
│   ├── golden_boy.png   # Main logo / watermark
│   └── goldenboy_*.png  # Variants
├── logos/               # Brand logos (already populated)
│   ├── mindspa-logo.png
│   └── my-gift-academy.*
├── hero/                # Optional hero background
│   └── hero.jpg         # Drop a 1920×1080+ cinematic still here
│                        # Uncomment hero image code in src/sections/Hero.tsx
└── movie/               # My Gift movie assets
    └── my-gift-movie-logo.png
```

## Hero Background

The hero section uses a CSS gradient by default. To add a cinematic still:

1. Place your image at `public/assets/hero/hero.jpg` (recommended: 1920×1080 or larger, dark/moody tone)
2. Open `src/sections/Hero.tsx`
3. Uncomment the "Optional hero still" block (lines ~14–19)
4. The overlays will blend the image with the dark theme automatically

## Image Recommendations

| Asset | Format | Size | Notes |
|-------|--------|------|-------|
| Hero background | JPG | 1920×1080+ | Dark, cinematic, moody |
| Golden Boy | PNG | Any | Transparent background |
| Brand logos | SVG/PNG | Any | Transparent background preferred |

## Tips

- Keep JPGs under 500KB (use quality 80, progressive)
- Use `auto=format` on Unsplash URLs for WebP support
- All images should be dark/warm-toned to match the design system
