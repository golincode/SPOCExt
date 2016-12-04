import { Utils } from './utils';

Utils.Conversion = class {
	static objToQueryString(obj) {
		var str = '';

		for (var propertyName in obj) {
			str += '&$' + propertyName + '=' + obj[propertyName];
		}

		return str;
	}

	static spInternalName(string) {
		return string.replace(/ /g, '_x0020_');
	}
};

export { Utils };
