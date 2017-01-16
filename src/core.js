import ListItems from './sp-listitems';
import Delve from './sp-delve';
import Files from './sp-files';
import Lists from './sp-lists';
import Search from './sp-search';
import Profile from './sp-users';
import Utils from './utils/utils';

import RSVP from 'rsvp';

class SPOC {
	constructor() {
		this._name = 'SPOC';
		window.Promise = window.Promise ? window.Promise : RSVP.Promise;
	}

	get name() {
		return this._name;
	}
};

SPOC.SP = class {
	constructor() {
		this._name = 'SP';
	}

	get name() {
		return this._name;
	}
};

SPOC.SP.Site = class {
	constructor(url) {
		this.url = url ? url : window._spPageContextInfo.webAbsoluteUrl;

		this.ListItems = ListItems;
		this.Delve = Delve;
		this.Files = Files;
		this.Lists = Lists;
		this.Search = Search;
	}
};

SPOC.SP.User = class {
	constructor(username) {
		this.id = username ? username : window._spPageContextInfo.userId;
		this.loginName = username ? username : window._spPageContextInfo.userLoginName;

		this.Profile = Profile;
	}
};

SPOC.Utils = class {
	constructor() {
		this._name = 'Utils';
	}

	get name() {
		return this._name;
	}
};

SPOC.Utils = Utils;

export default SPOC;
