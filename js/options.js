var content = document.querySelector('.content'),
    types = document.querySelectorAll('input'),
    type = localStorage.getItem('type') || 'ean13';

for (var i = 0; i < types.length; i++) {
    if (types[i].dataset['type'] == type) {
        types[i].setAttribute('checked', 'checked');
    }
}

content.addEventListener('click', function(e) {
    var target = e.target;
    if (target.tagName.toLowerCase() == 'input') {
        var type = target.dataset['type'];
        localStorage.setItem('type', type);
    }
});