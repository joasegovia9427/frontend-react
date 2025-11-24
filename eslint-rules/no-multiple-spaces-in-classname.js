/**
 * ESLint rule to detect and fix multiple spaces in className attributes
 */
export default {
    meta: {
        type: 'problem',
        fixable: 'code',
        messages: {
            multipleSpaces:
                'Multiple consecutive spaces found in className. Use single spaces.',
        },
    },
    create(context) {
        return {
            JSXAttribute(node) {
                if (node.name.name === 'className' && node.value) {
                    let classNameValue = null;
                    let quote = '"';

                    // Handle string literals
                    if (
                        node.value.type === 'Literal' &&
                        typeof node.value.value === 'string'
                    ) {
                        classNameValue = node.value.value;
                        const sourceCode = context.getSourceCode();
                        const text = sourceCode.getText(node.value);
                        quote =
                            text[0] === '"' || text[0] === "'" ? text[0] : '"';
                    }
                    // Handle template literals (though less common for className)
                    else if (
                        node.value.type === 'JSXExpressionContainer' &&
                        node.value.expression.type === 'TemplateLiteral' &&
                        node.value.expression.quasis.length === 1
                    ) {
                        classNameValue =
                            node.value.expression.quasis[0].value.cooked;
                    }

                    if (classNameValue && /\s{2,}/.test(classNameValue)) {
                        // Replace multiple spaces with single space
                        const fixedValue = classNameValue
                            .replace(/\s+/g, ' ')
                            .trim();

                        context.report({
                            node: node.value,
                            messageId: 'multipleSpaces',
                            fix(fixer) {
                                const range = node.value.range;
                                return fixer.replaceTextRange(
                                    range,
                                    `${quote}${fixedValue}${quote}`
                                );
                            },
                        });
                    }
                }
            },
        };
    },
};
