/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/admin/blocks/collapse/app.js":
/*!**************************************************!*\
  !*** ./src/scripts/admin/blocks/collapse/app.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/common.js */ "./src/scripts/admin/utils/common.js");
/* harmony import */ var _container_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/public */ "./src/scripts/admin/blocks/collapse/container/public.js");
/**
 * Collapse block manipulation.
 */


const domReady = () => {
  setTimeout(function () {
    const collapseAllButtons = document.querySelectorAll('.collapse-container-nav button');
    const collapseItemButtons = document.querySelectorAll('.collapse-header button');
    const collapseItemLinks = document.querySelectorAll('.collapse-close a');
    const collapseAllButton = document.querySelector('.collapse-collapse-all');
    if (collapseAllButtons.length) {
      collapseAllButtons.forEach(item => {
        item.addEventListener('click', _container_public__WEBPACK_IMPORTED_MODULE_1__.collapseControlsClick);
      });
      collapseItemButtons.forEach(item => {
        item.addEventListener('click', _container_public__WEBPACK_IMPORTED_MODULE_1__.collapseItemsButtonClick);
      });
      collapseItemLinks.forEach(item => {
        item.addEventListener('click', _container_public__WEBPACK_IMPORTED_MODULE_1__.collapseItemsLinkClick);
      });

      // initialise load state
      (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_0__.triggerClick)(collapseAllButton);
      (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_0__.triggerClick)(collapseItemButtons[0]);
    }
  }, 0);
};
if ('complete' === document.readyState) {
  domReady();
} else {
  document.addEventListener('DOMContentLoaded', domReady);
}

/***/ }),

/***/ "./src/scripts/admin/blocks/collapse/container/public.js":
/*!***************************************************************!*\
  !*** ./src/scripts/admin/blocks/collapse/container/public.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collapseControlsClick": () => (/* binding */ collapseControlsClick),
/* harmony export */   "collapseItemsButtonClick": () => (/* binding */ collapseItemsButtonClick),
/* harmony export */   "collapseItemsLinkClick": () => (/* binding */ collapseItemsLinkClick)
/* harmony export */ });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/common.js */ "./src/scripts/admin/utils/common.js");


/**
 * Click event handlers for collapse and expand all.
 */
function collapseControlsClick() {
  const target = this.getAttribute('data-target');
  if (undefined === target) return;
  const collaspseButtons = document.querySelectorAll(`${target} .collapse-header button`);
  const collapseItems = document.querySelectorAll(`${target} .collapse`);
  if (this.classList.contains('collapse-expand-all')) {
    collaspseButtons.forEach(item => {
      item.classList.remove('collapsed');
      item.setAttribute('aria-expanded', true);
    });
    collapseItems.forEach(item => {
      item.classList.remove('collapse');
      item.classList.add('collapsing');
      item.classList.remove('hide');
      item.classList.add('show');
      setTimeout(function () {
        item.classList.add('collapse');
        item.classList.remove('collapsing');
      }, 300);
    });
  }
  // }
  if (this.classList.contains('collapse-collapse-all')) {
    collaspseButtons.forEach(item => {
      item.classList.add('collapsed');
      item.setAttribute('aria-expanded', false);
    });
    collapseItems.forEach(item => {
      item.classList.remove('collapse');
      item.classList.add('collapsing');
      item.classList.remove('show');
      item.classList.add('hide');
      setTimeout(function () {
        item.classList.add('collapse');
        item.classList.remove('collapsing');
      }, 300);
    });
  }
}

/**
 * Function to handle collapse and expand when clicking on collapse header.
 */
function collapseItemsButtonClick() {
  const target = this.getAttribute('data-target');
  if (undefined === target) return;
  const collapseButton = this;
  const collapseItem = collapseButton.closest('.wp-block-bcgov-block-theme-collapse-item').querySelector('.collapse-container');
  collapseItem.classList.remove('collapse');
  collapseItem.classList.add('collapsing');
  collapseButton.setAttribute('aria-expanded', collapseButton.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  const buttonState = collapseButton.getAttribute('aria-expanded');
  if (buttonState === 'true') {
    collapseButton.classList.remove('collapsed');
    collapseItem.classList.remove('hide');
    collapseItem.classList.add('show');
  } else {
    collapseButton.classList.add('collapsed');
    collapseItem.classList.add('hide');
    collapseItem.classList.remove('show');
  }
  setTimeout(function () {
    collapseItem.classList.add('collapse');
    collapseItem.classList.remove('collapsing');
  }, 300);
}

/**
 * Function to handle collapse and expand when clicking on collapse link in body of item.
 */
function collapseItemsLinkClick() {
  const target = this.getAttribute('data-target');
  if (undefined === target) return;
  const buttonToClick = document.querySelector(`.collapse-header button[data-target="${target}"]`);
  (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_0__.triggerClick)(buttonToClick);
}

/***/ }),

/***/ "./src/scripts/admin/utils/common.js":
/*!*******************************************!*\
  !*** ./src/scripts/admin/utils/common.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allowedColors": () => (/* binding */ allowedColors),
/* harmony export */   "defaults": () => (/* binding */ defaults),
/* harmony export */   "mediaQueries": () => (/* binding */ mediaQueries),
/* harmony export */   "triggerClick": () => (/* binding */ triggerClick)
/* harmony export */ });
const allowedColors = [{
  name: 'bcgov-background-light',
  color: '#f2f2f2'
}, {
  name: 'bcgov-component',
  color: '#606060'
}, {
  name: 'bcgov-text',
  color: '#313132'
}, {
  name: 'bcgov-white',
  color: '#fff'
}, {
  name: 'bcgov-primary',
  color: '#036'
}, {
  name: 'bcgov-link',
  color: '#1a5a96'
}, {
  name: 'bcgov-background-blue',
  color: '#38598a'
}, {
  name: 'bcgov-yellow',
  color: '#fcba19'
}, {
  name: 'bcgov-red',
  color: '#d8292f'
}, {
  name: 'bcgov-green',
  color: '#2e8540'
}];
const mediaQueries = [{
  value: null,
  label: 'Select Break Point',
  disabled: true
}, {
  value: 1200,
  label: '1200px'
}, {
  value: 992,
  label: '992px'
}, {
  value: 768,
  label: '768px'
}, {
  value: 576,
  label: '576px'
}, {
  value: 0,
  label: 'None'
}];
const defaults = (value, defaultValue) => {
  if (undefined === value) {
    value = defaultValue;
  }
  return value;
};

/**
 * Simulate a click trigger event.
 *
 * @param {Element} el  the element to simulate a click on
 */
/* eslint-disable no-unused-vars */
const triggerClick = el => {
  const evt = new window.MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  const canceled = !el.dispatchEvent(evt);
};
/* eslint-disable no-unused-vars */

/***/ }),

/***/ "./src/scripts/public/accessibility.js":
/*!*********************************************!*\
  !*** ./src/scripts/public/accessibility.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/public/utils/index.js");


/**
 * Accessibility DOM manipulation.
 * [@return](https://github.com/return) {void}
 */
const domReady = () => {
  /*
   * SafarIE bug requires 0ms timeout.
   */
  setTimeout(function () {
    const bodyInsertion = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('body').firstChild;
    const skipNav = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.skip-nav-menu');
    if (null !== skipNav) {
      bodyInsertion.parentNode.insertBefore(skipNav, bodyInsertion);
      const skipNavItems = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.skip-nav', skipNav);
      skipNavItems.forEach(item => {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('a', item).setAttribute('tabindex', 0);
      });
    }
    const mainMenuHamburger = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('header nav > button');
    const mainMenu = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('header nav button + .hidden-by-default');
    if (null !== mainMenuHamburger) {
      mainMenuHamburger.setAttribute('id', 'main-menu');
      if (null !== mainMenu) {
        const mainMenuLinks = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('a', mainMenu);
        const mainMenuButtons = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('button', mainMenu);
        if (mainMenu.getAttribute('aria-hidden') !== 'true') {
          mainMenuLinks.forEach(link => {
            link.setAttribute('tabindex', '-1');
          });
          mainMenuButtons.forEach(button => {
            button.setAttribute('tabindex', '-1');
          });
        }
        const config = {
          attributes: true
        };
        const callback = mutationList => {
          for (const mutation of mutationList) {
            if (mutation.type === 'attributes') {
              if (mainMenu.getAttribute('aria-hidden') === 'false') {
                mainMenuLinks.forEach(link => {
                  link.setAttribute('tabindex', '0');
                });
                mainMenuButtons.forEach(button => {
                  if (button.getAttribute('aria-label') === 'Close menu') {
                    button.setAttribute('tabindex', '0');
                  }
                });
              }
              if (mainMenu.getAttribute('aria-hidden') === 'true') {
                mainMenuLinks.forEach(link => {
                  link.setAttribute('tabindex', '-1');
                });
                mainMenuButtons.forEach(button => {
                  button.setAttribute('tabindex', '-1');
                });
              }
            }
          }
        };
        const observer = new window.MutationObserver(callback);
        observer.observe(mainMenu, config);
      }
    }
  }, 0);
};
if ('complete' === document.readyState) {
  domReady();
} else {
  document.addEventListener('DOMContentLoaded', domReady);
}

/***/ }),

/***/ "./src/scripts/public/dom-loader.js":
/*!******************************************!*\
  !*** ./src/scripts/public/dom-loader.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/public/utils/index.js");


/**
 * General Block Theme window event management and DOM manipulation.
 * [@return](https://github.com/return) {void}
 */
const domReady = () => {
  /*
   * SafarIE bug requires 0ms timeout.
   */
  setTimeout(function () {
    /**
     * Add siteName body classes and modify DOM placement of breadcrumb after first banner.
     */
    const body = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('body');
    // Guard against being in the WordPress admin area.
    const wpAdmin = body.classList.contains('wp-admin');
    if (wpAdmin) return;
    const home = body.classList.contains('home');
    const header = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.bcgov-site-header');
    const isGovLogo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-site-logo');
    const footer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('footer');
    const postContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-post-content');
    const customCSS = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('#wp-custom-css');
    if (null !== customCSS) {
      customCSS.innerText = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.unEscapeCSS)(customCSS.innerText);
    }

    /*
     * Set the scroll padding to the height of the header
     */
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--scroll-padding', headerHeight + 'px');
    let bannerElement = null;
    if (null !== postContent) {
      bannerElement = postContent.firstElementChild;
    }
    const breadcrumb = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.breadcrumb-nav-section');
    if (null !== isGovLogo) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('img', isGovLogo).setAttribute('alt', 'BCGov Logo');
    }
    let takeover,
      nav = null;
    if (null !== header) {
      takeover = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.is-style-takeover-menu', header);
      nav = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('nav', header);
    }
    if (null !== window.site.siteName && '' !== window.site.siteName && undefined !== window.site.siteName) {
      body.classList.add(window.site.siteName);
    } else {
      body.classList.add('bcgov');
    }
    if (null !== window.site.headerEffect && null !== takeover) {
      body.classList.add(`header-${window.site.headerEffect}`);
    } else {
      body.classList.add('header-scroll');
    }
    if (null !== window.site.customBodyClass && '' !== window.site.customBodyClass) {
      body.classList.add(`custom-${window.site.customBodyClass}`);
    }

    /*
     * Any inital element with a class that includes 'banner' will be moved above the breadcrumb navigation.
     * However if the class name also includes 'in-page' it will not be moved.
     * eg: in-page-strategies-banner
     */
    if (null !== bannerElement) {
      if (bannerElement.className.split(' ').some(individualClass => /.*banner.*/.test(individualClass)) && !bannerElement.className.split(' ').some(individualClass => /.*in-page.*/.test(individualClass))) {
        if (null !== breadcrumb) {
          bannerElement.parentNode.insertBefore(breadcrumb, bannerElement.nextSibling);
          breadcrumb.classList.add('alignwide');
          if (home) {
            breadcrumb.remove();
          }
        }
      }
    }

    /**
     * Enable fixed or scroll header based on site options.
     */
    if (null !== nav && ('fixed' === window.site.headerEffect || 'hides' === window.site.headerEffect)) {
      header.style.position = 'fixed';
    }
    if (null !== takeover && (null === window.site.headerEffect || 'scroll' === window.site.headerEffect)) {
      header.style.position = 'absolute';
      header.style.overflow = 'hidden';
      header.style.transform = 'none';
    }
    if (null === nav) {
      body.style.paddingTop = 0;
    }

    /**
     * Set up scroll to top link.
     */
    const backToTopBtn = document.createElement('a');
    backToTopBtn.setAttribute('class', 'back-to-top');
    backToTopBtn.setAttribute('alt', 'Back to top');
    backToTopBtn.setAttribute('title', 'Back to top');
    backToTopBtn.setAttribute('tabindex', '0');
    backToTopBtn.setAttribute('aria-label', 'Click to go back to the top of the page');
    backToTopBtn.setAttribute('href', '#top');
    backToTopBtn.setAttribute('role', 'button');
    if (null !== footer) {
      footer.append(backToTopBtn);
    }
    const backToTopImage = document.createElement('img');
    backToTopImage.setAttribute('class', 'back-to-top-icon');
    backToTopImage.setAttribute('alt', 'back to top icon');
    backToTopImage.setAttribute('src', window.site.templateDir + '/assets/images/back-to-top.png');
    backToTopBtn.append(backToTopImage);

    /**
     * Manage events after page scroll.
     */

    let lastScrollTop = 0;
    const scrollTopPadding = 100;
    const windowScroll = () => {
      /**
       * Set back to top link visible when close to bottom of window.
       */
      const backToTop = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.back-to-top');
      if (null !== backToTop) {
        if (window.pageYOffset + window.innerHeight > document.body.offsetHeight - 1000) {
          backToTop.style.display = 'block';
          backToTop.style.opacity = '0.75';
        } else {
          backToTop.style.display = 'none';
          backToTop.style.opacity = '0';
        }
      }
      /**
       * Enable header scroll show/hide based on site options.
       */
      if (null !== nav && 'hides' === window.site.headerEffect) {
        const scrollTopPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTopPosition < lastScrollTop) {
          // Do scroll up management.
          if (scrollTopPosition > scrollTopPadding) {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0%)';
          }
        } else if (scrollTopPosition > scrollTopPadding) {
          header.style.opacity = '0';
          header.style.transform = 'translateY(-100%)';
        }
        lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
      }
    };

    /**
     * Manage events after page load.
     */
    const windowLoad = () => {
      windowResize();
    };

    /**
     * Manage events after window resize.
     */
    const windowResize = () => {
      /**
       * Set orientation helper classes on body.
       */
      const height = window.innerHeight;
      const width = document.body.clientWidth;
      if (width > height) {
        // Landscape
        document.body.classList.remove('portrait');
        document.body.classList.add('landscape');
      } else {
        // Portrait
        document.body.classList.remove('landscape');
        document.body.classList.add('portrait');
      }
      /**
       * Set device size helper classes on body.
       * Needed for overriding WordPress specific block size !important.
       * eg: .wp-block-media-text.is-stacked-on-mobile for small breakpoint.
       */
      if (width <= 782) {
        /**
         * Mobile or small breakpoint: $breakpoint-sm
         */
        document.body.classList.remove('largeScreen');
        document.body.classList.remove('tablet');
        document.body.classList.add('mobile');
      } else if (width <= 1199) {
        /**
         * Tablet or large breakpoint for mid-sized resolution changes: $breakpoint-lg
         */
        document.body.classList.remove('mobile');
        document.body.classList.add('tablet');
        document.body.classList.remove('largeScreen');
      } else {
        /**
         * Desktop or wider than large breakpoint
         */
        document.body.classList.remove('mobile');
        document.body.classList.remove('tablet');
        document.body.classList.add('largeScreen');
      }
    };
    window.addEventListener('resize', windowResize);
    window.addEventListener('scroll', windowScroll);
    window.addEventListener('load', windowLoad);
  }, 0);
};
if ('complete' === document.readyState) {
  domReady();
} else {
  document.addEventListener('DOMContentLoaded', domReady);
}

/***/ }),

/***/ "./src/scripts/public/notification-banner.js":
/*!***************************************************!*\
  !*** ./src/scripts/public/notification-banner.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/public/utils/index.js");


/**
 * General Block Theme window event management and DOM manipulation.
 * [@return](https://github.com/return) {void}
 */
const domReady = () => {
  /*
   * SafarIE bug requires 0ms timeout.
   */
  setTimeout(function () {
    const body = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('body');
    let notificationEnabled = '1' === window.site.noticeEnabled ? true : false;
    const notificationHomepageOnly = '1' === window.site.noticeHomepageOnly ? true : false;
    const notificationLabelBold = '1' === window.site.noticeLabelBold ? true : false;
    const notificationLabelBig = '1' === window.site.noticeLabelBig ? true : false;
    let notificationStatus = window.site.noticeStatus;
    let notificationContent = window.site.noticeContent;
    const notificationButtonLabel = window.site.noticeButtonLabel;
    let notificationButtonEnabled = '1' === window.site.noticeButtonEnabled ? true : false;
    const notificationButtonAriaLabel = window.site.noticeButtonAriaLabel;
    const notificationButtonLink = window.site.noticeButtonLink;
    let notificationButtonUtmCampaign = window.site.noticeButtonUtmCampaign;
    const networkNotificationBannerNetworkEnabled = '1' === window.site.networkBannerEnabledNet ? true : false;
    const networkNotificationStatus = window.site.networkBannerType;
    const networkNotificationContent = window.site.networkBannerContent;
    const networkNotificationButtonUtmCampaign = window.site.networkBannerUtm;
    if (notificationEnabled && notificationHomepageOnly) {
      notificationEnabled = body.classList.contains('home') ? true : false;
    }
    const currentPage = window.location.href;
    if (notificationEnabled && notificationButtonLink === currentPage) {
      notificationEnabled = false;
    }

    // Use Network banner content if enabled and not overidden by local banner.
    if (networkNotificationBannerNetworkEnabled && !notificationEnabled) {
      notificationEnabled = true;
      notificationButtonEnabled = false;
      notificationContent = networkNotificationContent;
      notificationStatus = networkNotificationStatus;
      notificationButtonUtmCampaign = networkNotificationButtonUtmCampaign;
    }
    if (notificationEnabled) {
      const notificationContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
        class: `notice notification ${notificationStatus}`,
        role: 'alert',
        'aria-live': 'assertive'
      });
      const notificationContentInnerContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
        class: 'inner-container'
      });
      const notificationContentInner = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {
        class: `${notificationLabelBold ? 'bold' : ''} ${notificationLabelBig ? 'big' : ''}`,
        html: `${notificationContent}`
      });
      const notfificationBtnContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
        class: 'btn-container'
      });
      const notfificationBtn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {
        'aria-label': `${notificationButtonAriaLabel ? notificationButtonAriaLabel : notificationContentInner + ' – ' + notificationButtonLabel}`,
        class: `${notificationLabelBold ? 'bold' : ''} ${notificationLabelBig ? 'big' : ''}`,
        text: `${notificationButtonLabel}`,
        onclick: `location.href="${notificationButtonLink}${notificationButtonUtmCampaign ? '?utm_campaign=' + notificationButtonUtmCampaign : ''}"`
      });

      // Assemble the Notification banner.
      document.body.prepend(notificationContainer);
      if (notificationButtonEnabled) {
        notificationContainer.prepend(notfificationBtnContainer);
        notificationContentInnerContainer.prepend(notfificationBtn);
      } else {
        notificationContentInnerContainer.classList.add('no-btn');
      }
      notificationContainer.prepend(notificationContentInnerContainer);
      notificationContentInnerContainer.prepend(notificationContentInner);
    }
  }, 0);
};
if ('complete' === document.readyState) {
  domReady();
} else {
  document.addEventListener('DOMContentLoaded', domReady);
}

/***/ }),

/***/ "./src/scripts/public/print.js":
/*!*************************************!*\
  !*** ./src/scripts/public/print.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/public/utils/index.js");


/**
 * Print mode manipulation.
 * [@return](https://github.com/return) {void}
 */
const domReady = () => {
  /*
   * SafarIE bug requires 0ms timeout.
   */
  setTimeout(function () {
    const siteLogo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-site-logo img');
    const siteName = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-site-title');

    /*
     * Print mode header synthesis
     */
    if (null !== siteLogo) {
      const invertBackground = siteLogo.hasAttribute('data-print');
      const printHeaderContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
        class: 'print-header'
      });
      const cloneLogo = siteLogo.cloneNode(true);
      printHeaderContainer.className = 'print-header';
      if (invertBackground) {
        printHeaderContainer.classList.add('print-header-black-background');
        const printHeaderBlackImage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
          class: 'black-background',
          src: window.site.templateDir + '/assets/images/svg/black.svg'
        });
        printHeaderContainer.append(printHeaderBlackImage);
      }
      document.body.prepend(printHeaderContainer);
      printHeaderContainer.prepend(cloneLogo);
      if (null !== siteName) {
        const cloneSiteName = siteName.cloneNode(true);
        printHeaderContainer.append(cloneSiteName);
      }
    }

    /*
     * Print mode enable parent containers for images allowed to print
     */
    const imageElement = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('img');
    imageElement.forEach(image => {
      const imageContainer = image.closest('figure');
      if (true === image.hasAttribute('data-print')) {
        if (null !== imageContainer) {
          imageContainer.classList.add('print');
        }
      }
    });
    const printMediaQuery = window.matchMedia('print');
    function handlePrintChange(e) {
      const imagesToPrint = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('img');
      imagesToPrint.forEach(image => {
        const imageContainer = image.closest('figure');
        if (true === image.hasAttribute('data-print-width')) {
          if (e.matches) {
            image.dataset.nonPrintStyle = image.getAttribute('style');
          }
          if (null !== imageContainer) {
            if (e.matches) {
              image.setAttribute('style', 'max-width: ' + image.dataset.printWidth + '% !important');
            } else if (image.dataset.nonPrintStyle) {
              image.removeAttribute('style');
              image.setAttribute('style', image.dataset.nonPrintStyle);
            }
          }
        }
      });
    }

    // Uses a matchMedia MediaQueryList so do not use addGlobalEventListener
    printMediaQuery.addEventListener('change', handlePrintChange);

    // Initial check
    handlePrintChange(printMediaQuery);
  }, 0);
};
if ('complete' === document.readyState) {
  domReady();
} else {
  document.addEventListener('DOMContentLoaded', domReady);
}

/***/ }),

/***/ "./src/scripts/public/ribbon-navigation.js":
/*!*************************************************!*\
  !*** ./src/scripts/public/ribbon-navigation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/public/utils/index.js");


/**
 * Ribbon navigation manipulation.
 * [@return](https://github.com/return) {void}
 */
const domReady = () => {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.is-style-ribbon-menu').length) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('body').classList.add('has-ribbon-menu');

    /*
     * Check for menu items being out of viewport and class is needed.
     */
    function doBoundsCheck(targetEl) {
      setTimeout(function () {
        const container = targetEl;
        const childContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('ul', container);
        let bounding = null;
        const parentBounding = container.getBoundingClientRect();
        if (null !== childContainer) {
          bounding = childContainer.getBoundingClientRect();
        }
        if (null !== bounding && bounding.right > (window.innerWidth || document.documentElement.clientWidth)) {
          if (null !== childContainer) {
            childContainer.classList.add('is-offscreen');
            childContainer.style.left = 'calc(' + parentBounding.width + 'px - 185%)';
            childContainer.style.right = 'auto';
            childContainer.style.top = '20%';
            childContainer.style.position = 'absolute';
          }
        }
      }, 0);
    }
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('li.wp-block-navigation-item').length) {
      const elem = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('li.wp-block-navigation-item');
      elem.forEach(i => {
        i.addEventListener('pointerover', e => {
          let target = e.target;
          if (target.tagName !== 'LI') {
            target = target.closest('li');
          }
          doBoundsCheck(target);
        }, {
          capture: false
        });
      });
    }

    /*
     * Sets up an integrated menu item for the language switcher
     * when NOT using the "Displays as dropdown" (select-based) option
     */
    let subMenuLanguageGroupLiClasses = '';
    let subMenuLanguageOptionLiClasses = '';
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-polylang-language-switcher') && !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-polylang-language-switcher select')) {
      const ulmainnav = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-navigation__container');
      if (ulmainnav) {
        ulmainnav.classList.add('primary-menu-container');
        ulmainnav.classList.add('ul-main-nav');
      }
      const submenuLis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('li', ulmainnav);
      const subSubmenuLis = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.wp-block-navigation__submenu-container li', ulmainnav);
      submenuLis.forEach(li => {
        if (li.classList.contains('wp-block-navigation-submenu') && '' === subMenuLanguageGroupLiClasses) {
          subMenuLanguageGroupLiClasses = li.classList.toString().replace(/,/g, ' ').replace('current-menu-item', '');
        }
      });
      subSubmenuLis.forEach(li => {
        if (li.classList.contains('wp-block-navigation-item') && '' === subMenuLanguageOptionLiClasses) {
          subMenuLanguageOptionLiClasses = li.classList.toString().replace(/,/g, ' ').replace('current-menu-item', '');
        }
      });

      // Attempt to assign colours when there aren't any other sub-menus to draw from
      if ('' === subMenuLanguageGroupLiClasses) {
        subMenuLanguageGroupLiClasses = `${subMenuLanguageOptionLiClasses} has-text-color has-background-color has-background has-secondary-brand-background-color wp-block-navigation-item has-child open-on-hover-click wp-block-navigation-submenu`;
      }
      let currentUl = ulmainnav;
      const ulLangSwitch = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-polylang-language-switcher');
      const lis1 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.lang-item', ulLangSwitch);
      if (lis1) {
        lis1.forEach(li => {
          const a = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('a', li);
          const href = a.getAttribute('href');
          const text = a.textContent;
          let li2 = null;
          if (li.classList.contains('current-lang')) {
            li2 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', {
              class: `language-group ${subMenuLanguageGroupLiClasses}`
            });
          } else {
            li2 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', {
              class: `language-option ${subMenuLanguageOptionLiClasses}`
            });
          }
          if (li.classList.contains('current-lang')) {
            const button = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {
              class: 'wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle language_switcher',
              'aria-label': text + ' submenu',
              'aria-expanded': 'false'
            });
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            svg.setAttribute('width', '12');
            svg.setAttribute('height', '12');
            svg.setAttribute('viewBox', '0 0 12 12');
            svg.setAttribute('fill', 'none');
            svg.setAttribute('aria-hidden', 'true');
            svg.setAttribute('focusable', 'false');
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', 'M1.50002 4L6.00002 8L10.5 4');
            path.setAttribute('stroke-width', '1.5');
            svg.appendChild(path);
            button.appendChild(svg);
            li2.appendChild(button);
            const ul3 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', {
              class: 'wp-block-navigation__submenu-container'
            });
            currentUl.appendChild(ul3);
            currentUl = ul3;
          }
          const a2 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
            class: 'wp-block-navigation-item__content',
            href,
            'aria-current': 'page'
          });
          const span = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {
            class: 'wp-block-navigation-item__label',
            text
          });
          currentUl.appendChild(li2);
          a2.appendChild(span);
          li2.appendChild(a2);
          const button = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-navigation-submenu__toggle.language_switcher');

          // move the link before the button
          if (button && li2.classList.contains('wp-block-navigation-submenu')) {
            li2.insertBefore(button, a2.nextSibling);
            const ul3 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', {
              class: 'wp-block-navigation__submenu-container language_switcher_options ul3'
            });
            li2.appendChild(ul3);
          }
          const ul3 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-navigation__submenu-container.language_switcher_options');
          if (!li.classList.contains('has-child') && ul3) {
            currentUl = ul3;
          }
        });
      }

      // remove the language switcher down arrow from the DOM when using the "Show arrow" navigation option
      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.language-group.open-on-hover-click')) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.language-group button').remove();
      }

      // remove the default language switcher from the DOM when using the "Displays as dropdown" option
      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-polylang-language-switcher select')) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-polylang-language-switcher').remove();
      }
    }
    const ulPrimary = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.primary-menu-container');
    const ulLanguageOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.language_switcher_options');
    if (ulPrimary && ulLanguageOptions) {
      const lis2 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.language-option', ulPrimary);
      if (lis2) {
        lis2.forEach(li => {
          subMenuLanguageGroupLiClasses.split(' ').forEach(className => {
            if ('' !== className) {
              li.classList.add(className);
            }
          });
          ulLanguageOptions.appendChild(li);
        });
      }
    }
  }
};
if ('complete' === document.readyState) {
  domReady();
} else {
  document.addEventListener('DOMContentLoaded', domReady);
}

/***/ }),

/***/ "./src/scripts/public/sites/cleanbc/cleanbc-accessibility.js":
/*!*******************************************************************!*\
  !*** ./src/scripts/public/sites/cleanbc/cleanbc-accessibility.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/scripts/public/utils/index.js");


/**
 * Accessibility DOM manipulation.
 */
const domReady = () => {
  /*
   * SafarIE bug requires 0ms timeout.
   */
  setTimeout(function () {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.actions-accordion-header')) {
      const getSiblings = function (elem) {
        // Setup siblings array and get the first sibling
        const siblings = [];
        let sibling = elem.parentNode.firstChild;

        // Loop through each sibling and push to the array
        while (sibling) {
          if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
          }
          sibling = sibling.nextSibling;
        }
        return siblings;
      };
      /*
       * Inject ARIA labels into queried content.
       */
      const labelEls = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.labelInjector');
      labelEls.forEach(label => {
        const siblings = getSiblings(label);
        const ariaLabel = label.getAttribute('data-label');
        siblings.forEach(el => {
          if (el.classList.contains('wp-block-buttons')) {
            const link = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-button__link', el);
            link.setAttribute('aria-label', ariaLabel);
          }
        });
        label.remove();
      });
    }
  }, 0);
};
if ('complete' === document.readyState) {
  domReady();
} else {
  document.addEventListener('DOMContentLoaded', domReady);
}

/***/ }),

/***/ "./src/scripts/public/sites/cleanbc/cleanbc-dom-loader.js":
/*!****************************************************************!*\
  !*** ./src/scripts/public/sites/cleanbc/cleanbc-dom-loader.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/scripts/public/utils/index.js");


/**
 * General CleanBC DOM manipulation.
 */
const domReady = () => {
  // Only run for CleanBC or sites that use all styles.
  if ('cleanbc' === window.site.siteName || window.site.allSiteStyles.length) {
    /*
     * SafarIE bug requires 0ms timeout.
     */
    setTimeout(function () {
      // CleanBC Icon Buttons
      const iconButtons = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('a.icon');
      if (iconButtons.length) {
        iconButtons.forEach(button => {
          if (null === button.getAttribute('href')) {
            button.setAttribute('tabindex', '-1');
            button.style.pointerEvents = 'none';
          }
        });
      }

      // This should be CSS...
      const iconButtonContainers = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.wp-block-button.is-style-icon');
      if (iconButtonContainers.length) {
        iconButtonContainers.forEach(container => {
          const containerLink = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('a', container);
          if (null !== containerLink && !container.classList.contains('has-size-large')) {
            containerLink.style.outlineOffset = '1rem';
          }
        });
      }
      /**
       * Manage events after page scroll.
       */
      const cleanbcWindowScroll = () => {
        // Do nothing for now – will remove if not needed.
      };
      window.addEventListener('scroll', cleanbcWindowScroll);
    }, 0);
  }
};
if ('complete' === document.readyState) {
  domReady();
} else {
  document.addEventListener('DOMContentLoaded', domReady);
}

/***/ }),

/***/ "./src/scripts/public/sites/cleanbc/patterns/actions-toggle-query.js":
/*!***************************************************************************!*\
  !*** ./src/scripts/public/sites/cleanbc/patterns/actions-toggle-query.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./src/scripts/public/utils/index.js");
/* harmony import */ var _admin_utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../admin/utils/common */ "./src/scripts/admin/utils/common.js");



/**
 * Actions Toggle manipulation.
 */
const domReady = () => {
  /*
   * SafarIE bug requires 0ms timeout.
   */
  setTimeout(function () {
    const elActionToggleButtons = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.actions-toggle-buttons .wp-block-button');
    if (elActionToggleButtons.length) {
      elActionToggleButtons.forEach((element, index) => {
        const button = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('a.wp-block-button__link', element);
        const buttonText = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('a.wp-block-button__link', element).innerText;
        const newClass = buttonText.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        const accordionBlockGroup = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.actions-accordion-header .wp-block-group.query-group');
        element.newClass = newClass;
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('a.wp-block-button__link', element).classList.add(element.newClass);
        if (0 === index) {
          button.classList.add('active');
          accordionBlockGroup.forEach(el => {
            el.classList.add('hidden');
            el.classList.remove('active-group');
            if (el.classList.contains(`${newClass}`)) {
              el.classList.toggle('hidden');
              el.classList.add('active-group');
            }
          });
        }
        button.addEventListener('click', function (e) {
          e.preventDefault();
          const buttonLinks = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.actions-toggle-buttons .wp-block-button a.wp-block-button__link');
          if (buttonLinks.length) {
            buttonLinks.forEach(el => {
              el.classList.remove('active');
            });
            button.classList.toggle('active');
            const targetAction = e.target.textContent.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.actions-toggle-query-loop .category-actions').forEach(el => {
              el.classList.add('hidden');
              if (el.classList.contains(`${targetAction}`)) {
                el.classList.toggle('hidden');
              }
            });
            accordionBlockGroup.forEach(el => {
              el.classList.add('hidden');
              el.classList.remove('active-group');
              if (el.classList.contains(`${targetAction}`)) {
                el.classList.toggle('hidden');
                el.classList.add('active-group');
              }
            });
            countActiveProjects();
          }
        });
      });
      const queryParams = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop)
      });
      // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
      const queryValue = queryParams.target; // "some_value"

      const targetButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)(`.actions-toggle-buttons .wp-block-button__link[href="#${queryValue}"]`);
      if (null !== targetButton) {
        (0,_admin_utils_common__WEBPACK_IMPORTED_MODULE_1__.triggerClick)(targetButton);
      }
      countActiveProjects();
      const elActions = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.type-post.category-actions');
      elActions.forEach(element => {
        const heading = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-post-title', element).innerText;
        const image = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.attachment-post-thumbnail', element);
        const titleContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-post-excerpt__excerpt', element);
        if (null !== image && null !== titleContainer) {
          image.setAttribute('title', titleContainer.innerText);
        }
        const linkAddition = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-button__link', element);
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.wp-block-button__link', element).length) {
          linkAddition.innerText = `${linkAddition.innerText} ${heading.toLowerCase()}`;
          linkAddition.setAttribute('src', `${window.site.domain}/actions/${heading.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`);
          linkAddition.addEventListener('click', e => {
            window.location.href = e.target.getAttribute('src');
          });
        }
        const newClass = heading.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        const activeButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('a.wp-block-button__link.active');
        const targetAction = activeButton.innerText.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        element.classList.add(newClass);
        element.classList.add('hidden');
        if (element.classList.contains(`${targetAction}`)) {
          element.classList.toggle('hidden');
        }
      });
    }
  }, 0);
  function countActiveProjects() {
    const elAccordionItems = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.wp-block-bcgov-block-theme-collapse-item');
    elAccordionItems.forEach(item => {
      item.classList.remove('hidden');
      const queryGroup = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.active-group', item);
      queryGroup.forEach(group => {
        const childItem = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-group.project', group);
        if (null !== childItem) {
          const childCount = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.wp-block-columns', childItem);
          const headingCounter = childItem.closest('.wp-block-bcgov-block-theme-collapse-item').qs('.collapse-header .collapse-title');
          const headingCounterContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.count', headingCounter);
          const headingCount = childCount.length;
          if (childCount.length) {
            // console.log(headingCount);
            if (null !== headingCounterContainer && headingCount) {
              headingCounterContainer.innerHTML = `${headingCount}`;
            }
            if (null === headingCounterContainer && headingCount) {
              headingCounter.innerHTML = `${headingCounter.innerText} <span class="count">${headingCount} </span>`;
            }
          }
        }
        const noChildItem = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.no-results', group);
        if (noChildItem !== null) {
          const headerCollapseItem = noChildItem.closest('.wp-block-bcgov-block-theme-collapse-item');
          const headerContainer = noChildItem.closest('.wp-block-bcgov-block-theme-collapse-item').qs('.collapse-title');
          const spanToReset = noChildItem.closest('.wp-block-bcgov-block-theme-collapse-item').qs('.collapse-header .count');
          if (null !== headerCollapseItem) {
            headerCollapseItem.classList.add('hidden');
          }
          if (null !== spanToReset) {
            spanToReset.innerHTML = '0';
          } else {
            headerContainer.innerHTML = `${headerContainer.innerText} <span class="count">0</span>`;
          }
        }
      });
    });
  }
};
if ('complete' === document.readyState) {
  domReady();
} else {
  document.addEventListener('DOMContentLoaded', domReady);
}

/***/ }),

/***/ "./src/scripts/public/sites/cleanbc/patterns/landing-banners.js":
/*!**********************************************************************!*\
  !*** ./src/scripts/public/sites/cleanbc/patterns/landing-banners.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./src/scripts/public/utils/index.js");


/**
 * Landing banners manipulation.
 */
const domReady = () => {
  /*
   * SafarIE bug requires 0ms timeout.
   */
  setTimeout(function () {
    /*
     * Add a clip path SVG to create a mask on landing banner ::before elements.
     * Works in conjuction with .landing-cover-banner styles in _cleanbc--patterns-banners.scss.
     */
    const isHomeBanner = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.home-cover-banner');
    const isLandingBanner = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.landing-cover-banner');
    if (isHomeBanner.length || isLandingBanner.length) {
      const svg = document.getElementsByTagName('svg')[0];
      const clipElementDefs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const clipElementClipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
      clipElementClipPath.setAttribute('id', 'svgPath');
      const clipElementPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      clipElementPath.setAttribute('d', 'M0,77.2v-24.7c0,-8.6,6.8,-15.6,15.3,-16l901.5,-36.6c44.3,-1.7,81.5,33.1,83.2,77.5l-1000,-0.2z');
      clipElementClipPath.setAttribute('transform', 'scale(1.44)');
      svg.setAttribute('clipPathUnits', 'objectBoundingBox');
      svg.style.visibility = 'visible';
      svg.appendChild(clipElementDefs);
      clipElementDefs.appendChild(clipElementClipPath);
      clipElementClipPath.appendChild(clipElementPath);
    }
  }, 0);
};
if ('complete' === document.readyState) {
  domReady();
} else {
  document.addEventListener('DOMContentLoaded', domReady);
}

/***/ }),

/***/ "./src/scripts/public/sites/cleanbc/patterns/sectors-section-cards.js":
/*!****************************************************************************!*\
  !*** ./src/scripts/public/sites/cleanbc/patterns/sectors-section-cards.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./src/scripts/public/utils/index.js");


/**
 * Actions Accordion manipulation.
 */
const domReady = () => {
  /*
   * SafarIE bug requires 0ms timeout.
   */
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.in-page-sectors-section')) {
    setTimeout(function () {
      const elCaptionContainers = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.in-page-sectors-section .wp-block-column');
      const elCaptions = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.in-page-sectors-section figcaption');

      // Manipulate the ::after psedo element content using the image caption.
      // Works in conjunction with CSS.
      if (elCaptions.length) {
        elCaptions.forEach(item => {
          item.style.color = 'var(--wp--preset--color--headline-color)';
          item.closest('.wp-block-column').setAttribute('data-after-content', item.innerText);
        });
      }

      // Capture the click on the column and send down to available link.
      elCaptionContainers.forEach(col => {
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('a', col)) {
          col.style.cursor = 'pointer';
          col.addEventListener('click', function () {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('a', this).click();
          });
        }
      });
    }, 0);
  }
};
if ('complete' === document.readyState) {
  domReady();
} else {
  document.addEventListener('DOMContentLoaded', domReady);
}

/***/ }),

/***/ "./src/scripts/public/takeover-navigation.js":
/*!***************************************************!*\
  !*** ./src/scripts/public/takeover-navigation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/public/utils/index.js");


/**
 * Takeover navigation manipulation.
 * [@return](https://github.com/return) {void}
 */
const domReady = () => {
  /**
   * Add body class for CSS specificity if Takeover Menu is in use.
   */
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.qsa)('.is-style-takeover-menu').length) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('body').classList.add('has-takeover-menu');

    /**
     * Clone site logo node and insert copy inside modal overlay.
     */
    const elLogo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-site-logo');
    const cloneLogo = elLogo.cloneNode(true);
    cloneLogo.id = 'nav-logo';
    cloneLogo.querySelector('.custom-logo-link').setAttribute('tabindex', '-1');
    document.querySelector('.wp-block-navigation__responsive-container-content').after(cloneLogo);
    const elSiteName = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-site-title a');
    const cloneSiteName = elSiteName.cloneNode(true);
    cloneSiteName.id = 'nav-title';
    cloneSiteName.setAttribute('aria-label', 'site homepage');
    document.querySelector('#nav-logo .custom-logo-link').after(cloneSiteName);
  }

  /**
   * Override menu open SVG. Affects all hamburger icon instances.
   */
  const menuOpenSVGToReplace = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-navigation__responsive-container-open svg');
  if (menuOpenSVGToReplace) {
    const newOpenSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newOpenSVG.setAttribute('x', '0');
    newOpenSVG.setAttribute('y', '0');
    newOpenSVG.setAttribute('viewBox', '0 0 24 24');
    newOpenSVG.setAttribute('width', 24);
    newOpenSVG.setAttribute('height', 24);
    newOpenSVG.setAttribute('aria-hidden', 'true');
    newOpenSVG.setAttribute('focusable', 'false');
    newOpenSVG.innerHTML = '<rect x="1.3" y="10.9" width="22" height="2"/><rect x="1.4" y="20.5" width="22" height="2"/><rect x="1.4" y="1.3" width="22" height="2"/>';
    menuOpenSVGToReplace.parentNode.insertBefore(newOpenSVG, menuOpenSVGToReplace.nextSibling);
    menuOpenSVGToReplace.parentNode.removeChild(menuOpenSVGToReplace);
  }

  /**
   * Override menu close SVG. Affects all close icon instances.
   */
  const menuCloseSVGToReplace = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('.wp-block-navigation__responsive-container-close svg');
  if (menuCloseSVGToReplace) {
    const newCloseSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newCloseSVG.setAttribute('x', '0');
    newCloseSVG.setAttribute('y', '0');
    newCloseSVG.setAttribute('viewBox', '0 0 24 24');
    newCloseSVG.setAttribute('width', 24);
    newCloseSVG.setAttribute('height', 24);
    newCloseSVG.setAttribute('aria-hidden', 'true');
    newCloseSVG.setAttribute('focusable', 'false');
    newCloseSVG.innerHTML = '<path d="M13.5,11.7l9.2-9.5l-1.5-1.5L12,10L2.9,0.8L1.4,2.2l9.1,9.5l-9.8,10l1.5,1.5l9.8-9.9l9.8,9.9l1.5-1.5L13.5,11.7z"/>';
    menuCloseSVGToReplace.parentNode.insertBefore(newCloseSVG, menuCloseSVGToReplace.nextSibling);
    menuCloseSVGToReplace.parentNode.removeChild(menuCloseSVGToReplace);
  }
};
if ('complete' === document.readyState) {
  domReady();
} else {
  document.addEventListener('DOMContentLoaded', domReady);
}

/***/ }),

/***/ "./src/scripts/public/utils/index.js":
/*!*******************************************!*\
  !*** ./src/scripts/public/utils/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addGlobalEventListener": () => (/* binding */ addGlobalEventListener),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "qs": () => (/* binding */ qs),
/* harmony export */   "qsa": () => (/* binding */ qsa),
/* harmony export */   "unEscapeCSS": () => (/* binding */ unEscapeCSS)
/* harmony export */ });
/**
 * Utility functions for cleaner JavaScript.
 *
 * Unit tests for functional data manipulations and logical operations found in `Tests`.
 */

/**
 * addGlobalEventListener is a utility function that attaches an event listener to the given parent element and triggers the callback function only if the event target matches the given selector.
 *
 * @param {string} type - The type of event to listen for (e.g. 'click', 'pointerevent')
 * @param {string|Element} selector - The selector to match against the event. Can be a CSS selector string or an Element.
 * @param {Function} callback - The function to be called when the event is triggered
 * @param {Element} [parent=document] - The parent element to attach the event listener to (defaults to document)
 */

function addGlobalEventListener(type, selector, callback) {
  let parent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;
  // check if the selector is valid
  if (!selector || typeof selector !== 'string') {
    throw new Error('Invalid selector: must be CSS selector or an element');
  }

  // check if the callback is a valid function
  if (typeof callback !== 'function') {
    throw new Error('Invalid callback provided');
  }
  parent.addEventListener(type, event => {
    // use qsa to get all elements that match the selector
    const elements = document.querySelectorAll(selector);

    // check if the event target is one of the matching elements
    const target = event.target;
    if (elements.includes(target) || elements.some(element => element.contains(target))) {
      callback(event);
    }
  });
}

/**
 * createElement - creates an HTML element with the given type and options
 *
 * @param {string} type - the type of element to create (e.g. 'div', 'p', 'h1')
 * @param {Object} [options={}] - an object containing key-value pairs of attributes and values to set on the element
 * @param {string} options.class - the class(es) to add to the element – a single space-separated string
 * @param {Object} options.dataset - an object containing key-value pairs of data attributes and values to set on the element
 * @param {string} options.text - the text content to set on the element
 * @return {HTMLElement} the created element
 */
function createElement(type) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const element = document.createElement(type);
  Object.entries(options).forEach(_ref => {
    let [key, value] = _ref;
    if (key === 'class') {
      value.split(' ').forEach(className => {
        if ('' !== className) {
          element.classList.add(className);
        }
      });
      return;
    }
    if (key === 'dataset') {
      Object.entries(value).forEach(_ref2 => {
        let [dataKey, dataValue] = _ref2;
        element.dataset[dataKey] = dataValue;
      });
      return;
    }
    if (key === 'text') {
      element.textContent = value;
      return;
    }
    if (key === 'html') {
      element.innerHTML = value;
      return;
    }
    element.setAttribute(key, value);
  });
  return element;
}

/**
 * qs is a utility function that returns the first element matching the given CSS selector within the given parent element.
 *
 * @param {string} selector - The CSS selector to search for
 * @param {Element} [parent=document] - The parent element to search within (defaults to document)
 * @return {Element} - The first element matching the selector, or null if no match is found
 * @throws {Error} If `selector` argument is missing
 */
function qs(selector) {
  let parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  if (!selector) {
    throw new Error('A selector argument is required for the qs function');
  }
  return parent.querySelector(selector);
}

/**
 * qsa is a utility function that returns an array of all elements matching the given CSS selector within the given parent element.
 *
 * @param {string} selector - The CSS selector to search for
 * @param {Element} [parent=document] - The parent element to search within (defaults to document)
 * @return {Element[]} - An array of all elements matching the selector, or an empty array if no matches are found
 * @throws {Error} If `selector` argument is missing
 */
function qsa(selector) {
  let parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  if (!selector) {
    throw new Error('A selector argument is required for the qsa function');
  }
  return [...parent.querySelectorAll(selector)];
}

/**
 * unEscapeCSS - replaces escape characters in a CSS string with their unescaped equivalents
 *
 * @param {string} cssStr – the CSS string to unescape containing CSS selectors and attributes
 * @return {string} - An escaped CSS string
 */
function unEscapeCSS(cssStr) {
  cssStr = cssStr.replace(/&gt;/g, '>');
  cssStr = cssStr.replace(/&quot;/g, '"');
  cssStr = cssStr.replace(/&#39;/g, "'");
  cssStr = cssStr.replace(/&amp;/g, '&');
  return cssStr;
}

/***/ }),

/***/ "./src/styles/public/index.scss":
/*!**************************************!*\
  !*** ./src/styles/public/index.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/images/bc_gov_logo_transparent.png":
/*!***************************************************!*\
  !*** ./assets/images/bc_gov_logo_transparent.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/bc_gov_logo_transparent.8676596f.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./src/scripts/public/index.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_public_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/public/index.scss */ "./src/styles/public/index.scss");
/* harmony import */ var _assets_images_bc_gov_logo_transparent_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/images/bc_gov_logo_transparent.png */ "./assets/images/bc_gov_logo_transparent.png");
/* harmony import */ var _dom_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-loader */ "./src/scripts/public/dom-loader.js");
/* harmony import */ var _accessibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessibility */ "./src/scripts/public/accessibility.js");
/* harmony import */ var _notification_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification-banner */ "./src/scripts/public/notification-banner.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./print */ "./src/scripts/public/print.js");
/* harmony import */ var _takeover_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./takeover-navigation */ "./src/scripts/public/takeover-navigation.js");
/* harmony import */ var _ribbon_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ribbon-navigation */ "./src/scripts/public/ribbon-navigation.js");
/* harmony import */ var _admin_blocks_collapse_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../admin/blocks/collapse/app */ "./src/scripts/admin/blocks/collapse/app.js");
/* harmony import */ var _sites_cleanbc_cleanbc_dom_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sites/cleanbc/cleanbc-dom-loader */ "./src/scripts/public/sites/cleanbc/cleanbc-dom-loader.js");
/* harmony import */ var _sites_cleanbc_patterns_actions_toggle_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sites/cleanbc/patterns/actions-toggle-query */ "./src/scripts/public/sites/cleanbc/patterns/actions-toggle-query.js");
/* harmony import */ var _sites_cleanbc_patterns_landing_banners__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sites/cleanbc/patterns/landing-banners */ "./src/scripts/public/sites/cleanbc/patterns/landing-banners.js");
/* harmony import */ var _sites_cleanbc_patterns_sectors_section_cards__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sites/cleanbc/patterns/sectors-section-cards */ "./src/scripts/public/sites/cleanbc/patterns/sectors-section-cards.js");
/* harmony import */ var _sites_cleanbc_cleanbc_accessibility__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sites/cleanbc/cleanbc-accessibility */ "./src/scripts/public/sites/cleanbc/cleanbc-accessibility.js");














})();

/******/ })()
;
//# sourceMappingURL=public.js.map