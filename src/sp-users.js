import Utils from './utils/utils';

function Profile() {
    var user = this,
        methods = {},
        loginNamePrefix = 'i:0%23.f|membership|';

    methods.query = function(cache) {
        var listUrl = window._spPageContextInfo.webAbsoluteUrl;

        if (user.loginName) {
            listUrl += "/_api/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v=%27" + 
                            loginNamePrefix + user.loginName + "%27";
        } 
        else {
            listUrl += "/_api/SP.UserProfiles.PeopleManager/GetMyProperties/UserProfileProperties";
        }

        return Utils.Request.get(listUrl, cache);
    };

    methods.isMemberOfGroup = function(site, groupName, userId, cache) {
        var user = userId ? userId : window._spPageContextInfo.userId,
            listUrl = site.url + "/_api/web/sitegroups/getByName('" + groupName + 
                        "')/Users?$filter=Id eq " + user;

        return Utils.Request.get(listUrl, cache);
    };

    return methods;
};

export default Profile;
