var options =
    [
        {
            icon:'<img src="src/img/icon/telephone.png" width="55px" height="55px">',
            label: '0988.123.456',
            display: {
                // padding: '5px',
            },
            callback: function() {
                alert('dasd');
            }
        },
        {
            icon:'<img src="src/img/icon/zalo_icon.png" width="55px" height="55px">',
            label: 'Zalo chat',
            display: {
                // padding: '5px',
            }
        },
        {
            icon:'<img src="src/img/icon/fb-messenger.png" width="55px" height="55px">',
            label: 'Messenger',
            display: {
                // padding: '5px',
            }
        }
    ];

let context = new Bubbler(options);
