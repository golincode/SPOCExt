class Strings {
	static cut(value, requiredLength) {
		return value.length > requiredLength ? value.substr(0, requiredLength - 3) + "..." : value;
	};

	static getFileExtension(value) {
		return value.split('.').pop();
	};
};

export default Strings;
