# O’Litchi – Trae .rules

[project.context]
name = "O’Litchi"
type = "Site vitrine SEO"
stack = "Next.js 15 (Pages Router), TypeScript, Tailwind CSS, shadcn/ui"
constraints = [
  "Pas de commande en ligne",
  "Performances et SEO local prioritaires",
  "Orthographe marque: 'O’Litchi' uniquement",
]

[architecture]
folders = [
  "src/components",
  "src/layouts",
  "src/constants",
  "src/styles",
  "public/images",
  "pages",
]
notes = [
  "Mettre tous les tokens/données UI réutilisables dans src/constants (couleurs, icônes, liens, items de navigation).",
  "Deux variantes d’UI: Desktop/Mobile.",
  "Base: responsive CSS (container queries). Pour divergences fortes: composants spécifiques Mobile via hooks media."
]

[ui.guidelines]
design = [
  "Utiliser Tailwind; breakpoints Tailwind + container queries.",
  "Couleurs: dérivées photo camion O’Litchi; accent orange chaud + verts.",
  "Typo titres: style 'Sign Language-like' pour le logo/titres choisis.",
  "Images au format WebP, <Image /> Next optimisé.",
]
components = [
  "Préfixer composants mobile par 'Mobile' (ex: MobileNav) si variante dédiée.",
  "Exporter des 'variants' via props plutôt que dupliquer les fichiers quand possible.",
]

[routing]
rules = [
  "Une seule URL par contenu (SEO).",
  "N’utiliser Middleware UA -> rewrite (/m, /desktop) que si exigé business et avec <link rel='canonical'>.",
]

[seo]
rules = [
  "pages: /, /menu, /a-propos, /galerie, /localisation-horaires, /contact, /mentions-legales, /confidentialite",
  "Balises meta par page + Open Graph + JSON-LD (LocalBusiness).",
  "Sitemap + robots.txt.",
]
local = [
  "Ciblage 'food truck Les Ulis' et cuisine afro-antillaise.",
]

[performance]
rules = [
  "next/dynamic pour gros blocs non critiques.",
  "Optimiser images (WebP), limiter JS côté client.",
  "ISR/revalidate sur pages non strictement statiques.",
]

[accessibility]
rules = [
  "Contrastes AA min.",
  "Alt text descriptifs, ordre tab logique.",
]

[dev.conventions]
typescript = [
  "Types explicites pour constants (ex: NavItem).",
]
naming = [
  "Fichiers PascalCase pour composants, kebab-case pour assets.",
]
git = [
  "Commits conventionnels: feat:, fix:, perf:, refactor:, chore:, docs:, style:",
]

[implementation.desktop_mobile]
base = [
  "Par défaut: CSS responsive via container queries.",
  "Si swap de composants: 'useMediaQuery' côté client (ex: react-responsive).",
]
advanced = [
  "Éviter réécritures UA; si imposé: configurer Vary/User-Agent, canoniques, et tests CDN.",
]

[testing]
rules = [
  "Vérifier SSR + hydration des composants avec rendu conditionnel.",
  "Lighthouse ≥ 90 sur Mobile & Desktop.",
]

[do_not]
items = [
  "Ne jamais nommer la marque 'Olitchy'.",
  "Ne pas intégrer de prestas de livraison externes.",
]
