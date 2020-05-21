const kyun =
  'ゆ❤️き❤️や❤️きゅ〜っきゅっきゅｷｭｷｭｷｭｷｭｷｭｷｭCueCueCueCueキュンゆきやッキュｷｭｷｭﾝ❤️キュンッ❤️キュッキュッキュッ❤️ｷｭｷｭﾝ❤️';
let context;

document.addEventListener('contextmenu', e => (context = e.target), true);

chrome.runtime.onMessage.addListener(message => {
  if (message === 'paste' && context) {
    context.focus();
    document.execCommand('insertText', false, kyun);
  }
});
