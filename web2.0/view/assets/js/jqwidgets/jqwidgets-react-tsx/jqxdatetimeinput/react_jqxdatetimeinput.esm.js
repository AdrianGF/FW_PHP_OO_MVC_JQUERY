import * as jqxcore from '../../jqwidgets/jqxcore';
import * as globalize from '../../jqwidgets/globalization/globalize';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxtooltip from '../../jqwidgets/jqxtooltip';
import * as jqxdatetimeinput from '../../jqwidgets/jqxdatetimeinput';
import * as jqxcalendar from '../../jqwidgets/jqxcalendar';
import { createElement, PureComponent } from 'react';

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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var JqxDateTimeInput = /** @class */ (function (_super) {
    __extends(JqxDateTimeInput, _super);
    function JqxDateTimeInput(props) {
        var _this = _super.call(this, props) || this;
        /* tslint:disable:variable-name */
        _this._jqx = JQXLite;
        _this._id = 'JqxDateTimeInput' + _this._jqx.generateID();
        _this._componentSelector = '#' + _this._id;
        _this.state = { lastProps: props };
        return _this;
    }
    JqxDateTimeInput.getDerivedStateFromProps = function (props, state) {
        var areEqual = Object.is(props, state.lastProps);
        if (!areEqual) {
            var newState = { lastProps: props };
            return newState;
        }
        return null;
    };
    JqxDateTimeInput.prototype.componentDidUpdate = function () {
        var widgetOptions = this._manageProps();
        this.setOptions(widgetOptions);
    };
    JqxDateTimeInput.prototype.componentDidMount = function () {
        if (this.props.autoCreate) {
            this._createComponent();
        }
    };
    JqxDateTimeInput.prototype.render = function () {
        return (createElement("div", { id: this._id, className: this.props.className, style: this.props.style }, this.props.children));
    };
    JqxDateTimeInput.prototype.createComponent = function (options) {
        if (!this.props.autoCreate) {
            this._createComponent(options);
        }
        else {
            /* tslint:disable:no-console */
            console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" prop to "false".');
        }
    };
    JqxDateTimeInput.prototype.setOptions = function (options) {
        this._jqx(this._componentSelector).jqxDateTimeInput(options);
    };
    JqxDateTimeInput.prototype.getOptions = function (option) {
        return this._jqx(this._componentSelector).jqxDateTimeInput(option);
    };
    JqxDateTimeInput.prototype.addEventListener = function (name, callbackFn) {
        this._jqx(this._componentSelector).on(name, callbackFn);
    };
    JqxDateTimeInput.prototype.removeEventListener = function (name) {
        this._jqx(this._componentSelector).off(name);
    };
    JqxDateTimeInput.prototype.close = function () {
        this._jqx(this._componentSelector).jqxDateTimeInput('close');
    };
    JqxDateTimeInput.prototype.destroy = function () {
        this._jqx(this._componentSelector).jqxDateTimeInput('destroy');
    };
    JqxDateTimeInput.prototype.focus = function () {
        this._jqx(this._componentSelector).jqxDateTimeInput('focus');
    };
    JqxDateTimeInput.prototype.getRange = function (date) {
        return this._jqx(this._componentSelector).jqxDateTimeInput('getRange', date);
    };
    JqxDateTimeInput.prototype.getText = function () {
        return this._jqx(this._componentSelector).jqxDateTimeInput('getText');
    };
    JqxDateTimeInput.prototype.getDate = function () {
        return this._jqx(this._componentSelector).jqxDateTimeInput('getDate');
    };
    JqxDateTimeInput.prototype.getMaxDate = function () {
        return this._jqx(this._componentSelector).jqxDateTimeInput('getMaxDate');
    };
    JqxDateTimeInput.prototype.getMinDate = function () {
        return this._jqx(this._componentSelector).jqxDateTimeInput('getMinDate');
    };
    JqxDateTimeInput.prototype.open = function () {
        this._jqx(this._componentSelector).jqxDateTimeInput('open');
    };
    JqxDateTimeInput.prototype.setRange = function (date, date2) {
        this._jqx(this._componentSelector).jqxDateTimeInput('setRange', date, date2);
    };
    JqxDateTimeInput.prototype.setMinDate = function (date) {
        this._jqx(this._componentSelector).jqxDateTimeInput('setMinDate', date);
    };
    JqxDateTimeInput.prototype.setMaxDate = function (date) {
        this._jqx(this._componentSelector).jqxDateTimeInput('setMaxDate', date);
    };
    JqxDateTimeInput.prototype.setDate = function (date) {
        this._jqx(this._componentSelector).jqxDateTimeInput('setDate', date);
    };
    JqxDateTimeInput.prototype.val = function (value, value2) {
        return this._jqx(this._componentSelector).jqxDateTimeInput('val', value, value2);
    };
    JqxDateTimeInput.prototype._createComponent = function (options) {
        var widgetOptions = options ? options : this._manageProps();
        this._jqx(this._componentSelector).jqxDateTimeInput(widgetOptions);
        this._wireEvents();
    };
    JqxDateTimeInput.prototype._manageProps = function () {
        var widgetProps = ['animationType', 'allowNullDate', 'allowKeyboardDelete', 'clearString', 'culture', 'closeDelay', 'closeCalendarAfterSelection', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'disabled', 'enableBrowserBoundsDetection', 'enableAbsoluteSelection', 'firstDayOfWeek', 'formatString', 'height', 'min', 'max', 'openDelay', 'placeHolder', 'popupZIndex', 'rtl', 'readonly', 'showFooter', 'selectionMode', 'showWeekNumbers', 'showTimeButton', 'showCalendarButton', 'theme', 'template', 'textAlign', 'todayString', 'value', 'width'];
        var options = {};
        for (var prop in this.props) {
            if (widgetProps.indexOf(prop) !== -1) {
                options[prop] = this.props[prop];
            }
        }
        return options;
    };
    JqxDateTimeInput.prototype._wireEvents = function () {
        for (var prop in this.props) {
            if (prop.indexOf('on') === 0) {
                var originalEventName = prop.slice(2);
                originalEventName = originalEventName.charAt(0).toLowerCase() + originalEventName.slice(1);
                this._jqx(this._componentSelector).on(originalEventName, this.props[prop]);
            }
        }
    };
    JqxDateTimeInput.defaultProps = {
        autoCreate: true
    };
    return JqxDateTimeInput;
}(PureComponent));
var jqx = window.jqx;
var JQXLite = window.JQXLite;
var jqwidgets = window.jqwidgets;

export default JqxDateTimeInput;
export { jqx, JQXLite, jqwidgets };
