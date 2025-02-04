/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/admin/blocks/card/container/attributes.js":
/*!***************************************************************!*\
  !*** ./src/scripts/admin/blocks/card/container/attributes.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attributes": () => (/* binding */ attributes)
/* harmony export */ });
const attributes = {
  backgroundColor: {
    type: 'string',
    default: 'transparent'
  },
  firstBreakColumns: {
    type: 'integer',
    default: 3
  },
  cardId: {
    type: 'string',
    default: ''
  }
};

/***/ }),

/***/ "./src/scripts/admin/blocks/card/container/deprecated.js":
/*!***************************************************************!*\
  !*** ./src/scripts/admin/blocks/card/container/deprecated.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deprecated": () => (/* binding */ deprecated)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/scripts/admin/blocks/card/container/attributes.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



const deprecated = [{
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__.attributes,
  save: props => {
    const {
      attributes: {
        cardId,
        backgroundColor,
        firstBreakColumns,
        firstBreak,
        secondBreakColumns,
        secondBreak
      },
      className
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
      jsx: true
    }, `
							#${cardId} {
								background-color: ${backgroundColor};
							}
							@media ( min-width: ${secondBreak}px ) {
								ul#${cardId} {
									-webkit-flex-direction: row;
									-moz-flex-direction: row;
									-ms-flex-direction: row;
									flex-direction: row;
									-webkit-flex-wrap: wrap;
									-moz-flex-wrap: wrap;
									-ms-flex-wrap: wrap;
									flex-wrap: wrap;
									flex-wrap: wrap;
								}
								ul#${cardId} > li {
									width: ${100 / secondBreakColumns - 1 * 2}%;
									margin: 1%;
								}
							}
							@media ( min-width: ${firstBreak}px ) {
								ul#${cardId} {
									-webkit-flex-direction: row;
									-moz-flex-direction: row;
									-ms-flex-direction: row;
									flex-direction: row;
									-webkit-flex-wrap: wrap;
									-moz-flex-wrap: wrap;
									-ms-flex-wrap: wrap;
									flex-wrap: wrap;
								}
								ul#${cardId} > li {
									width: ${100 / firstBreakColumns - 1 * 2}%;
									margin: 1%;
								}
							}
						`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: className,
      id: cardId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
  }
}, {
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__.attributes,
  save: props => {
    const {
      attributes: {
        cardId,
        backgroundColor,
        firstBreakColumns,
        firstBreak,
        secondBreakColumns,
        secondBreak
      },
      className
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      role: "navigation"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
      jsx: true
    }, `
							#${cardId} {
								background-color: ${backgroundColor};
							}
							@media ( min-width: ${secondBreak}px ) {
								ul#${cardId} {
									-webkit-flex-direction: row;
									-moz-flex-direction: row;
									-ms-flex-direction: row;
									flex-direction: row;
									-webkit-flex-wrap: wrap;
									-moz-flex-wrap: wrap;
									-ms-flex-wrap: wrap;
									flex-wrap: wrap;
									flex-wrap: wrap;
								}
								ul#${cardId} > li {
									width: ${100 / secondBreakColumns - 1 * 2}%;
									margin: 1%;
								}
							}
							@media ( min-width: ${firstBreak}px ) {
								ul#${cardId} {
									-webkit-flex-direction: row;
									-moz-flex-direction: row;
									-ms-flex-direction: row;
									flex-direction: row;
									-webkit-flex-wrap: wrap;
									-moz-flex-wrap: wrap;
									-ms-flex-wrap: wrap;
									flex-wrap: wrap;
								}
								ul#${cardId} > li {
									width: ${100 / firstBreakColumns - 1 * 2}%;
									margin: 1%;
								}
							}
						`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: className,
      id: cardId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
  }
}, {
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__.attributes,
  save: props => {
    const {
      attributes: {
        cardId
        // backgroundColor,
        // firstBreakColumns,
        // firstBreak,
        // secondBreakColumns,
        // secondBreak,
      },

      className
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: className,
      id: cardId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
  }
}];

/***/ }),

/***/ "./src/scripts/admin/blocks/card/container/index.js":
/*!**********************************************************!*\
  !*** ./src/scripts/admin/blocks/card/container/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/scripts/admin/blocks/card/container/attributes.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deprecated */ "./src/scripts/admin/blocks/card/container/deprecated.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/common */ "./src/scripts/admin/utils/common.js");









(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('bcgov/card-container', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Basic Card Container', 'basic-card-container'),
  icon: 'images-alt',
  category: 'media',
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__.attributes,
  getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },
  supports: {
    align: true
  },
  example: {},
  edit: props => {
    const {
      attributes: {
        cardId,
        backgroundColor,
        firstBreakColumns
      },
      className,
      clientId
    } = props;
    const ALLOWED_BLOCKS = ['bcgov/card', 'bcgov/fancy-button'];
    props.setAttributes({
      cardId: `card-container-${clientId}`
    });
    const onChangeBackgroundColor = color => {
      props.setAttributes({
        backgroundColor: (0,_utils_common__WEBPACK_IMPORTED_MODULE_8__.defaults)(color, 'transparent')
      });
    };
    const RangeControlFirstBreak = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.withState)({
      column: firstBreakColumns
    })(_ref => {
      let {
        column,
        setState
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Columns'),
        value: column,
        initialPosition: "3",
        onChange: val => {
          props.setAttributes({
            firstBreakColumns: val
          });
          setState({
            column
          });
        },
        min: 1,
        max: 6
      });
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: className,
      style: {
        backgroundColor
      },
      id: cardId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Colour')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
      colors: _utils_common__WEBPACK_IMPORTED_MODULE_8__.allowedColors,
      value: backgroundColor,
      onChange: onChangeBackgroundColor
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop Columns')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControlFirstBreak, null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS
    }));
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_7__.deprecated,
  save: props => {
    const {
      attributes: {
        cardId,
        backgroundColor,
        firstBreakColumns
      },
      className
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: `${className} lg-break-${firstBreakColumns}`,
      id: cardId,
      style: {
        backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/scripts/admin/blocks/card/item/attributes.js":
/*!**********************************************************!*\
  !*** ./src/scripts/admin/blocks/card/item/attributes.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attributes": () => (/* binding */ attributes)
/* harmony export */ });
const attributes = {
  title: {
    type: 'array',
    source: 'children',
    selector: '.card-block-title'
  },
  content: {
    type: 'array',
    source: 'children',
    selector: '.card-block-content'
  },
  alignment: {
    type: 'string',
    default: 'none'
  },
  color: {
    type: 'string',
    default: 'inherit'
  },
  backgroundColor: {
    type: 'string',
    default: 'transparent'
  }
};

/***/ }),

/***/ "./src/scripts/admin/blocks/card/item/index.js":
/*!*****************************************************!*\
  !*** ./src/scripts/admin/blocks/card/item/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/scripts/admin/blocks/card/item/attributes.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/common */ "./src/scripts/admin/utils/common.js");







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('bcgov/card', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Basic Card', 'basic-card'),
  icon: 'format-image',
  category: 'media',
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__.attributes,
  example: {},
  edit: props => {
    const {
      attributes: {
        alignment,
        color,
        backgroundColor
      },
      className
    } = props;
    const ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'core/image', 'core/html', 'core/button'];
    const onChangeAlignment = newAlignment => {
      props.setAttributes({
        alignment: (0,_utils_common__WEBPACK_IMPORTED_MODULE_6__.defaults)(newAlignment, 'none')
      });
    };
    const onChangeColor = val => {
      props.setAttributes({
        color: (0,_utils_common__WEBPACK_IMPORTED_MODULE_6__.defaults)(val, 'transparent')
      });
    };
    const onChangeBackgroundColor = val => {
      props.setAttributes({
        backgroundColor: (0,_utils_common__WEBPACK_IMPORTED_MODULE_6__.defaults)(val, 'transparent')
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `align-${alignment} ${className}`,
      style: {
        backgroundColor,
        color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
      value: alignment,
      onChange: onChangeAlignment
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Colour')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
      colors: _utils_common__WEBPACK_IMPORTED_MODULE_6__.allowedColors,
      value: color,
      onChange: onChangeColor
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Colour')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
      colors: _utils_common__WEBPACK_IMPORTED_MODULE_6__.allowedColors,
      value: backgroundColor,
      onChange: onChangeBackgroundColor
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS
    }));
  },
  save: props => {
    const {
      attributes: {
        alignment,
        backgroundColor,
        color
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `align-${alignment}`,
      style: {
        backgroundColor,
        color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/scripts/admin/blocks/collapse/app.js":
/*!**************************************************!*\
  !*** ./src/scripts/admin/blocks/collapse/app.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/scripts/admin/blocks/collapse/container/index.js":
/*!**************************************************************!*\
  !*** ./src/scripts/admin/blocks/collapse/container/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('bcgov-block-theme/collapse', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Collapse Container', 'bcgov-blocks'),
  icon: 'admin-page',
  category: 'layout',
  attributes: {
    collapseId: {
      type: 'string',
      default: ''
    }
  },
  supports: {
    align: ['wide']
  },
  example: {},
  edit: props => {
    const {
      attributes: {
        collapseId
      },
      className,
      clientId
    } = props;
    const ALLOWED_BLOCKS = ['bcgov-block-theme/collapse-item'];
    props.setAttributes({
      collapseId: `collapse-container-${clientId}`
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className,
      id: collapseId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS
    }));
  },
  save: props => {
    const {
      attributes: {
        collapseId
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: collapseId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "collapse-container-nav"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      "data-target": `#${collapseId}`,
      className: "collapse-expand-all"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Expand all'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      "data-target": `#${collapseId}`,
      className: "collapse-collapse-all"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Collapse all')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/scripts/admin/blocks/collapse/container/public.js":
/*!***************************************************************!*\
  !*** ./src/scripts/admin/blocks/collapse/container/public.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/scripts/admin/blocks/collapse/item/index.js":
/*!*********************************************************!*\
  !*** ./src/scripts/admin/blocks/collapse/item/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('bcgov-block-theme/collapse-item', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Collapse Item', 'bcgov-blocks'),
  icon: 'welcome-add-page',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      selector: '.bcgov-collapse-title'
    },
    itemId: {
      type: 'string',
      default: ''
    },
    headingId: {
      type: 'string',
      default: ''
    }
  },
  example: {},
  edit: props => {
    const {
      attributes: {
        title,
        itemId,
        headingId
      },
      className,
      clientId
    } = props;
    const onChangeTitle = value => {
      props.setAttributes({
        title: value
      });
    };
    props.setAttributes({
      itemId: `collapse-item-${clientId}`
    });
    props.setAttributes({
      headingId: `heading-${clientId}`
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "collapse-header",
      id: headingId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      "data-toggle": "collapse",
      "data-target": `#${itemId}`,
      "aria-expanded": "false",
      "aria-controls": itemId,
      className: "collapsed"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "span",
      onChange: onChangeTitle,
      className: "collapse-title",
      value: title,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('…Title')
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "collapse collapse-container",
      id: itemId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "collapse-body"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, null))));
  },
  save: props => {
    const {
      attributes: {
        title,
        itemId,
        headingId
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "collapse-header",
      id: headingId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      "data-toggle": "collapse",
      "data-target": `#${itemId}`,
      "aria-expanded": "false",
      "aria-controls": itemId,
      className: "collapsed"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "span",
      className: "collapse-title",
      value: title
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "collapse collapse-container",
      id: itemId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "collapse-body"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "collapse-close"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      "data-toggle": "collapse",
      "data-target": `#${itemId}`,
      href: `#${itemId}`,
      role: "button",
      "aria-expanded": "true",
      "aria-controls": itemId
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Collapse'))))));
  }
});

/***/ }),

/***/ "./src/scripts/admin/filters/button-enhanced.js":
/*!******************************************************!*\
  !*** ./src/scripts/admin/filters/button-enhanced.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_button_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/button-icons */ "./src/scripts/admin/utils/button-icons.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





const {
  registerBlockStyle,
  unregisterBlockStyle
} = wp.blocks;
const {
  __
} = wp.i18n;
const {
  addFilter
} = wp.hooks;
const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  TextControl
} = wp.components;

/**
 * Add Size control to Button block.
 */
const styles = [{
  name: 'fill',
  label: 'BCGov',
  default: 'is-bcgov-fill'
}, {
  name: 'outline',
  label: 'Outline'
}, {
  name: 'underline',
  label: 'Underline'
}];
styles.forEach(style => registerBlockStyle('core/button', style));
if ('cleanbc' === window.site.siteName || window.site.allSiteStyles.length) {
  registerBlockStyle('core/button', {
    name: 'icon',
    label: 'Icon'
  });
}
wp.domReady(() => {
  unregisterBlockStyle('core/button', 'default');
});

/**
 * Add Size attribute to Button block.
 *
 * @param  {Object} settings Original block settings
 * @param  {string} name     Block name
 *
 * @return {Object} Filtered block settings
 */
function addAttributes(settings, name) {
  if (name === 'core/button') {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_4__.assign)({}, settings, {
      attributes: (0,lodash__WEBPACK_IMPORTED_MODULE_4__.merge)(settings.attributes, {
        size: {
          type: 'string',
          default: 'regular'
        },
        svgIcon: {
          type: 'string',
          default: ''
        },
        iconsList: {
          type: 'array',
          default: _utils_button_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
        },
        clickFlag: {
          type: 'boolean',
          default: false
        },
        label: {
          type: 'string',
          default: ''
        }
      })
    });
  }
  return settings;
}
addFilter('blocks.registerBlockType', 'bcgov-block-theme/button-block/add-attributes', addAttributes);

/**
 * Add Size and Icons control to Button block.
 */
const addInspectorControl = createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      size,
      svgIcon,
      iconsList,
      clickFlag,
      label
    } = props.attributes;
    const {
      setAttributes
    } = props;
    const {
      name
    } = props;
    if (name !== 'core/button') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props);
    }
    const handleClick = () => {
      setAttributes({
        clickFlag: true
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __('Icon options', 'bcgov-block-theme'),
      initialOpen: false
    }, clickFlag ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
      label: __('Icon', 'bcgov-block-theme'),
      value: svgIcon,
      options: iconsList,
      onChange: value => {
        setAttributes({
          svgIcon: value
        });
      }
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3", null, "Instructions (for CleanBC only):"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, "To change the colour of an icon use the Color \u25B6 Background setting below."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, "Note that the", ' ', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("em", null, "icon color change will only work with the Theme palette"), ' ', "of colours."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("strong", null, "Enable the Icon style"), ' ', "button to use list of icon options."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      onClick: handleClick
    }, "Show icons"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: "Size options",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
      label: "Size",
      value: size,
      options: [{
        label: __('Default', 'bcgov-block-theme'),
        value: 'regular'
      }, {
        label: __('Large', 'bcgov-block-theme'),
        value: 'large'
      }],
      onChange: value => {
        setAttributes({
          size: value
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: "Accessibility",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
      label: "ARIA Label",
      value: label,
      onChange: value => setAttributes({
        label: value
      })
    }))));
  };
}, 'withInspectorControl');
addFilter('editor.BlockEdit', 'bcgov-block-theme/button-block/add-inspector-controls', addInspectorControl);

/**
	
	Add additional classes to the block in the editor.
	*/
const addClassesToEditor = createHigherOrderComponent(BlockListBlock => {
  return props => {
    const {
      attributes: {
        size,
        svgIcon
      },
      className,
      name
    } = props;
    if (name !== 'core/button') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
        [size]: size,
        [svgIcon]: svgIcon
      })
    }));
  };
}, 'addClassesToEditor');
addFilter('editor.BlockListBlock', 'bcgov-block-theme/button-block/add-classes-to-editor', addClassesToEditor);
function Button() {
  return null;
}

/***/ }),

/***/ "./src/scripts/admin/filters/column-enhanced.js":
/*!******************************************************!*\
  !*** ./src/scripts/admin/filters/column-enhanced.js ***!
  \******************************************************/
/***/ (() => {

const {
  registerBlockStyle
} = wp.blocks;
registerBlockStyle('core/column', {
  name: 'dropshadow',
  label: 'Drop shadow'
});

/***/ }),

/***/ "./src/scripts/admin/filters/columns-enhanced.js":
/*!*******************************************************!*\
  !*** ./src/scripts/admin/filters/columns-enhanced.js ***!
  \*******************************************************/
/***/ (() => {

const {
  registerBlockStyle
} = wp.blocks;
registerBlockStyle('core/columns', {
  name: 'constrained',
  label: 'Constrained'
});

/***/ }),

/***/ "./src/scripts/admin/filters/heading-enhanced.js":
/*!*******************************************************!*\
  !*** ./src/scripts/admin/filters/heading-enhanced.js ***!
  \*******************************************************/
/***/ (() => {

const {
  registerBlockStyle
} = wp.blocks;
const styles = [{
  name: 'default',
  label: 'Default',
  isDefault: true
}, {
  name: 'custom',
  label: 'Custom Sizes'
}];
styles.forEach(style => {
  registerBlockStyle('core/heading', style);
});

/***/ }),

/***/ "./src/scripts/admin/filters/image-enhanced.js":
/*!*****************************************************!*\
  !*** ./src/scripts/admin/filters/image-enhanced.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


const {
  registerBlockStyle
} = wp.blocks;
const {
  addFilter
} = wp.hooks;
const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  PanelRow,
  CheckboxControl,
  TextControl,
  RangeControl
} = wp.components;
const styles = [{
  name: 'dropshadow',
  label: 'Drop shadow'
}, {
  name: 'variable-ratio',
  label: 'Variable ratio',
  description: 'Image ratio changes between desktop/tablet and mobile. Image displays at 1:1 ratio on large screens and 2:1 ratio (wider than it is high) on mobile screens.'
}, {
  name: 'abs-img',
  label: 'Positioned',
  description: 'Sets the position of the image to absolute. Requires adding styles to position the image as needed.'
}];
styles.forEach(style => registerBlockStyle('core/image', style));

/**
 * Add Size attribute to Button block.
 *
 * @param  {Object} settings Original block settings
 * @param  {string} name     Block name
 *
 * @return {Object} Filtered block settings
 */
function addAttributes(settings, name) {
  if (name === 'core/image') {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.assign)({}, settings, {
      attributes: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)(settings.attributes, {
        title: {
          type: 'string',
          default: ''
        },
        printMode: {
          type: 'boolean',
          default: false
        },
        printWidth: {
          type: 'number',
          default: 25
        }
      })
    });
  }
  return settings;
}
addFilter('blocks.registerBlockType', 'bcgov-block-theme/image/add-attributes', addAttributes);

/**
 * Add Size and Icons control to Button block.
 */
const addInspectorControl = createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      title,
      printMode,
      printWidth
    } = props.attributes;
    const {
      setAttributes
    } = props;
    const {
      name
    } = props;
    if (name !== 'core/image') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Other Media Settings",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Title (hover details)",
      value: title,
      onChange: value => setAttributes({
        title: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Show image when printing",
      checked: printMode,
      onChange: newval => setAttributes({
        printMode: newval
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: "Max\xA0width\xA0on\xA0printed\xA0page\xA0(%)",
      value: printWidth,
      onChange: newval => setAttributes({
        printWidth: newval
      }),
      min: 10,
      max: 100,
      separatorType: "fullWidth"
    })))));
  };
}, 'withInspectorControl');
addFilter('editor.BlockEdit', 'bcgov-block-theme/image/add-inspector-controls', addInspectorControl);

/***/ }),

/***/ "./src/scripts/admin/filters/media-text-enhanced.js":
/*!**********************************************************!*\
  !*** ./src/scripts/admin/filters/media-text-enhanced.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


const {
  registerBlockStyle
} = wp.blocks;
const {
  addFilter
} = wp.hooks;
const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  PanelRow,
  CheckboxControl,
  TextControl,
  RangeControl
} = wp.components;
const styles = [{
  name: 'dropshadow',
  label: 'Drop shadow'
}, {
  name: 'square',
  label: 'Square'
}, {
  name: 'no-clip',
  label: 'Full Image'
}];
styles.forEach(style => {
  registerBlockStyle('core/media-text', style);
});

/**
 * Add Size attribute to Button block.
 *
 * @param  {Object} settings Original block settings
 * @param  {string} name     Block name
 *
 * @return {Object} Filtered block settings
 */
function addAttributes(settings, name) {
  if (name === 'core/media-text') {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.assign)({}, settings, {
      attributes: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)(settings.attributes, {
        title: {
          type: 'string',
          default: ''
        },
        printMode: {
          type: 'boolean',
          default: false
        },
        printWidth: {
          type: 'number',
          default: 25
        }
      })
    });
  }
  return settings;
}
addFilter('blocks.registerBlockType', 'bcgov-block-theme/media-text/add-attributes', addAttributes);

/**
 * Add Size and Icons control to Button block.
 */
const addInspectorControl = createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      title,
      printMode,
      printWidth
    } = props.attributes;
    const {
      setAttributes
    } = props;
    const {
      name
    } = props;
    if (name !== 'core/media-text') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Other Media Settings",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Title (hover details)",
      value: title,
      onChange: value => setAttributes({
        title: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Show image when printing",
      checked: printMode,
      onChange: newval => setAttributes({
        printMode: newval
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: "Max\xA0width\xA0on\xA0printed\xA0page\xA0(%)",
      value: printWidth,
      onChange: newval => setAttributes({
        printWidth: newval
      }),
      min: 10,
      max: 100,
      separatorType: "fullWidth"
    })))));
  };
}, 'withInspectorControl');
addFilter('editor.BlockEdit', 'bcgov-block-theme/media-text/add-inspector-controls', addInspectorControl);

/***/ }),

/***/ "./src/scripts/admin/filters/navigation-enhanced.js":
/*!**********************************************************!*\
  !*** ./src/scripts/admin/filters/navigation-enhanced.js ***!
  \**********************************************************/
/***/ (() => {

const {
  registerBlockStyle
} = wp.blocks;
const styles = [{
  name: 'default',
  label: 'Centre Overlay',
  description: 'This uses a Flex approach to layout and will use variable width and spacing across a maximum of three columns. Menu groups will wrap to the next row and display in a center aligned position.',
  isDefault: true
}, {
  name: 'grid',
  label: 'Justify Overlay',
  description: 'This uses a Grid approach to layout and will use consistant width and spacing across a maximum of three columns. Menu groups will wrap to the next row and position themselves under the first column.'
}];
styles.forEach(style => {
  registerBlockStyle('core/navigation', style);
});

/***/ }),

/***/ "./src/scripts/admin/filters/paragraph-enhanced.js":
/*!*********************************************************!*\
  !*** ./src/scripts/admin/filters/paragraph-enhanced.js ***!
  \*********************************************************/
/***/ (() => {

const {
  registerBlockStyle
} = wp.blocks;
const paragraphStyles = [{
  name: 'default',
  label: 'Default',
  isDefault: true
}, {
  name: 'custom',
  label: 'Custom Sizes'
}];
paragraphStyles.forEach(style => {
  registerBlockStyle('core/paragraph', style);
});
const listStyles = [{
  name: 'default',
  label: 'Default',
  isDefault: true
}, {
  name: 'custom',
  label: 'Custom Sizes'
}];
listStyles.forEach(style => {
  registerBlockStyle('core/list', style);
});

/***/ }),

/***/ "./src/scripts/admin/filters/query-loop-enhanced.js":
/*!**********************************************************!*\
  !*** ./src/scripts/admin/filters/query-loop-enhanced.js ***!
  \**********************************************************/
/***/ (() => {

const {
  registerBlockStyle
} = wp.blocks;
const styles = [{
  name: 'dropshadow',
  label: 'Drop shadow',
  isDefault: true
}, {
  name: 'default',
  label: 'No Shadow'
}];
styles.forEach(style => {
  registerBlockStyle('core/query', style);
});

/***/ }),

/***/ "./src/scripts/admin/filters/site-logo-enhanced.js":
/*!*********************************************************!*\
  !*** ./src/scripts/admin/filters/site-logo-enhanced.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


const {
  addFilter
} = wp.hooks;
const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  PanelRow,
  CheckboxControl
} = wp.components;

/**
 * Add print attribute to Site Logo block.
 *
 * @param  {Object} settings Original block settings
 * @param  {string} name     Block name
 *
 * @return {Object} Filtered block settings
 */
function addAttributes(settings, name) {
  if (name === 'core/site-logo') {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.assign)({}, settings, {
      attributes: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)(settings.attributes, {
        inverted: {
          type: 'boolean',
          default: false
        }
      })
    });
  }
  return settings;
}
addFilter('blocks.registerBlockType', 'bcgov-block-theme/site-logo/add-attributes', addAttributes);

/**
 * Add Size and Icons control to Button block.
 */
const addInspectorControl = createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      inverted
    } = props.attributes;
    const {
      setAttributes
    } = props;
    const {
      name
    } = props;
    if (name !== 'core/site-logo') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Other Media Settings",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Set dark background for print",
      checked: inverted,
      onChange: newval => setAttributes({
        inverted: newval
      })
    })))));
  };
}, 'withInspectorControl');
addFilter('editor.BlockEdit', 'bcgov-block-theme/site-logo/add-inspector-controls', addInspectorControl);

/***/ }),

/***/ "./src/scripts/admin/utils/button-icons.js":
/*!*************************************************!*\
  !*** ./src/scripts/admin/utils/button-icons.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  __
} = wp.i18n;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  label: __('None', 'bcgov-block-theme'),
  value: ''
}, {
  label: __('Default', 'bcgov-block-theme'),
  value: 'default'
}, {
  label: __('Home', 'bcgov-block-theme'),
  value: 'home'
}, {
  label: __('Auto', 'bcgov-block-theme'),
  value: 'auto'
}, {
  label: __('Book', 'bcgov-block-theme'),
  value: 'book'
}, {
  label: __('Calendar', 'bcgov-block-theme'),
  value: 'calendar'
}, {
  label: __('Case', 'bcgov-block-theme'),
  value: 'case'
}, {
  label: __('Changes', 'bcgov-block-theme'),
  value: 'changes'
}, {
  label: __('Federal', 'bcgov-block-theme'),
  value: 'federal'
}, {
  label: __('Gear', 'bcgov-block-theme'),
  value: 'gear'
}, {
  label: __('Group', 'bcgov-block-theme'),
  value: 'group'
}, {
  label: __('Leaf', 'bcgov-block-theme'),
  value: 'leaf'
}, {
  label: __('Map', 'bcgov-block-theme'),
  value: 'map'
}, {
  label: __('Tag', 'bcgov-block-theme'),
  value: 'tag'
}]);

/***/ }),

/***/ "./src/scripts/admin/utils/common.js":
/*!*******************************************!*\
  !*** ./src/scripts/admin/utils/common.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/scripts/admin/utils/filter.js":
/*!*******************************************!*\
  !*** ./src/scripts/admin/utils/filter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/utils */ "./src/scripts/public/utils/index.js");


/**
 * WordPress Admin DOM manipulation.
 */
const domReady = () => {
  /*
   * SafarIE bug requires 0ms timeout.
   */
  setTimeout(function () {
    const body = (0,_public_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('body');
    const wpCustomiser = body.classList.contains('wp-customizer');
    if (!wpCustomiser) return;
    const wpAdditionalCSSArea = (0,_public_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('#sub-accordion-section-custom_css');
    const wpAdditionalCSSHeadline = (0,_public_utils__WEBPACK_IMPORTED_MODULE_0__.qs)('h3 .customize-action', wpAdditionalCSSArea);
    if (null !== wpAdditionalCSSArea) {
      if (null !== wpAdditionalCSSHeadline && null !== window.site.customBodyClass && '' !== window.site.customBodyClass) {
        wpAdditionalCSSHeadline.innerHTML = `Custom class: <strong>body.custom-${window.site.customBodyClass}</strong>`;
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

"use strict";
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

/***/ "./src/scripts/public/sites/cleanbc/cleanbc-dom-loader.js":
/*!****************************************************************!*\
  !*** ./src/scripts/public/sites/cleanbc/cleanbc-dom-loader.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/scripts/public/utils/index.js":
/*!*******************************************!*\
  !*** ./src/scripts/public/utils/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/styles/admin/index.scss":
/*!*************************************!*\
  !*** ./src/styles/admin/index.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************!*\
  !*** ./src/scripts/admin/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_admin_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/admin/index.scss */ "./src/styles/admin/index.scss");
/* harmony import */ var _utils_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/filter */ "./src/scripts/admin/utils/filter.js");
/* harmony import */ var _public_dom_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/dom-loader */ "./src/scripts/public/dom-loader.js");
/* harmony import */ var _public_sites_cleanbc_cleanbc_dom_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/sites/cleanbc/cleanbc-dom-loader */ "./src/scripts/public/sites/cleanbc/cleanbc-dom-loader.js");
/* harmony import */ var _filters_button_enhanced__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filters/button-enhanced */ "./src/scripts/admin/filters/button-enhanced.js");
/* harmony import */ var _filters_columns_enhanced__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/columns-enhanced */ "./src/scripts/admin/filters/columns-enhanced.js");
/* harmony import */ var _filters_columns_enhanced__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_filters_columns_enhanced__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _filters_column_enhanced__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters/column-enhanced */ "./src/scripts/admin/filters/column-enhanced.js");
/* harmony import */ var _filters_column_enhanced__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_filters_column_enhanced__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _filters_heading_enhanced__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filters/heading-enhanced */ "./src/scripts/admin/filters/heading-enhanced.js");
/* harmony import */ var _filters_heading_enhanced__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_filters_heading_enhanced__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _filters_image_enhanced__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filters/image-enhanced */ "./src/scripts/admin/filters/image-enhanced.js");
/* harmony import */ var _filters_media_text_enhanced__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters/media-text-enhanced */ "./src/scripts/admin/filters/media-text-enhanced.js");
/* harmony import */ var _filters_navigation_enhanced__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filters/navigation-enhanced */ "./src/scripts/admin/filters/navigation-enhanced.js");
/* harmony import */ var _filters_navigation_enhanced__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_filters_navigation_enhanced__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _filters_paragraph_enhanced__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filters/paragraph-enhanced */ "./src/scripts/admin/filters/paragraph-enhanced.js");
/* harmony import */ var _filters_paragraph_enhanced__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_filters_paragraph_enhanced__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _filters_site_logo_enhanced__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filters/site-logo-enhanced */ "./src/scripts/admin/filters/site-logo-enhanced.js");
/* harmony import */ var _filters_query_loop_enhanced__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filters/query-loop-enhanced */ "./src/scripts/admin/filters/query-loop-enhanced.js");
/* harmony import */ var _filters_query_loop_enhanced__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_filters_query_loop_enhanced__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _blocks_card_container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/card/container */ "./src/scripts/admin/blocks/card/container/index.js");
/* harmony import */ var _blocks_card_item__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/card/item */ "./src/scripts/admin/blocks/card/item/index.js");
/* harmony import */ var _blocks_collapse_app__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/collapse/app */ "./src/scripts/admin/blocks/collapse/app.js");
/* harmony import */ var _blocks_collapse_container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blocks/collapse/container */ "./src/scripts/admin/blocks/collapse/container/index.js");
/* harmony import */ var _blocks_collapse_item__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blocks/collapse/item */ "./src/scripts/admin/blocks/collapse/item/index.js");


/**
 * Load the wp-admin filters.
 */


/**
 * Load the required site options.
 */



/**
 * Filters modify or enhance existing blocks using addFilter hooks.
 * PHP render functions are used and defined in inc/core/filters directory.
 */











/**
 * Custom Blocks.
 * PHP render functions are used and defined in inc/core/blocks directory.
 */
// import './blocks/accordion-item';






/**
 * Pattern scripts.
 */
})();

/******/ })()
;
//# sourceMappingURL=admin.js.map