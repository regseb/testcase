export default {
    patterns: [
        "!/.git/",
        "!/node_modules/",
        "!/_site/",
        "!*.swp",
        "**",
    ],
    checkers: [
        {
            patterns: "*.md",
            linters: "markdownlint",
        }, {
            patterns: "*.json",
            linters: { "jsonlint-mod": null },
        }, {
            patterns: "*.yml",
            linters: { "yaml-lint": null },
        },
    ],
};
