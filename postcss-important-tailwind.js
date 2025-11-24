/**
 * PostCSS plugin to add !important to all Tailwind utility classes
 * This ensures className overrides take precedence over global styles
 */
export default function postcssImportantTailwind() {
    return {
        postcssPlugin: 'postcss-important-tailwind',
        Once(root) {
            root.walkRules(rule => {
                // Target all Tailwind utility classes (anything that starts with .)
                // Exclude: :root, @ rules, pseudo-elements, and element selectors
                // This ensures className overrides take precedence over global styles
                if (
                    rule.selector.startsWith('.') &&
                    !rule.selector.includes(':root') &&
                    !rule.selector.includes('@') &&
                    !rule.selector.includes('::') &&
                    // Exclude element selectors (h1, p, etc.) - only target class selectors
                    !rule.selector.match(/^(h[1-6]|p|body|html|div|span)\s/)
                ) {
                    rule.walkDecls(decl => {
                        if (!decl.important) {
                            decl.important = true;
                        }
                    });
                }
            });
        },
    };
}

postcssImportantTailwind.postcss = true;
