class Tpl {
    static getProperty(propertyName, obj) {
        var parts = propertyName.split("."),
            length = parts.length,
            i, property = obj || this;

        for (i = 0; i < length; i++) {
            property = property[parts[i]];
        }

        return property;
    };

    static render(tpl, data) {
        var regex = /{{(.*?)}}/g,
            matches = tpl.match(regex);

        if (matches && matches.length) {
            for (var i = 0, len = matches.length; i < len; i++) {
                tpl = tpl.replace(new RegExp(matches[i], 'g'), 
                            this.getProperty(matches[i].replace(/{{|}}/g, ""), data));
            }
        }

        return tpl;
    };
};

export default Tpl;
