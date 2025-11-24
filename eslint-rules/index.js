import noMultipleSpacesInClassName from './no-multiple-spaces-in-classname.js';

export default {
    rules: {
        'no-multiple-spaces-in-classname':
            noMultipleSpacesInClassName.default || noMultipleSpacesInClassName,
    },
};
