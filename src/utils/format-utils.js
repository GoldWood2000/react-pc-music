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

export const getPlayUrl = (id) => {
    return id !== undefined ? `https://music.163.com/song/media/outer/url?id=${id}.mp3` : ''
}


//字符串处理歌词
const returnindex = (item) => {
    const index = [];
    index.push(item.indexOf('['))
    index.push(item.indexOf(']'))
    index.push(item.indexOf(':'))
    return index;
}
export const formatSongLyrics = (lyrics) => {
    const songLyrics = lyrics.trim().split('\n')
    const newlyrics = [];
    for (const item of songLyrics) {
        const index = returnindex(item)
        if (index.length !== 0) {
            const time1 = item.substring(index[0] + 1, index[2]) * 60 * 1000
            const time2 = item.substring(index[2] + 1, index[2] + 3) * 1000
            let time3 = item.substring(index[2] + 4, index[1])
            time3 = time3.length === 3 ? time3 * 1 : time3 * 10
            const time = time1 + time2 + time3
            const content = item.substring(index[1] + 1, item.length).trim()
            if (content !== "") {
                const lineObj = { time, content };
                newlyrics.push(lineObj);
            }
        }
    }
    return newlyrics;
}


//正则处理歌词
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export function parseLyric(lyricString) {
    const lineStrings = lyricString.split("\n");
    const lyrics = [];
    for (let line of lineStrings) {
        if (line) {
            const result = parseExp.exec(line);
            if (!result) continue;
            const time1 = result[1] * 60 * 1000;
            const time2 = result[2] * 1000;
            const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
            const time = time1 + time2 + time3;
            const content = line.replace(parseExp, "").trim();
            if (content !== "") {
                const lineObj = { time, content };
                lyrics.push(lineObj);
            }
        }
    }
    return lyrics;
}