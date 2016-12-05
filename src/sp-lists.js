import Utils from './utils/utils';

function Lists(listTitle) {
    var site = this,
        methods = {};

    methods.query = function(settings, cache) {
        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29/';

        listUrl += settings ? '?' + Utils.Conversion.objToQueryString(settings) : '';

        return Utils.Request.get(listUrl, cache);
    };

    methods.create = function(settings) {
        var defaults = {
            __metadata: {
                'type': 'SP.List'
            },
            BaseTemplate: 100,
            Description: ''
        };

        if (settings) {
            defaults = Utils.Objects.merge(defaults, settings);
        }

        return Utils.Request.post(site.url + '/_api/web/lists', defaults);
    };

    methods.update = function(data) {
        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29',
            defaults = {
                __metadata: {
                    'type': Utils.SPHelper.getListItemType(listTitle)
                }
            };

        if (data) {
            defaults = Utils.Objects.merge(defaults, data);
        }

        return Utils.Request.put(listUrl, defaults);
    };

    methods.delete = function() {
        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29',
            defaults = {
                __metadata: {
                    'type': Utils.SPHelper.getListItemType(listTitle)
                }
            };

        return Utils.Request.delete(listUrl, defaults);
    };

    return methods;
};

export default Lists;
