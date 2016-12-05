import { Utils } from './utils/utils';

function Delve(userEmail) {
    var site = this,
        methods = {};

    methods.board = function(searchTerm, actions, cache) {
        return new Promise(function(resolve, reject) {
            var searchUrl, actor;

            if (!searchTerm) {
                searchTerm = '*';
            }

            if (userEmail) {
                searchUrl = site.url + "/_api/search/query?Querytext=%27WorkEmail:" + 
                                userEmail + "%27&SelectProperties=%27UserName,DocId%27";

                Utils.Request.get(searchUrl, cache).then(function(result) {
                    result = Utils.SPHelper.formatSearchResponse(result);

                    if (result.length) {
                        if (result.length > 1) {
                            result = result[0];
                        }

                        actor = result.DocId;
                        searchUrl = site.url + "/_api/search/query?Querytext='" + 
                                        searchTerm + "'&amp;Properties='GraphQuery:ACTOR(" + 
                                            actor + actions ? (", " + actions) : "" + ")";

                        Utils.Request.get(searchUrl, cache).then(function(board) {
                            board = Utils.SPHelper.formatSearchResponse(board);
                            resolve(board);
                        }, function(err) {
                             reject(err);
                        });
                    } 
                    else {
                        resolve(null);
                    }

                }, function (err) {
                    reject(err);
                });
            } 
            else {
                searchUrl = site.url + "/_api/search/query?Querytext='" + 
                                searchTerm + "'&amp;Properties='GraphQuery:ACTOR(ME" + 
                                    actions ? (", " + actions) : "" + ")";

                Utils.Request.get(searchUrl, cache).then(function(board) {
                    board = Utils.SPHelper.formatSearchResponse(board);
                    resolve(board);
                }, function(err) {
                     reject(err);
                });
            }
        });
    };

    return methods;
};

export default Delve;
