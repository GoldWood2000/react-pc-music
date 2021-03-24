export function getSizeImage(imgUrl, size) {
    return `${imgUrl}?param=${size}x${size}`;
}

export const formatNumber = function (number) {
    if (number < 0) return;
    if (number < 10000) {
        return number;
    } else if (Math.floor(number / 10000) < 10000) {
        return Math.floor(number / 1000) / 10 + "万";
    } else {
        return Math.floor(number / 10000000) / 10 + "亿";
    }
}