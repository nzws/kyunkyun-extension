(() => {
  const element = document.activeElement;

  chrome.storage.local.get('sendTo', ({ sendTo }) => {
    const name = sendTo || prompt('[kyunkyun] Edit name', 'ゆきや');
    const heart = name.split('').join('❤️');
    const kyun = `${heart}❤️きゅ〜っきゅっきゅｷｭｷｭｷｭｷｭｷｭｷｭCueCueCueCueキュン${name}ッキュｷｭｷｭﾝ❤️キュンッ❤️キュッキュッキュッ❤️ｷｭｷｭﾝ❤️`;

    element.focus();
    document.execCommand('insertText', false, kyun);
  });
})();
