class News {
    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }
    get avatar() {
        return this._avatar;
    }

    set avatar(value) {
        this._avatar = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get topic() {
        return this._topic;
    }

    set topic(value) {
        this._topic = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }
    constructor(topic,title) {
        this._avatar='';
        this._status = true;
        this._topic = topic;
        this._title=title;
        this._author = '';
        this._content='';
    }
}