export function truncateText(length, text) {
	return text.length > length ? text.substring(0, length) + '...' : text;
}