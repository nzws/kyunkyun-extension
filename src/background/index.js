chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'https://kyun.yukiya.me/' });
});

chrome.contextMenus.create({
  title: 'Paste ゆ❤️き❤️や❤️きゅ〜っきゅっきゅｷｭｷｭｷｭｷ (ry',
  contexts: ['editable'],
  onclick() {
    chrome.storage.local.set(
      {
        sendTo: 'ゆきや'
      },
      () => {
        chrome.tabs.executeScript(null, { file: 'build/content/index.js' });
      }
    );
  }
});

chrome.contextMenus.create({
  title: 'Paste any ❤️きゅ〜っきゅっきゅｷｭｷｭｷｭｷ (ry',
  contexts: ['editable'],
  onclick() {
    chrome.storage.local.set(
      {
        sendTo: null
      },
      () => {
        chrome.tabs.executeScript(null, { file: 'build/content/index.js' });
      }
    );
  }
});
