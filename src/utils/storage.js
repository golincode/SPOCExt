class Storage {
    static get(key, useLocalStorage) {
        if (this.storageAvailable()) {
            var storageObj = useLocalStorage ? localStorage : sessionStorage;

            return JSON.parse(storageObj.getItem(key));
        }
        return null;
    };

    static storageAvailable() {
        return (typeof(Storage) !== 'undefined');
    };

    static set(key, data, useLocalStorage) {
        if (this.storageAvailable()) {
            var storageObj = useLocalStorage ? localStorage : sessionStorage;

            storageObj.setItem(key, (data === Object(data)) ? JSON.stringify(data) : data);
        }
    };

    static get(key, useLocalStorage) {
        if (this.storageAvailable()) {
            var storageObj = useLocalStorage ? localStorage : sessionStorage;

            return JSON.parse(storageObj.getItem(key));
        }
        return null;
    };

    static remove(key, useLocalStorage) {
        if (this.storageAvailable()) {
            var storageObj = useLocalStorage ? localStorage : sessionStorage;

            storageObj.removeItem(key);
        }
    };

    static getCookie(name) {
        name = name + '=';

        var ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();

            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }

        return false;
    };

    static setCookies(name, value, days) {
        var expires;

        if (days) {
            var date = new Date();

            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toGMTString();
        }
        else {
            expires = '';
        }

        document.cookie = name + '=' + value + '; ' + expires;
    };

    static removeCookies(name) {
        this.setCookies(name, '', -1);
    };
};

export default Storage;
