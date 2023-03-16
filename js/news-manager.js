class News {
    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get topic() {
        return this._topic;
    }

    set topic(value) {
        this._topic = value;
    }

    get heading() {
        return this._heading;
    }

    set heading(value) {
        this._heading = value;
    }

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }
    constructor() {
        this._image = '';
        this._topic = '';
        this._heading = '';
        this._content = '';
    };


}