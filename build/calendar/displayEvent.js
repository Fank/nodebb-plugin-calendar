'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templates = require('../lib/templates');

var _responses = require('../client/responses');

const displayEvent = (event, cb) => {
  const content = (0, _templates.eventTemplate)({ event: event, uid: app.user.uid });
  const pid = event.pid;

  const div = $(content);
  const $display = $('#plugin-calendar-cal-event-display');
  const $goToPost = $display.find('.modal-footer a.btn-primary.gotopost');
  const $goToUrl = $display.find('.modal-footer a.btn-primary.gotourl');
  $display.modal('hide').find('.modal-body .posts').empty().append(div);
  if (event.external) {
    $goToPost.hide();

    if (event.url) {
      $goToUrl.show().attr('href', event.url);
    } else {
      $goToUrl.hide();
    }
  } else {
    $goToUrl.hide();
    $goToPost.show().attr('href', `${RELATIVE_PATH}/post/${pid}`);
  }
  $display.find('.modal-body').attr('data-pid', pid);
  if (!event.external && event.repeats) {
    $display.find('[data-day]').attr('data-day', event.day);
  }
  $display.modal('show');

  (0, _responses.setupPost)({ pid: pid }, () => {
    $(window).trigger('action:calendar.event.display', { pid: pid, day: event.day, modal: $display });

    if (typeof cb === 'function') {
      cb({ content: content, parsed: event });
    }
  });
};

exports.default = displayEvent;
//# sourceMappingURL=displayEvent.js.map