chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'https://yukiya.me/kyun' });
});

chrome.contextMenus.create({
  title: 'Paste ゆ❤️き❤️や❤️きゅ〜っきゅっきゅｷｭｷｭｷｭｷ (ry',
  contexts: ['editable'],
  onclick(_, tab) {
    chrome.tabs.sendMessage(tab.id, 'paste', null);
  }
});
