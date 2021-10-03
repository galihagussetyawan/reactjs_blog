export function textMaxLength(text, max) {
    const yourString = text;
    const maxLength = max;

    let trimmedString = yourString.substr(0, maxLength);

    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));

    return trimmedString;
}