export default () => {
    var now = new Date();
var time = now.getTime();
var expireTime = time + 60 * 2592000;
now.setTime(expireTime)
now.toUTCString()
return now
}