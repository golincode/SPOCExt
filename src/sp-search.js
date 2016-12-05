import Utils from './utils/utils';

function Search(searchTerm) {
    var site = this,
        methods = {};

    methods.query = function(settings, cache) {
        return new Promise(function(resolve, reject) {
            var searchUrl = site.url + '/_api/search/query?querytext=%27' + searchTerm + 
                                ' +path:' + site.url + '%27';

            searchUrl += settings ? '?' + Utils.Conversion.objToQueryString(settings) : '';

            Utils.Request.get(searchUrl, cache).then(function(result) {
                result = Utils.SPHelper.formatSearchResponse(result);
                resolve(result);
            }, function(err) {
                reject(err);
            });
        });
    };

    return methods;
};

export default Search;
