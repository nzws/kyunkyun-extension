chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'https://yukiya.me/kyun' });
});

chrome.contextMenus.create({
  title: 'Paste ゆ❤️き❤️や❤️きゅ〜っきゅっきゅｷｭｷｭｷｭｷ (ry',
  contexts: ['editable'],
  onclick() {
    chrome.tabs.executeScript(null, { file: 'build/content/index.js' });
  }
});
