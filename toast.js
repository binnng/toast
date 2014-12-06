// Generated by CoffeeScript 1.7.1
define("wallet/toast", function(require, exports, module) {
  var $, DOC, Toast, WIN, elBody, entry;
  WIN = window;
  DOC = document;
  $ = WIN["$"];
  elBody = $("body");
  Toast = (function() {
    var html, styles, transitionValue;

    html = ["<p class='wallet-toast'>", "</p>"];

    transitionValue = "opacity .3s ease";

    styles = {
      zIndex: 20,
      background: "rgba(0, 0, 0, .6)",
      padding: "6px 14px",
      position: "absolute",
      webkitTransition: transitionValue,
      transition: transitionValue,
      opacity: 0,
      color: "#fff",
      borderRadius: "2px",
      left: "50%"
    };

    function Toast(config) {
      this.config = config;
      this.msg = config.msg;
      this.dur = config.time;
      this.bottom = config.bottom;
    }

    Toast.prototype.init = function() {
      var el, width;
      html.splice(1, 0, this.msg);
      this.el = el = $(html.join(""));
      el.css(styles);
      elBody.append(el);
      width = el.width();
      el.css({
        bottom: "" + this.bottom + "px",
        marginLeft: "-" + (width / 2) + "px"
      });
      html.splice(1, 1);
      return this;
    };

    Toast.prototype.show = function() {
      var el;
      el = this.el;
      setTimeout(function() {
        return el.css({
          opacity: 1
        });
      }, this.dur);
      return this;
    };

    Toast.prototype.hide = function() {
      var el;
      el = this.el;
      el.css({
        opacity: 0
      });
      setTimeout(function() {
        return el.remove();
      }, this.dur);
      return this;
    };

    Toast.prototype.remove = function() {
      this.el.remove();
      return this;
    };

    return Toast;

  })();
  entry = function(msg, expire) {
    var toast;
    if (msg == null) {
      msg = "";
    }
    if (expire == null) {
      expire = 3000;
    }
    toast = (new Toast({
      msg: msg,
      time: 50,
      bottom: 100
    })).init().show();
    return setTimeout(function() {
      return toast.remove();
    }, expire);
  };
  entry.constructor = Toast;
  return module.exports = entry;
});
