import { Conversion } from './utils/conversion';
import { Request } from './utils/request';
import { Objects } from './utils/objects';
import { SPHelper } from './utils/sphelper';

function ListItems(listTitle) {
    var site = this,
        methods = {};

    methods.query = function(settings, cache, headers) {
        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29/items';

        listUrl += settings ? '?' + Conversion.objToQueryString(settings) : '';

        return Request.get(listUrl, cache);
    };

    methods.queryCSOM = function(camlQuery) {
        return new Promise(function(resolve, reject) {
            var ctx = new SP.ClientContext(site.url),
                list = ctx.get_web().get_lists().getByTitle(listTitle),
                query, currentItem = {}, pageItem;

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
                var result = items.get_data().map(function(i){
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
            defaults = Objects.merge(defaults, data);
        }

        return Request.post(listUrl, defaults);
    };

    methods.update = function(id, data, library) {
        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29/items(' + id + ')',
            defaults = {
                __metadata: {
                    'type': SPHelper.getListItemType(listTitle, library)
                }
            };

        if (data) {
            defaults = Objects.merge(defaults, data);
        }

        return Request.put(listUrl, defaults);
    };

    methods.delete = function(id, library) {
        var listUrl = site.url + '/_api/web/lists/getByTitle%28%27' + listTitle + '%27%29/items(' + id + ')',
            defaults = {
                __metadata: {
                    'type': SPHelper.getListItemType(listTitle, library)
                }
            };

        return Request.delete(listUrl, defaults);
    };

    return methods;
};

export { ListItems };
