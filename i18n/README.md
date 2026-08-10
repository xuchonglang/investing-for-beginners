# Bilingual repository plan

This repository keeps Chinese and English content in the same GitHub repo.

## Source of truth

Chinese content remains the source of truth unless a file explicitly says otherwise.

## Directory mapping

| Chinese path | English path |
| --- | --- |
| `README.md` | `README.en.md` |
| `content/README.md` | `en/content/README.md` |
| `content/stocks/{slug}.md` | `en/content/stocks/{slug}.md` |
| `content/options/{slug}.md` | `en/content/options/{slug}.md` |
| `content/crypto/{slug}.md` | `en/content/crypto/{slug}.md` |
| `guides/投资入门指南.md` | `en/guides/investing-for-beginners.md` |
| `glossary/README.md` | `en/glossary/README.md` |

## Rules

1. Keep existing Chinese URLs stable.
2. Put English files under `en/` with the same article slug whenever possible.
3. Use shared images from `assets/` instead of duplicating images per language.
4. Every English article should link back to its Chinese source.
5. Every Chinese article can later add an English counterpart link when the translation exists.
6. Do not create thin placeholder pages for SEO. Translate in batches and keep each page useful.

## Recommended batch order

1. Root README, beginner guide, glossary, and content index.
2. Top 50 beginner terms across stocks, options, and crypto.
3. Risk-control articles.
4. Advanced accounting, options microstructure, and on-chain security articles.

## Current status

The first English layer is in place:

- `README.en.md`
- `en/README.md`
- `en/guides/investing-for-beginners.md`
- `en/glossary/README.md`
- `en/content/README.md`

The full `en/content/{stocks,options,crypto}/` article mirror should be translated in batches.
