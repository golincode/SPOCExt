import Conversion from './conversion';
import SP from './sp';
import Request from './request';
import Objects from './objects';
import Storage from './storage';
import Strings from './strings';
import Tpl from './templates';
import Url from './url';

class Utils {
	constructor() {
		this._name = 'Utils';
	}

	get name() {
		return this._name;
	}
};

Utils.Conversion = Conversion;
Utils.Request = Request;
Utils.SP = SP;
Utils.Objects = Objects;
Utils.Storage = Storage;
Utils.Strings = Strings;
Utils.Tpl = Tpl;
Utils.Url = Url;

export default Utils;
