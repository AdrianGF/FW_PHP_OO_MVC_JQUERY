require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxswitchbutton');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxswitchbutton', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxswitchbutton = {}),global.ng.core,global.ng.forms));
}(this, (function (exports,core,forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var noop = function () { };
    /** @type {?} */
    var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return jqxSwitchButtonComponent; }),
        multi: true
    };
    var jqxSwitchButtonComponent = /** @class */ (function () {
        function jqxSwitchButtonComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['checked', 'disabled', 'height', 'orientation', 'onLabel', 'offLabel', 'thumbSize', 'rtl', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxSwitchButtonComponent events
            this.onChecked = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onUnchecked = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate) {
                    this.createComponent();
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.host) {
                    for (var i = 0; i < this.properties.length; i++) {
                        /** @type {?} */
                        var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                        /** @type {?} */
                        var areEqual = false;
                        if (this[attrName] !== undefined) {
                            if (typeof this[attrName] === 'object') {
                                if (this[attrName] instanceof Array) {
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxSwitchButton(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxSwitchButton(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxSwitchButton(this.properties[i])) {
                                this.host.jqxSwitchButton(this.properties[i], this[attrName]);
                            }
                        }
                    }
                }
            };
        /**
         * @param {?} attrValue
         * @param {?} hostValue
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.arraysEqual = /**
         * @param {?} attrValue
         * @param {?} hostValue
         * @return {?}
         */
            function (attrValue, hostValue) {
                if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
                    return false;
                }
                if (attrValue.length != hostValue.length) {
                    return false;
                }
                for (var i = 0; i < attrValue.length; i++) {
                    if (attrValue[i] !== hostValue[i]) {
                        return false;
                    }
                }
                return true;
            };
        /**
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.manageAttributes = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var options = {};
                for (var i = 0; i < this.properties.length; i++) {
                    /** @type {?} */
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    if (this[attrName] !== undefined) {
                        options[this.properties[i]] = this[attrName];
                    }
                }
                return options;
            };
        /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.moveClasses = /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
            function (parentEl, childEl) {
                var _a;
                /** @type {?} */
                var classes = parentEl.classList;
                if (classes.length > 0) {
                    (_a = childEl.classList).add.apply(_a, __spread(classes));
                }
                parentEl.className = '';
            };
        /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.moveStyles = /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
            function (parentEl, childEl) {
                /** @type {?} */
                var style = parentEl.style.cssText;
                childEl.style.cssText = style;
                parentEl.style.cssText = '';
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.createComponent = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                if (this.host) {
                    return;
                }
                if (options) {
                    JQXLite.extend(options, this.manageAttributes());
                }
                else {
                    options = this.manageAttributes();
                }
                this.host = JQXLite(this.elementRef.nativeElement.firstChild);
                this.moveClasses(this.elementRef.nativeElement, this.host[0]);
                this.moveStyles(this.elementRef.nativeElement, this.host[0]);
                this.__wireEvents__();
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSwitchButton', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.__updateRect__ = /**
         * @return {?}
         */
            function () {
                if (this.host)
                    this.host.css({ width: this.attrWidth, height: this.attrHeight });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.widgetObject) {
                    this.onChangeCallback(this.host.val());
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChangeCallback = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouchedCallback = fn;
            };
        /**
         * @param {?} options
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxSwitchButton('setOptions', options);
            };
        // jqxSwitchButtonComponent properties
        // jqxSwitchButtonComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.checked =
            // jqxSwitchButtonComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSwitchButton('checked', arg);
                }
                else {
                    return this.host.jqxSwitchButton('checked');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSwitchButton('disabled', arg);
                }
                else {
                    return this.host.jqxSwitchButton('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSwitchButton('height', arg);
                }
                else {
                    return this.host.jqxSwitchButton('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.orientation = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSwitchButton('orientation', arg);
                }
                else {
                    return this.host.jqxSwitchButton('orientation');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.onLabel = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSwitchButton('onLabel', arg);
                }
                else {
                    return this.host.jqxSwitchButton('onLabel');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.offLabel = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSwitchButton('offLabel', arg);
                }
                else {
                    return this.host.jqxSwitchButton('offLabel');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.thumbSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSwitchButton('thumbSize', arg);
                }
                else {
                    return this.host.jqxSwitchButton('thumbSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSwitchButton('rtl', arg);
                }
                else {
                    return this.host.jqxSwitchButton('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSwitchButton('width', arg);
                }
                else {
                    return this.host.jqxSwitchButton('width');
                }
            };
        // jqxSwitchButtonComponent functions
        // jqxSwitchButtonComponent functions
        /**
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.check =
            // jqxSwitchButtonComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxSwitchButton('check');
            };
        /**
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.disable = /**
         * @return {?}
         */
            function () {
                this.host.jqxSwitchButton('disable');
            };
        /**
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.enable = /**
         * @return {?}
         */
            function () {
                this.host.jqxSwitchButton('enable');
            };
        /**
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.toggle = /**
         * @return {?}
         */
            function () {
                this.host.jqxSwitchButton('toggle');
            };
        /**
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.uncheck = /**
         * @return {?}
         */
            function () {
                this.host.jqxSwitchButton('uncheck');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxSwitchButton('val', value);
                }
                else {
                    return this.host.jqxSwitchButton('val');
                }
            };
        /**
         * @return {?}
         */
        jqxSwitchButtonComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('checked', function (eventData) { _this.onChecked.emit(eventData); });
                this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
                this.host.on('unchecked', function (eventData) { _this.onUnchecked.emit(eventData); });
            };
        jqxSwitchButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxSwitchButton',
                        template: '<div><ng-content></ng-content></div>',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxSwitchButtonComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxSwitchButtonComponent.propDecorators = {
            attrChecked: [{ type: core.Input, args: ['checked',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrOrientation: [{ type: core.Input, args: ['orientation',] }],
            attrOnLabel: [{ type: core.Input, args: ['onLabel',] }],
            attrOffLabel: [{ type: core.Input, args: ['offLabel',] }],
            attrThumbSize: [{ type: core.Input, args: ['thumbSize',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChecked: [{ type: core.Output }],
            onChange: [{ type: core.Output }],
            onUnchecked: [{ type: core.Output }]
        };
        return jqxSwitchButtonComponent;
    }()); //jqxSwitchButtonComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxSwitchButtonModule = /** @class */ (function () {
        function jqxSwitchButtonModule() {
        }
        jqxSwitchButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxSwitchButtonComponent],
                        exports: [jqxSwitchButtonComponent]
                    },] }
        ];
        return jqxSwitchButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxSwitchButtonComponent = jqxSwitchButtonComponent;
    exports.jqxSwitchButtonModule = jqxSwitchButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

