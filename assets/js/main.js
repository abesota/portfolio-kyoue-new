$(function () {
  let $pageTop = $("#pagetop");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });
  // nav
  var navObject = (function () {
    var cls = 'is-active';
    var obj = {
      init: function () {
        var _this = this;
        this.$btn = $('.navi-toggle');
        // this.$target = $('.js-nav-target');
        this.$target = $('#header-navi');
        this.$overlay = $('.overlay');
        this.touchstartY = null;
        this.event = this.event.bind(this);
        this.$btn.on('click', function () {
          $(this).hasClass(cls) ? _this.off() : _this.on();
        });
        this.$overlay.on('click', function () { _this.off(); });
        window.addEventListener('touchstart', function (e) {
          _this.touchstartY = e.changedTouches[0].screenY;
        });
        return this;
      },
      on: function () {
        this.$btn.addClass(cls);
        this.$target.addClass(cls);
        this.$overlay.fadeIn(200);

        this.fixed();
      },
      off: function () {
        this.$btn.removeClass(cls);
        this.$target.removeClass(cls);
        this.$overlay.fadeOut(200);

        this.moved();
      },
      event: function (e) {
        var $t = this.$target[0];
        var obj = {
          height: Math.ceil($t.offsetHeight),
          currentY: e.changedTouches[0].screenY
        };
        var direction = {
          top: this.touchstartY <= obj.currentY,
          bottom: this.touchstartY >= obj.currentY
        }
        var isFlag = {
          top: direction.top && $t.scrollTop === 0,
          bottom: direction.bottom && $t.scrollHeight - $t.scrollTop === obj.height
        };
        if (obj.height === $t.scrollHeight || e.cancelable && (isFlag.top || isFlag.bottom)) {
          e.preventDefault();
        }
      },
      fixed: function () {
        $('html, body').css('overflow', 'hidden');
        window.addEventListener('touchmove', this.event, {
          passive: false
        });
      },
      moved: function () {
        $('html, body').css('overflow', '');
        window.removeEventListener('touchmove', this.event, {
          passive: false
        });
      },
      reset: function () {
        $('html, body').removeAttr('style');
        this.$target.removeAttr('style');
        this.$btn.removeClass(cls);
        this.$overlay.removeAttr('style')
        this.moved();
      }
    }
    return obj.init();
  })();
});
