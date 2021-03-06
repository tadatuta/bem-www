({
    block: 'b-page',
    title: 'b-form-slider_type_range',
    head: [
        { elem: 'css', url: '_20range_bem.css', ie: false },
        { elem: 'css', url: '_20range_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_20range_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_20range_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_20range_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_20range_bem.js' }
    ],
    content: [
        {
            block: 'i-lego-example',
            content: [
                {
                    block: 'b-form-slider',
                    mods: { type: 'range', theme: 'grey', size: 'xs' },
                    js: {
                        min: 10,
                        max: 90,
                        scale: [
                            { value: 0, label: '0', step: 10 },
                            { value: 100, label: '100' }
                        ]
                    },
                    content: {
                        elem: 'info',
                        elemMods: { preset: 'inline' },
                        content: [
                            {
                                elem: 'title',
                                content: 'Цена'
                            },
                            {
                                block: 'b-form-input',
                                mods: { theme: 'grey' },
                                value: 30,
                                content: { elem: 'input' }
                            },
                            {
                                block: 'b-form-input',
                                mods: { theme: 'grey' },
                                value: 70,
                                content: { elem: 'input' }
                            },
                            {
                                elem: 'unit',
                                content: 'руб.'
                            }
                        ]

                    }
                }
            ]
        }
    ]
})
