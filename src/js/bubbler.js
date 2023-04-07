function Bubbler(items) {
    this.items = items;
    let body = document.getElementsByTagName('body')[0];

    let bubbler_wrapper = document.createElement('div');
    bubbler_wrapper.className = 'bubbler-wrapper';

    let menu_button = document.createElement('div');
    menu_button.className = 'bubbler-menu-loader';
    menu_button.innerHTML = '&#9776;';

    for (let i = this.items.length - 1; i >= 0; i--) {
        let child = document.createElement('div');
        child.className = 'bubbler-menu-item';
        child.innerHTML = this.items[i].icon;
        if (this.items[i].callback) {
            child.onclick = this.items[i].callback;
        }
        if (this.items[i].display) {
            for (let key in this.items[i].display) {
                if (!this.items[i].display.hasOwnProperty(key)) {
                    continue;
                }
                child.style[key] = this.items[i].display[key];
            }
        }

        let label_wrapper = document.createElement('label');
        label_wrapper.className = 'bubbler-menu-item-label-wrapper';

        let label = document.createElement('span');
        label.className = 'bubbler-menu-item-label';
        label.innerHTML = this.items[i].label;
        label_wrapper.appendChild(label);
        child.prepend(label_wrapper);
        bubbler_wrapper.appendChild(child);
    }

    bubbler_wrapper.appendChild(menu_button);
    body.appendChild(bubbler_wrapper);
}