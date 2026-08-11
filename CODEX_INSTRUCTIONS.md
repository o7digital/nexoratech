# Instructions Codex — IATERA México

Tu travailles sur le site **IATERA México**, un site premium en espagnol destiné au marché mexicain.

## Objectif

Finaliser et personnaliser un site commercial pour une entreprise proposant :

- soporte técnico ;
- ciberseguridad ;
- desarrollo web ;
- posicionamiento SEO.

Le site doit inspirer immédiatement la confiance, la compétence technique et la capacité à générer des résultats commerciaux.

## Direction visuelle à préserver

- Conserver l’identité éditoriale crème, noire et corail.
- Ne pas transformer le site en template informatique bleu générique.
- Conserver la typographie très grande, la grille éditoriale, les séparateurs fins et les illustrations géométriques créées en CSS.
- Maintenir une esthétique premium, sobre et contemporaine adaptée à des dirigeants de PME au Mexique.
- Éviter les photos stock clichés : hackers à capuche, cadenas 3D, circuits futuristes ou poignées de main.
- Les animations doivent rester discrètes et respecter `prefers-reduced-motion`.

## Contenu à personnaliser

Remplacer uniquement lorsque les informations réelles du client sont fournies :

- `IATERA` est le nom commercial définitif ;
- centraliser toute future adresse réelle dans la configuration du site ;
- la ville et la zone de couverture ;
- les liens de contact et WhatsApp ;
- les chiffres démonstratifs de la section résultats ;
- les prestations exactes, horaires et modalités de support ;
- le logo et les mentions légales.

Ne jamais inventer de témoignages, certifications, clients ou résultats. Si une donnée manque, conserver clairement un placeholder ou demander l’information.

## Exigences techniques

- Conserver la stack actuelle Vinext / React / TypeScript.
- Le contenu principal se trouve dans `app/page.tsx`.
- Le système visuel et responsive se trouve dans `app/globals.css`.
- Conserver `app/layout.tsx` avec `lang="es-MX"` et les métadonnées SEO espagnoles.
- Ne pas ajouter une dépendance si le résultat peut être obtenu proprement en CSS.
- Conserver la navigation par ancres, les états hover, le focus clavier et le responsive.
- Vérifier l’absence de débordement horizontal à 390 px, 768 px, 1024 px et 1440 px.
- Conserver un bon contraste et des libellés accessibles.
- Ne pas supprimer `.openai/hosting.json` : il identifie le site preview existant.

## SEO à conserver ou améliorer

- Un seul `h1` clair.
- Hiérarchie logique des `h2` et `h3`.
- Title et meta description orientés Mexique.
- Textes naturels en espagnol mexicain.
- Termes stratégiques à intégrer sans répétition artificielle : soporte técnico para empresas, ciberseguridad en México, desarrollo web, páginas web empresariales, SEO en México et soporte TI.
- Ajouter les données structurées `Organization` et `ProfessionalService` lorsque les coordonnées réelles sont disponibles.

## Travail demandé à Codex

1. Lire `app/page.tsx`, `app/globals.css` et `app/layout.tsx` avant toute modification.
2. Préserver la direction créative actuelle et personnaliser uniquement ce qui est demandé.
3. Vérifier le rendu desktop et mobile après chaque modification importante.
4. Tester tous les liens internes et les appels à l’action.
5. Exécuter la validation de production prévue par le projet.
6. Publier une nouvelle version preview uniquement lorsque le rendu est complet et sans erreur.

## Prompt court à copier-coller

> Reprends le projet Astro IATERA présent dans ce dossier. Lis d’abord `CODEX_INSTRUCTIONS.md`, puis les composants et styles dans `src/`. Conserve la direction premium sombre et technologique ainsi que la grille éditoriale. N’invente aucun résultat, témoignage ou client. Vérifie ensuite le responsive, les liens, l’accessibilité et la production build avant de publier une nouvelle preview.

## Lancement local

Prérequis : Node.js 22.13 ou supérieur.

```bash
npm ci
npm run dev
```

Pour la validation finale :

```bash
npm run build
```
