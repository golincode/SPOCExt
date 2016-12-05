import Utils from './utils/utils';

function ListItems(listTitle) {
    var site = this,
        methods = {};

    methods.query = function(settings, cache, headers) {
        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29/items';

        listUrl += settings ? '?' + Utils.Conversion.objToQueryString(settings) : '';

        return Utils.Request.get(listUrl, cache);
    };

    methods.queryCSOM = function(camlQuery) {
        return new Promise(function(resolve, reject) {
            var ctx = new SP.ClientContext(site.url),
                list = ctx.get_web().get_lists().getByTitle(listTitle),
                query;

            if (camlQuery) {
                query = new SP.CamlQuery();
                query.set_viewXml(camlQuery);
            } 
            else {
                query = SP.CamlQuery.createAllItemsQuery();
            }

            var items = list.getItems(query);

            ctx.load(items);

            ctx.executeQueryAsync(function() {
                var result = items.get_data().map(function(i) {
                    return i.get_fieldValues();   
                });

                resolve(result);

            }, function(err) {
                reject(err);
            });
        });
    };

    methods.create = function(data, library) {
        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29/items',
            defaults = {
                __metadata: {
                    'type': SP.getListItemType(listTitle, library)
                }
            };

        if (data) {
            defaults = Utils.Objects.merge(defaults, data);
        }

        return Utils.Request.post(listUrl, defaults);
    };

    methods.update = function(id, data, library) {
        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29/items(' + id + ')',
            defaults = {
                __metadata: {
                    'type': Utils.SP.getListItemType(listTitle, library)
                }
            };

        if (data) {
            defaults = Utils.Objects.merge(defaults, data);
        }

        return Utils.Request.put(listUrl, defaults);
    };

    methods.delete = function(id, library) {
        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29/items(' + id + ')',
            defaults = {
                __metadata: {
                    'type': Utils.SP.getListItemType(listTitle, library)
                }
            };

        return Utils.Request.delete(listUrl, defaults);
    };

    return methods;
};

export default ListItems;
