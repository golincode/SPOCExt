import { Utils } from './utils';
import { Strings } from './strings';

Utils.SPHelper = class {
    static getListItemType(name, library) {
        var meta = library ? "Item" : "ListItem";
    	name = name[0].toUpperCase() + name.substring(1);

        return "SP.Data." + name.replace(/ /g, '_x0020_') + meta;
    };

    static isAppWeb() {
        return window.location.href.toLowerCase().indexOf('sphosturl') > -1;
    };

    static convertToWebApp(url) {
        if (url.toLowerCase().indexOf('WopiFrame.aspx') > -1) {
            return url;
        } 
        else {
            var ext = Strings.getFileExtension(url);

            if (ext === 'docx' || ext === 'pptx' || ext === 'xlsx'){
                return site.url + '/_layouts/15/WopiFrame.aspx?sourcedoc=' + url;
            } 

            return url;
        }
    };

    static formatSearchResponse(data) {
        var result = data.query.PrimaryQueryResult.RelevantResults.Table.Rows,
            finalarray = [], item, obj, i, a;

            result = result.results || [result];

        for (i = 0; i < result.length; i++) { 
            item = result[i].Cells.results;
            obj = {};

            for (a = 0; a < item.length; a++) { 
                obj[item[a].Key] = item[a].Value;
            }

            finalarray.push(obj);
        }

        return finalarray;
    };
};

export { Utils };

