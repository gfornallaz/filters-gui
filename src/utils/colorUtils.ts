export function hexColor2rgb(color: string) {
    if (color[0] === '#')
	{
		if (color.length < 7)
		{
			// convert #RGB to #RRGGBB
			color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
		}
		return [
            parseInt(color.substr(1, 2), 16),
			parseInt(color.substr(3, 2), 16),
			parseInt(color.substr(5, 2), 16)];
	}
    return [0, 0, 0];
}

export function getBrightness(rgb: number[]) {

    // http://www.w3.org/TR/AERT#color-contrast
    return Math.round(
        (rgb[0] * 299) +
        (rgb[1] * 587) +
        (rgb[2] * 114)) / 1000);
}

export function goodContrastColor(rgb: number[]) {
    return (getBrightness(rgb) > 125) ? 'black' : 'white';
}

