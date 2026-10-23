const home = "http://localhost/index.html"

// Seuils bloquants. La performance varie d'une machine de CI à l'autre : seuil un peu plus bas, sur la médiane de 3 passes.
const quality = {
  "categories:accessibility": ["error", { minScore: 0.9 }],
  "categories:best-practices": ["error", { minScore: 0.9 }],
}

module.exports = {
  ci: {
    collect: {
      staticDistDir: "./out",
      url: [
        home,
        "http://localhost/demos/tapissier/index.html",
        "http://localhost/demos/food-truck/index.html",
        "http://localhost/demos/depot-vente/index.html",
        "http://localhost/demos/courtier-auto/index.html",
      ],
      numberOfRuns: 3,
    },
    assert: {
      assertMatrix: [
        {
          matchingUrlPattern: ".*/index\\.html$",
          assertions: quality,
        },
        {
          // Les démos sont volontairement en noindex : SEO et performance ne sont exigés que sur l'accueil.
          matchingUrlPattern: "^http://localhost(:\\d+)?/index\\.html$",
          assertions: {
            // Site volontairement hors index (noindex) depuis la fusion dans yoanmartins.fr : le score SEO
            // de Lighthouse pénalise précisément ce blocage. À rétablir si le portfolio est republié.
            "categories:seo": "off",
            "categories:performance": ["error", { minScore: 0.75, aggregationMethod: "median" }],
          },
        },
      ],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}
