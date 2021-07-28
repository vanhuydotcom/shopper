export function convertQueryToObj() {

    var search = window.location.search.substring(1);
    return !search
        ? {}
        : JSON.parse(
            '{"' +
            decodeURI(search.replace(/&/g, '","').replace(/=/g, '":"')) +
            '"}'
        );
}
export function convertObjToQuery(obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}
export function currency(number) {
    return new Intl.NumberFormat('vn').format(number) + ' VND'
}