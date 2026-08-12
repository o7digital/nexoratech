# IATERA México

Site vitrine multilingue d’IATERA, construit avec Astro, React et TypeScript.

## Développement

Prérequis : Node.js 22.13 ou plus récent.

```bash
npm ci
npm run dev
```

Commandes de validation :

```bash
npm run lint
npm run build
npm test
```

La sortie statique de production est générée dans `dist/`.

## Domaine et indexation

Tant que le domaine final n’est pas connu, le site utilise
`https://infrasegura-one.vercel.app` pour les URL absolues et reste volontairement
en `noindex`. Le fichier `robots.txt` bloque aussi l’exploration de cette version de
développement.

Lorsque le domaine final est prêt, définir `PUBLIC_SITE_URL` sans slash final :

```bash
PUBLIC_SITE_URL=https://www.example.com npm run build
```

Cette seule variable met à jour le site Astro, les canonical, `hreflang`, Open Graph,
les données structurées, le sitemap et `robots.txt`, puis active l’indexation.

## Contenu et configuration

- `src/config/site.ts` : identité, domaine, zones desservies et routes.
- `src/config/forms.ts` : destination centralisée des formulaires.
- `src/content/i18n.ts` : textes généraux et traductions.
- `src/content/home.ts` : contenu des cartes de services par langue.
- `src/content/services.ts` : pages SEO de services en espagnol.
- `src/styles/global.css` : système visuel et responsive.

Ne pas inventer d’adresse, de coordonnées, de clients, de certifications ou de
résultats. Les informations légales et commerciales réelles doivent être ajoutées
à la configuration lorsqu’elles sont confirmées.

Le fichier `.openai/hosting.json` appartient au projet de preview et doit être
conservé.
