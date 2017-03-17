import Utils from './utils/utils';
import RSVP from 'rsvp';

function Files(filePath) {
    var site = this,
        methods = {};

    methods.generateExternalLink = function(hours) {
        hours = hours ? hours : 24;

        var listUrl = site.url + "/_api/Web/GetFileByServerRelativeUrl('" + filePath + 
                        "')/GetPreAuthorizedAccessUrl(" + hours + ")";

        return Utils.Request.get(listUrl, true);
    };

    methods.uploadViaModal = function(GUID, returnResultBool) {
        return new RSVP.Promise(function(resolve, reject) {
            var dialogOptions = {};

            dialogOptions.url = site.url + "/_layouts/Upload.aspx?List=" + GUID + "&IsDlg=1";

            dialogOptions.dialogReturnValueCallback = Function.createDelegate(null, function(result, value) {
                if (returnResultBool) {
                    resolve(result);
                }
                else {
                    resolve(value);
                }
            });

            SP.UI.ModalDialog.showModalDialog(dialogOptions);
        });
    };

    methods.upload = function(fileInput, expand, progressFunction, self) {
        return new RSVP.Promise(function(resolve, reject) {
            var reader = new FileReader();

            reader.onloadend = function(e) {
                var parts = fileInput.value.split('\\'),
                    fileName = parts[parts.length - 1],
                    url = site.url + "/_api/Web/GetFolderByServerRelativeUrl('" + filePath + 
                            "')/files/add(overwrite=true, url='" + fileName + "')" + 
                                (expand ? "?$" + expand : "");

                Utils.Request.post(url, e.target.result, true, progressFunction, self).then(function(result) {
                    resolve(result);
                }, function(result) {
                    reject(result);
                });
            };

            reader.onerror = function(e) {
                reject(e.target.error);
            };

            reader.readAsArrayBuffer(fileInput.files[0]);
        });
    };

    methods.uploadFile = function(file, expand) {
        return new RSVP.Promise(function(resolve, reject) {
            var reader = new FileReader();

            reader.onloadend = function(e) {                
                var fileName = file ? file.name : "",
                url = site.url + "/_api/Web/GetFolderByServerRelativeUrl('" + filePath + 
                    "')/files/add(overwrite=true, url='" + fileName + "')" + 
                (expand ? "?$" + expand : "");

                Utils.Request.post(url, e.target.result, true).then(function(result) {
                    resolve(result);
                }, function(result) {
                    reject(result);
                });
            };

            reader.onerror = function(e) {
                reject(e.target.error);
            };

            reader.readAsArrayBuffer(file);
        });
    };

    methods.query = function(cache) {
        var url = site.url + "/_api/web/getfilebyserverrelativeurl('" + filePath + "')/ListItemAllFields";

        return Utils.Request.get(url, cache);
    };

    methods.download = function() {
        window.open('/_layouts/download.aspx?SourceUrl=' + site.url + filePath);
    };

    methods.openInWebApps = function(newTab) {
        var url = site.url + filePath;

        if (newTab) {
            window.open(Utils.SP.convertToWebApp(url));
        } 
        else {
            window.location.href = Utils.SP.convertToWebApp(url);
        }
    };

    return methods;
};

export default Files;
