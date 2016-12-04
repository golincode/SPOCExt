import { ListItems } from './sp-listitems';

class SPOC {
	constructor() {
		this._name = 'SPOC';
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
	}
};

SPOC.SP.User = class {
	constructor(username) {
		this.id = username ? username : window._spPageContextInfo.userId;
		this.loginName = username ? username : window._spPageContextInfo.userLoginName;
	}
};

export default SPOC;
