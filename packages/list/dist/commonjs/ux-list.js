"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var core_1 = require("@aurelia-ux/core");
var ux_list_theme_1 = require("./ux-list-theme");
var theme = new ux_list_theme_1.UxListTheme();
var UxList = /** @class */ (function () {
    function UxList(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        styleEngine.ensureDefaultTheme(theme);
    }
    UxList.prototype.bind = function () {
        if (this.theme != null) {
            this.themeChanged(this.theme);
        }
    };
    UxList.prototype.themeChanged = function (newTheme) {
        this.styleEngine.applyTheme(newTheme, this.element);
    };
    __decorate([
        aurelia_templating_1.bindable
    ], UxList.prototype, "theme", void 0);
    UxList = __decorate([
        aurelia_dependency_injection_1.inject(Element, core_1.StyleEngine),
        aurelia_templating_1.customElement('ux-list')
    ], UxList);
    return UxList;
}());
exports.UxList = UxList;
