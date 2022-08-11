let selectedColor = '#000'

function selectColor(id) {
    switch (id) {
        case 'black':
            selectedColor = '#000'
            break;
        case 'white':
            selectedColor = '#fff'
            break;
        case 'red':
            selectedColor = '#FF3333'
            break;
        case 'green':
            selectedColor = '#0CFF00'
            break;
        case 'yellow':
            selectedColor = '#FFF000'
            break;
        case 'blue':
            selectedColor = '#006CFF'
            break;
        default:
            console.log('isnt an id of color')
    }
}

function fullPix(id) {
    document.getElementById(id).style.backgroundColor = selectedColor
}