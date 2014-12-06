# toast
# 基于zepto

define "wallet/toast", (require, exports, module) ->

  WIN = window
  DOC = document

  $ = WIN["$"]

  elBody = $ "body"

  class Toast

    html = [
      "<p class='wallet-toast'>"
      "</p>"
    ]

    transitionValue = "opacity .3s ease"

    styles = 
      zIndex: 20
      background: "rgba(0, 0, 0, .6)"
      padding: "6px 14px"
      position: "absolute"
      webkitTransition: transitionValue
      transition: transitionValue
      opacity: 0
      color: "#fff"
      borderRadius: "2px"
      left: "50%"

    constructor: (@config) ->
      @msg = config.msg
      @dur = config.time
      @bottom = config.bottom

    init: ->
      html.splice 1, 0, @msg
      @el = el = $(html.join "")

      el.css styles

      elBody.append el

      width = el.width()
      el.css
        bottom: "#{@bottom}px"
        marginLeft: "-#{width / 2}px"

      html.splice 1, 1

      @


    show: ->
      el = @el
      setTimeout ->
        el.css
          opacity: 1
      , @dur

      @

    hide: ->
      el = @el
      el.css
        opacity: 0

      setTimeout ->
        el.remove()
      , @dur

      @

    remove: ->

      @el.remove()

      @



  entry = (msg = "", expire = 3000) ->
    toast = (new Toast(msg: msg, time: 50, bottom: 100)).init().show()
    setTimeout ->
      toast.remove()
    , expire

  entry.constructor = Toast

  module.exports = entry