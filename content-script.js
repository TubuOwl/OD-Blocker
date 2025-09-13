(function () {
  'use strict';

  const SELECTORS = ['.iklan', '#iklantengah1', '.iklanpost', '.box_item_ads_popup', '#overplay', '#iklanbawah'];

  function hideMatching() {
    try {
      document.querySelectorAll(SELECTORS.join(',')).forEach(el => {
        if (el.remove) {
          el.remove();
        } else {
          el.style.setProperty('display', 'none', 'important');
        }
      });
    } catch (e) {}
  }

  function startObserver() {
    const observer = new MutationObserver(() => {
      hideMatching();
    });

    observer.observe(document.documentElement || document.body, {
      childList: true,
      subtree: true
    });

    setInterval(hideMatching, 2000);
  }

  hideMatching();
  startObserver();
})();
