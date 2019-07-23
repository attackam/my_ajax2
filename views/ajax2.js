function ajax(options) {
    options = options || {};
    options.type = options.type || 'get';
    options.data = options.data || '';
    options.url = options.url || '';
    options.callback = options.callback || function (res) {
        console.log('你没有写回调函数哦');
        console.log(res);
    }
    let xhr = new XMLHttpRequest();
    if (options.type === 'get') {
        options.url += '?' + options.data;
    }
    xhr.open(options.type, options.url);
    if (options.type === 'post') {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(options.data);
    } else {
        xhr.send();
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                options.callback(xhr.responseText)
            }
        }
    }
}