# 📋 TODO - Mise à niveau du Portfolio

## 🔄 CI/CD & Auto-merge

- [x] Supprimer `renovate.json`
- [x] Créer `.github/dependabot.yml`
- [x] Créer `.github/workflows/auto-merge.yml`
- [x] Refaire `.github/workflows/ci.yml` (remplace quality.yml)
- [x] Mettre à jour `.github/workflows/release.yml`
- [x] Supprimer `.github/workflows/quality.yml`
- [x] Supprimer `.github/workflows/lighthouse.yml` (intégré dans CI)
- [x] Supprimer `.github/workflows/lighthouse-live.yml`

## ��️ Qualité du Code

- [x] Migrer vers pnpm
- [x] Mettre à jour `package.json` (scripts, dépendances)
- [x] Créer `.prettierrc`
- [x] Créer `.prettierignore`
- [x] Mettre à jour ESLint (flat config `eslint.config.mjs`)
- [x] Créer `.husky/pre-commit`
- [x] Créer `.husky/commit-msg`
- [x] Mettre à jour `.releaserc.json`
- [x] Mettre à jour `tsconfig.json` (strict)

## 🔍 SEO

- [x] Refaire `app/layout.tsx` (métadonnées complètes)
- [x] Créer `app/robots.ts`
- [x] Créer `app/sitemap.ts`
- [x] Créer `app/manifest.ts`
- [x] Créer `components/seo/json-ld.tsx`
- [x] Ajouter les favicons (ico, svg, apple-touch-icon, icon-192, icon-512)
- [x] Ajouter `public/og-image.png`

## ⚡ Performance & Static Export

- [x] Mettre à jour `next.config.js` (output: export)
- [x] Créer `public/_headers` (cache/sécurité)

## ♿ Accessibilité

- [x] Ajouter skip link dans layout
- [x] Vérifier `lang="fr"` dans html
- [x] Ajouter `id="main-content"` sur le main

## 📦 Dépendances mises à jour

- [x] Next.js 13 → 15.5
- [x] React 18 → 19
- [x] TypeScript 5.7+
- [x] Tailwind CSS 3 → 4
- [x] ESLint 8 → 9
- [x] Toutes les autres dépendances

## 🧹 Nettoyage

- [x] Supprimer `Dockerfile`
- [x] Supprimer `docker-compose.yml`
- [x] Supprimer `renovate.json`
- [x] Supprimer `.eslintrc.json` (remplacé par eslint.config.mjs)
- [x] Supprimer `tailwind.config.ts` (config dans CSS avec Tailwind v4)

## ✅ Validations

- [x] Build réussi (`pnpm run build`)
- [x] Lint réussi (`pnpm run lint`)
- [x] Type-check réussi (`pnpm run type-check`)
- [x] Formatage appliqué (`pnpm run format`)

---

**Progression:** 30/30 tâches complétées ✅🎉

## 📝 Notes

- Le projet utilise maintenant **pnpm** au lieu de npm
- Tailwind CSS v4 utilise `@theme` dans le CSS au lieu de `tailwind.config.ts`
- Les PRs Dependabot seront auto-mergées grâce au workflow `auto-merge.yml`
- Export statique activé pour des performances maximales
- SEO complet avec métadonnées, Open Graph, Twitter Cards, JSON-LD, sitemap et robots.txt
