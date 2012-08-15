({
    block: 'b-page',
    title: 'Поле ввода с меткой и подсказкой',
    head: [
    	{ elem: 'css', url: '_32form-input_bem.css', ie: false },
        { elem: 'css', url: '_32form-input_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_32form-input_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_32form-input_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_32form-input_bem.ie9.css', ie: 'IE 9' },
    	{ block: 'i-jquery', elem: 'core' },
    	{ elem: 'js', url: '_32form-input_bem.js' }
    ],
    content: {
        attrs: { style: 'width: 400px; margin: 0 20px;' },
        content: {
            block: 'b-form-input',
            mods: { theme: 'grey' },
            content: [
                { elem: 'label', content: 'Метка для инпута' },
                { elem: 'hint', content: 'Хинт для инпута' },
                { elem: 'input' }
            ]
        }
    }
})