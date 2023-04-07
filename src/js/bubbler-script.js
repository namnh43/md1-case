var options =
    [
        {
            icon:'<img src="src/img/icon/telephone.png" width="55px" height="55px">',
            label: '(+84)338856789',
            display: {
                // padding: '5px',
            }
        },
        {
            icon:'<img src="src/img/icon/zalo_icon.png" width="55px" height="55px">',
            label: 'Zalo chat',
            display: {
                // padding: '5px',
            },
            callback: function() {
                window.open("https://zalo.me/0338856789");;
            }
        },
        {
            icon:'<img src="src/img/icon/fb-messenger.png" width="55px" height="55px">',
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
