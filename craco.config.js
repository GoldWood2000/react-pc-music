const path = require("path");

//__dirname Node全局对象 路径为文件根目录/Users/chenkang/Developer/react-pc-music
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    webpack: {
        alias: {
            "@": resolve("src")
        }
    }
}