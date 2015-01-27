(function() {
  'use strict';

  var options = {
    type: 'normal',
    title: '生成条形码',
    id: 'qrcode-generator',
    contexts: ['selection'],
    onclick: clickCallback,
  };

  function clickCallback(info, tab) {
    //选择的字
    var number = info.selectionText.trim(),
      type = localStorage.getItem('type') || 'ean13';

    if (/^\d*$/.test(number)) {
      if (type == 'ean13' && (number.length < 8 || number.length > 13)) {
        sendErrorMessage(tab, '条码长度必须在8到13之间！');
      }
      chrome.tabs.sendMessage(tab.id, {number: number, type: type}, function(response) {});
    } else {
      sendErrorMessage(tab, '您只能选择数字！');
    }
  };

  function sendErrorMessage(tab, err) {
    chrome.tabs.sendMessage(tab.id, {err: err}, function(response) {});
  }

  chrome.contextMenus.create(options, function() {
    console.log('crate success');
  });
}());
