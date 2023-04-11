var options =
    [
        {
            icon:'<img src="https://cdn-thumbs.imagevenue.com/3a/2d/0d/ME168DBX_t.png" width="55px" height="55px">',
            label: '(+84)338856789',
            display: {
                // padding: '5px',
            }
        },
        {
            icon:'<img src="https://cdn-thumbs.imagevenue.com/a8/70/aa/ME168DBY_t.png" width="55px" height="55px">',
            label: 'Zalo chat',
            display: {
                // padding: '5px',
            },
            callback: function() {
                window.open("https://zalo.me/0338856789");;
            }
        },
        {
            icon:'<img src="https://cdn-thumbs.imagevenue.com/66/ac/73/ME168DBZ_t.png" width="55px" height="55px">',
            label: 'Messenger',
            display: {
                // padding: '5px',
            },
            callback: function() {
                window.open("https://m.me/Hieu240889");;
            }
        }
    ];

let context = new Bubbler(options);
