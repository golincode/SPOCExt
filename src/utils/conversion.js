class Conversion {
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

export default Conversion;
