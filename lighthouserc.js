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
            "categories:seo": ["error", { minScore: 0.9 }],
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
