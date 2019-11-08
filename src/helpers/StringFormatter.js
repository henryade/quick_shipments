export const Capitalize = (text) => text.split(' ').map((string) => string.slice(0, 1).toUpperCase() + string.slice(1)).join(' ');
export const CapitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);
