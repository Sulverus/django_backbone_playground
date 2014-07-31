window.getCookie = function (name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
};

// Patch backbone with django csrf token
var oldSync = Backbone.sync;
Backbone.sync = function(method, model, options){
  options.beforeSend = function(xhr){
    xhr.setRequestHeader('X-CSRFToken', window.getCookie('csrftoken'));
  };
  return oldSync(method, model, options);
};