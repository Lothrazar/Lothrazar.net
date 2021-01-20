(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+qsO":
    /*!*********************************************************************!*\
      !*** ./src/app/components/widget-github/widget-github.component.ts ***!
      \*********************************************************************/

    /*! exports provided: WidgetGithubComponent */

    /***/
    function qsO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WidgetGithubComponent", function () {
        return WidgetGithubComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_github_github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/github/github.service */
      "xMRl");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function WidgetGithubComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r0.issues.length, " total]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r0.assigned, " assigned]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r0.unlabelled, " no label]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r0.uncommented, " no comments]");
        }
      }

      function WidgetGithubComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetGithubComponent_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.getIssues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " github api\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var WidgetGithubComponent = /*#__PURE__*/function () {
        function WidgetGithubComponent(githubService) {
          _classCallCheck(this, WidgetGithubComponent);

          this.githubService = githubService;
          this.issues = null;
        }

        _createClass(WidgetGithubComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getIssues",
          value: function getIssues() {
            var _this = this;

            //MAKE INTERFACE for response
            // SERVICE. and toggle between mock mode responses and non
            // COUNT HOW MANY HAVE NO LABELS at all . and count total
            // COUNT how many have "assignees" > 0
            if (!this.issues) {
              console.info('Accessing github API...');
              this.githubService.getIssues(this.mod.githubId).subscribe(function (data) {
                return _this.onLoadIssues(data);
              }, function (error) {
                return _this.onFailIssues(error);
              });
            } else {
              console.info('Issues cached');
              this.parseIssues();
            }
          }
        }, {
          key: "onFailIssues",
          value: function onFailIssues(data) {
            console.error('rate limited', data);
          }
        }, {
          key: "onLoadIssues",
          value: function onLoadIssues(data) {
            console.log(data);

            if (data) {
              this.issues = data;
              this.parseIssues();
            }
          }
        }, {
          key: "parseIssues",
          value: function parseIssues() {
            this.assigned = 0;
            this.unlabelled = 0;
            this.uncommented = 0;

            var _iterator = _createForOfIteratorHelper(this.issues),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var issue = _step.value;

                if (issue.labels.length == 0) {
                  this.unlabelled++;
                }

                if (issue.assignees.length > 0) {
                  this.assigned++;
                }

                if (issue.comments == 0) {
                  this.uncommented++;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }]);

        return WidgetGithubComponent;
      }();

      WidgetGithubComponent.ɵfac = function WidgetGithubComponent_Factory(t) {
        return new (t || WidgetGithubComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_github_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"]));
      };

      WidgetGithubComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WidgetGithubComponent,
        selectors: [["app-widget-github"]],
        inputs: {
          mod: "mod"
        },
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"]],
        template: function WidgetGithubComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WidgetGithubComponent_ng_container_0_Template, 9, 4, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WidgetGithubComponent_button_1_Template, 2, 0, "button", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.issues);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.issues);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtZ2l0aHViLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetGithubComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-widget-github',
            templateUrl: './widget-github.component.html',
            styleUrls: ['./widget-github.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_github_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"]
          }];
        }, {
          mod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\code\web\Lothrazar.github.io\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2MiI":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);

          this.title = 'lothrazar.net';
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getWindow",
          value: function getWindow() {
            return window;
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 14,
        vars: 0,
        consts: [["color", "primary", 1, "header-toolbar"], ["href", "/", 1, "header-banner"], ["src", "assets/namebanner.png"], [1, "example-fill-remaining-space"], ["mat-icon-button", "", "href", "https://twitter.com/intent/tweet?screen_name=Lothrazar&ref_src=twsrc%5Etfw", "title", "Follow me on twitter", "target", "twitter", 1, "header-mention-button"], ["src", "assets/twitter.png"], ["mat-icon-button", "", "href", "https://patreon.com/lothrazar", "target", "pt", 1, "header-mention-button"], ["src", "assets/patreon.jpg", 1, "header-patreon"], ["mat-icon-button", "", "href", "https://github.com/Lothrazar/lothrazar.net", "title", "View page source", "target", "pt", 1, "header-mention-button"], ["src", "assets/github.png", 1, "header-patreon"], ["mat-icon-button", "", "href", "https://allmylinks.com/lothrazar", "target", "links"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "language");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        styles: [".example-fill-remaining-space[_ngcontent-%COMP%] {\r\n  \r\n  flex: 1 1 auto;\r\n}\r\n\r\n.header-toolbar[_ngcontent-%COMP%] {\r\n  padding-bottom: 9px;\r\n}\r\n\r\n.header-banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  padding-top: 14px;\r\n  height: 50px;\r\n}\r\n\r\n.header-mention-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 20px;\r\n}\r\n\r\n.header-patreon[_ngcontent-%COMP%] {\r\n  border-radius: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cclxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGVyLXRvb2xiYXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItYmFubmVyIGltZyB7XHJcbiAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5oZWFkZXItbWVudGlvbi1idXR0b24gaW1nIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuLmhlYWRlci1wYXRyZW9uIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "3IZd":
    /*!*****************************************************************!*\
      !*** ./src/app/components/tile-minecraftmod/mcmod.component.ts ***!
      \*****************************************************************/

    /*! exports provided: McmodComponent */

    /***/
    function IZd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McmodComponent", function () {
        return McmodComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function McmodComponent_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.mod.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.mod.curseId);
        }
      }

      function McmodComponent_mat_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function McmodComponent_a_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "get_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.curseforge.com/minecraft/mc-mods/", ctx_r2.mod.curseSlug, "/files/all?filter-status=1&filter-game-version=2020709689%3A4449", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function McmodComponent_a_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "get_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.curseforge.com/minecraft/mc-mods/", ctx_r3.mod.curseSlug, "/files/all?filter-status=1&filter-game-version=2020709689%3A6170", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function McmodComponent_a_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "get_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.curseforge.com/minecraft/mc-mods/", ctx_r4.mod.curseSlug, "/files/all?filter-status=1&filter-game-version=2020709689%3A6756", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function McmodComponent_a_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "get_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.curseforge.com/minecraft/mc-mods/", ctx_r5.mod.curseSlug, "/files/all?filter-status=1&filter-game-version=1738749986%3A70886", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var McmodComponent = /*#__PURE__*/function () {
        function McmodComponent() {
          _classCallCheck(this, McmodComponent);
        }

        _createClass(McmodComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return McmodComponent;
      }();

      McmodComponent.ɵfac = function McmodComponent_Factory(t) {
        return new (t || McmodComponent)();
      };

      McmodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: McmodComponent,
        selectors: [["app-mcmod"]],
        inputs: {
          mod: "mod"
        },
        decls: 14,
        vars: 10,
        consts: [[1, "mod-container"], ["mat-button", "", "target", "curse", 3, "href"], ["class", "mod-logo", 3, "src", "title", 4, "ngIf"], [4, "ngIf"], ["mat-button", "", "target", "github", 3, "href"], ["src", "/assets/github.png"], [1, "mod-title"], ["target", "curse", 3, "href"], [1, "mod-versions"], ["mat-icon-button", "", "class", "version-17", "target", "curse", 3, "href", 4, "ngIf"], ["mat-icon-button", "", "class", "version-110", "target", "curse", 3, "href", 4, "ngIf"], ["mat-icon-button", "", "class", "version-112", "target", "curse", 3, "href", 4, "ngIf"], ["mat-icon-button", "", "class", "version-116", "target", "curse", 3, "href", 4, "ngIf"], [1, "mod-logo", 3, "src", "title"], ["mat-icon-button", "", "target", "curse", 1, "version-17", 3, "href"], ["mat-icon-button", "", "target", "curse", 1, "version-110", 3, "href"], ["mat-icon-button", "", "target", "curse", 1, "version-112", 3, "href"], ["mat-icon-button", "", "target", "curse", 1, "version-116", 3, "href"]],
        template: function McmodComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McmodComponent_img_2_Template, 1, 2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, McmodComponent_mat_icon_3_Template, 2, 0, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, McmodComponent_a_10_Template, 3, 1, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, McmodComponent_a_11_Template, 3, 1, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, McmodComponent_a_12_Template, 3, 1, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, McmodComponent_a_13_Template, 3, 1, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.curseforge.com/minecraft/mc-mods/", ctx.mod.curseSlug, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mod.logo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mod.logo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://github.com/Lothrazar/", ctx.mod.githubId, "/issues", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.curseforge.com/minecraft/mc-mods/", ctx.mod.curseSlug, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mod.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mod.versions.includes("1.7.10"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mod.versions.includes("1.10"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mod.versions.includes("1.12"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mod.versions.includes("1.16"));
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
        styles: [".mod-container[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  padding: 6px;\r\n}\r\n\r\n.mod-title[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 24pt;\r\n}\r\n\r\n.mod-versions[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n.mod-versions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { \r\n  \r\n}\r\n\r\n.mod-logo[_ngcontent-%COMP%] {\r\n  border: 1px solid black;\r\n  width: 29px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1jbW9kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7aUJBQ2U7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztBQUNiIiwiZmlsZSI6Im1jbW9kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1vZC1jb250YWluZXIge1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbi5tb2QtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDI0cHQ7XHJcbn1cclxuXHJcbi5tb2QtdmVyc2lvbnMge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm1vZC12ZXJzaW9ucyBhIHsgXHJcbiAgLyogd2lkdGg6IDI0cHg7IFxyXG4gIHdpZHRoOiAyNHB4OyAgKi9cclxufVxyXG5cclxuLm1vZC1sb2dvIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB3aWR0aDogMjlweDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McmodComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mcmod',
            templateUrl: './mcmod.component.html',
            styleUrls: ['./mcmod.component.css']
          }]
        }], function () {
          return [];
        }, {
          mod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "6TYg":
    /*!*******************************************************************!*\
      !*** ./src/app/components/widget-curse/widget-curse.component.ts ***!
      \*******************************************************************/

    /*! exports provided: WidgetCurseComponent */

    /***/
    function TYg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WidgetCurseComponent", function () {
        return WidgetCurseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WidgetCurseComponent = /*#__PURE__*/function () {
        function WidgetCurseComponent() {
          _classCallCheck(this, WidgetCurseComponent);
        }

        _createClass(WidgetCurseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WidgetCurseComponent;
      }();

      WidgetCurseComponent.ɵfac = function WidgetCurseComponent_Factory(t) {
        return new (t || WidgetCurseComponent)();
      };

      WidgetCurseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WidgetCurseComponent,
        selectors: [["app-widget-curse"]],
        inputs: {
          mod: "mod"
        },
        decls: 3,
        vars: 2,
        consts: [[3, "src"]],
        template: function WidgetCurseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\xA0\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://cf.way2muchnoise.eu/", ctx.mod.curseId, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://cf.way2muchnoise.eu/versions/", ctx.mod.curseId, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtY3Vyc2UuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetCurseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-widget-curse',
            templateUrl: './widget-curse.component.html',
            styleUrls: ['./widget-curse.component.css']
          }]
        }], function () {
          return [];
        }, {
          mod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "AUqs":
    /*!************************************************************!*\
      !*** ./src/app/components/page-home/homepage.component.ts ***!
      \************************************************************/

    /*! exports provided: HomepageComponent */

    /***/
    function AUqs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
        return HomepageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "2MiI");

      var HomepageComponent = /*#__PURE__*/function () {
        function HomepageComponent() {
          _classCallCheck(this, HomepageComponent);
        }

        _createClass(HomepageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomepageComponent;
      }();

      HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
        return new (t || HomepageComponent)();
      };

      HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomepageComponent,
        selectors: [["app-homepage"]],
        decls: 2,
        vars: 0,
        template: function HomepageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " homepage ");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-homepage',
            templateUrl: './homepage.component.html',
            styleUrls: ['./homepage.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "E0Oq":
    /*!***************************************************!*\
      !*** ./src/app/services/mcmods/mcmods.service.ts ***!
      \***************************************************/

    /*! exports provided: McmodsService */

    /***/
    function E0Oq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McmodsService", function () {
        return McmodsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_assets_mods_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/assets/mods.json */
      "LODw");

      var src_assets_mods_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/assets/mods.json */
      "LODw", 1);

      var McmodsService = /*#__PURE__*/function () {
        function McmodsService() {
          _classCallCheck(this, McmodsService);

          this.modVersionMap = {};
          this.modMap = {};
          this.selected = {
            '1.7.10': false,
            '1.12': false,
            '1.16': false
          };

          for (var i in src_assets_mods_json__WEBPACK_IMPORTED_MODULE_1__) {
            var m = src_assets_mods_json__WEBPACK_IMPORTED_MODULE_1__[i];
            this.modMap[m.curseSlug] = m;

            for (var j in m.versions) {
              var vers = m.versions[j];

              if (!this.modVersionMap[vers]) {
                this.modVersionMap[vers] = [];
              }

              this.modVersionMap[vers].push(m);
            }
          }

          this.modList = src_assets_mods_json__WEBPACK_IMPORTED_MODULE_1__;
          console.log(this.modMap);
        }

        _createClass(McmodsService, [{
          key: "getMod",
          value: function getMod(slug) {
            return this.modMap[slug];
          }
        }, {
          key: "getMods",
          value: function getMods() {
            return this.modList;
          }
        }, {
          key: "getVersionMods",
          value: function getVersionMods(vers) {
            return this.modVersionMap[vers];
          }
        }]);

        return McmodsService;
      }();

      McmodsService.ɵfac = function McmodsService_Factory(t) {
        return new (t || McmodsService)();
      };

      McmodsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: McmodsService,
        factory: McmodsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McmodsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "JzmT":
    /*!***********************************************************************!*\
      !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
      \***********************************************************************/

    /*! exports provided: PageNotFoundComponent */

    /***/
    function JzmT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
        return PageNotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "2MiI");

      var PageNotFoundComponent = /*#__PURE__*/function () {
        function PageNotFoundComponent() {
          _classCallCheck(this, PageNotFoundComponent);
        }

        _createClass(PageNotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageNotFoundComponent;
      }();

      PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
        return new (t || PageNotFoundComponent)();
      };

      PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageNotFoundComponent,
        selectors: [["app-page-not-found"]],
        decls: 3,
        vars: 0,
        template: function PageNotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Page not found\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
        styles: ["p[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoicGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page-not-found',
            templateUrl: './page-not-found.component.html',
            styleUrls: ['./page-not-found.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "LODw":
    /*!******************************!*\
      !*** ./src/assets/mods.json ***!
      \******************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, default */

    /***/
    function LODw(module) {
      module.exports = JSON.parse("[{\"curseId\":305840,\"name\":\"Absent by Design\",\"curseSlug\":\"absent-by-design\",\"githubId\":\"AbsentByDesign\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/275/694/64/64/637263088543870771.png\",\"versions\":[\"1.12\",\"1.14\",\"1.15\",\"1.16\"]},{\"curseId\":320757,\"name\":\"Anti Bonemeal\",\"curseSlug\":\"anti-bonemeal\",\"githubId\":\"AntiBonemeal\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/202/144/64/64/636924514898907681.png\",\"versions\":[\"1.12\",\"1.14\",\"1.15\",\"1.16\"]},{\"curseId\":348584,\"name\":\"Auto Sprint\",\"curseSlug\":\"auto-sprint\",\"githubId\":\"AutoRun\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/275/671/64/64/637263031852493162.png\",\"versions\":[\"1.14\",\"1.15\",\"1.16\"]},{\"curseId\":305211,\"name\":\"Anger Management\",\"curseSlug\":\"anger-management\",\"githubId\":\"AngerManagement\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/175/285/64/64/636756682197041940.png\",\"versions\":[\"1.12\",\"1.14\",\"1.15\"]},{\"curseId\":232166,\"name\":\"Biome Growth Control\",\"curseSlug\":\"restricted-saplings\",\"githubId\":\"SaplingGrowthControl\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/275/680/64/64/637263045356275636.png\",\"versions\":[\"1.12\",\"1.14\",\"1.15\",\"1.16\"]},{\"curseId\":305561,\"name\":\"Block Layers\",\"curseSlug\":\"block-layers\",\"githubId\":\"DecoLayers\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/275/676/64/64/637263042379613423.png\",\"versions\":[\"1.12\",\"1.14\",\"1.15\",\"1.16\"]},{\"curseId\":333828,\"name\":\"Cannot build over lava source blocks\",\"curseSlug\":\"cannot-build-over-lava-source-blocks\",\"githubId\":\"NoLavaBuild\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/217/140/64/64/637005603619861416.png\",\"versions\":[\"1.12\",\"1.14\",\"1.15\",\"1.16\"]},{\"curseId\":239286,\"name\":\"Cyclic\",\"curseSlug\":\"cyclic\",\"githubId\":\"Cyclic\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/91/91/64/64/636244465665632371.png\",\"versions\":[\"1.12\",\"1.15\",\"1.16\"]},{\"curseId\":246973,\"name\":\"Creeper Heal\",\"curseSlug\":\"forge-creeper-heal-unofficial\",\"githubId\":\"ForgeCreeperHeal\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/44/324/64/64/636030538249856506.jpeg\",\"versions\":[\"1.10\",\"1.12\"]},{\"curseId\":332609,\"name\":\"Elementary ores\",\"curseSlug\":\"elementary-ores\",\"githubId\":\"elementary-ores\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/215/965/64/64/637000092602098965.png\",\"versions\":[\"1.14\",\"1.15\"]},{\"curseId\":231800,\"name\":\"Fragile Torches\",\"curseSlug\":\"fragile-torches\",\"githubId\":\"FragileTorches\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/19/907/64/64/635703545652356785.png\",\"versions\":[\"1.7.10\",\"1.10\",\"1.12\",\"1.14\",\"1.15\",\"1.16\"]},{\"curseId\":351990,\"name\":\"Gardening Tools\",\"curseSlug\":\"gardening-tools\",\"githubId\":\"GardenTools\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/275/679/64/64/637263044524248183.png\",\"versions\":[\"1.14\",\"1.15\",\"1.16\"]},{\"curseId\":368921,\"name\":\"Glass Cutters\",\"curseSlug\":\"glass-cutter\",\"githubId\":\"GlassCutter\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/275/697/64/64/637263096369154289.png\",\"versions\":[\"1.14\",\"1.15\",\"1.16\"]},{\"curseId\":307605,\"name\":\"Giant Player Boss\",\"curseSlug\":\"giant-player-boss\",\"githubId\":\"PlayerBosses\",\"versions\":[\"1.12\"]},{\"curseId\":273711,\"name\":\"EmberRoot Zoo\",\"curseSlug\":\"emberroot-zoo\",\"githubId\":\"ERZ\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/108/641/64/64/636373962527245927.png\",\"versions\":[\"1.12\"]},{\"curseId\":369028,\"name\":\"More Powerful Game Rules\",\"curseSlug\":\"custom-game-rules\",\"githubId\":\"CustomGameRules\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/275/700/64/64/637263098984560016.png\",\"versions\":[\"1.16\"]},{\"curseId\":232597,\"name\":\"Inventory Crafting Grid\",\"curseSlug\":\"inventory-crafting-grid\",\"githubId\":\"InventoryCrafting\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/21/61/64/64/635721731012418510.png\",\"versions\":[\"1.7.10\",\"1.10\",\"1.12\",\"1.15\",\"1.16\"]},{\"curseId\":370541,\"name\":\"Lattice Grid Nether Portals\",\"curseSlug\":\"nether-portal-grid\",\"githubId\":\"WorldPortals\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/275/702/64/64/637263106171402660.png\",\"versions\":[\"1.15\",\"1.16\"]},{\"curseId\":368534,\"name\":\"Let them grow\",\"curseSlug\":\"let-them-grow\",\"githubId\":\"LetThemGrow\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/275/672/64/64/637263032167360885.png\",\"versions\":[\"1.15\",\"1.16\"]},{\"curseId\":232795,\"name\":\"Mounted ender pearl\",\"curseSlug\":\"mounted-pearl-bring-your-mount-along-when-you\",\"githubId\":\"MountedPearl\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/21/361/64/64/635726408317262610.png\",\"versions\":[\"1.7.10\",\"1.10\",\"1.12\",\"1.14\",\"1.15\",\"1.16\"]},{\"curseId\":231837,\"name\":\"Ocean Floor Control\",\"curseSlug\":\"ocean-floor-clay-sand-and-dirt\",\"githubId\":\"OceanFloorControl\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/19/963/64/64/635704371131281346.png\",\"versions\":[\"1.7.10\",\"1.10\",\"1.12\"]},{\"curseId\":275086,\"name\":\"Ore Prospectors\",\"curseSlug\":\"ore-prospectors\",\"githubId\":\"Prospectors\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/275/714/64/64/637263137247836519.png\",\"versions\":[\"1.12\"]},{\"curseId\":233168,\"name\":\"Overpowered Inventory\",\"curseSlug\":\"overpowered-inventory\",\"githubId\":\"OverpoweredInventory\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/91/91/64/64/636244465665632371.png\",\"versions\":[\"1.10\",\"1.12\"]},{\"curseId\":234867,\"name\":\"Mimic prismarine\",\"curseSlug\":\"mimic-1-8-prismarine-red-sandstone-granite\",\"githubId\":\"MimicMinecraft18\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/23/881/64/64/635749238120153286.png\",\"versions\":[\"1.7.10\"]},{\"curseId\":231943,\"name\":\"Inventory control keys\",\"curseSlug\":\"inventory-control-keys\",\"githubId\":\"InventoryControlKeys\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/23/881/64/64/635749238120153286.png\",\"versions\":[\"1.7.10\"]},{\"curseId\":399669,\"name\":\"Simple Tomb\",\"curseSlug\":\"simple-tomb\",\"githubId\":\"Tombstone-Fork\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/290/719/64/64/637319811016837559.png\",\"versions\":[\"1.12\",\"1.15\",\"1.16\"]},{\"curseId\":295780,\"name\":\"Roots Classic\",\"curseSlug\":\"roots-classic\",\"githubId\":\"RootsClassic\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/157/93/64/64/636643301624754170.png\",\"versions\":[\"1.12\"]},{\"curseId\":232093,\"name\":\"Power Apples\",\"curseSlug\":\"power-apples\",\"githubId\":\"PowerApples\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/235/639/64/64/637086950760974790.png\",\"versions\":[\"1.10\"]},{\"curseId\":333875,\"name\":\"Stronger Farmland\",\"curseSlug\":\"stronger-farmland\",\"githubId\":\"StrongerFarmland\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/275/693/64/64/637263087098134908.png\",\"versions\":[\"1.12\",\"1.14\",\"1.15\",\"1.16\"]},{\"curseId\":370777,\"name\":\"Scaffolding behavior\",\"curseSlug\":\"scaffolding-behavior\",\"githubId\":\"ScaffoldingBehavior\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/275/675/64/64/637263035858335469.png\",\"versions\":[\"1.14\",\"1.15\",\"1.16\"]},{\"curseId\":358241,\"name\":\"Stupid horse stand still\",\"curseSlug\":\"stupid-horse-stand-still\",\"githubId\":\"stupidHorseStandStill\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/275/632/64/64/637262902934662148.png\",\"versions\":[\"1.12\",\"1.14\",\"1.15\",\"1.16\"]},{\"curseId\":268495,\"name\":\"Simple Storage Network\",\"curseSlug\":\"simple-storage-network\",\"githubId\":\"Storage-Network\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/100/305/64/64/636314361904813513.png\",\"versions\":[\"1.12\",\"1.14\",\"1.15\",\"1.16\"]},{\"curseId\":233659,\"name\":\"Similsax Transtructors\",\"curseSlug\":\"similsax-transtructors\",\"githubId\":\"Similsax-Transtructors\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/24/33/64/64/635751631245606212.png\",\"versions\":[\"1.7.10\",\"1.10\",\"1.12\",\"1.14\"]},{\"curseId\":350696,\"name\":\"Stacking Dimensional Rifts\",\"curseSlug\":\"dimension-stacking-rifts\",\"githubId\":\"DimStacker\",\"logo\":\"https://media.forgecdn.net/avatars/thumbnails/235/639/64/64/637086950760974790.png\",\"versions\":[\"1.12\"]},{\"curseId\":324307,\"name\":\"Tamed Respawn\",\"curseSlug\":\"tamedrespawn\",\"githubId\":\"TamedRespawn\",\"versions\":[\"1.12\"]},{\"curseId\":368728,\"name\":\"Unbreakable Spawner\",\"curseSlug\":\"unbreakable-spawner\",\"githubId\":\"UnbreakableSpawner\",\"versions\":[\"1.12\",\"1.14\",\"1.15\",\"1.16\"]},{\"curseId\":412686,\"name\":\"Peaceful Heights\",\"curseSlug\":\"peaceful-heights\",\"githubId\":\"PeacefulHeights\",\"versions\":[\"1.16\"]},{\"curseId\":425651,\"name\":\"Loot Rebalance\",\"curseSlug\":\"loot-rebalance\",\"githubId\":\"LootRebalance\",\"versions\":[\"1.16\"]}]");
      /***/
    },

    /***/
    "LmEr":
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function LmEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 2,
        vars: 0,
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " footer works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    padding-bottom: 16px;\r\n    font-size: 32px; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDsgXHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "W1tW":
    /*!*********************************************************************!*\
      !*** ./src/app/components/page-minecraftmod/mcmodpage.component.ts ***!
      \*********************************************************************/

    /*! exports provided: McmodpageComponent */

    /***/
    function W1tW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McmodpageComponent", function () {
        return McmodpageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_mcmods_mcmods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/mcmods/mcmods.service */
      "E0Oq");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../header/header.component */
      "2MiI");
      /* harmony import */


      var _widget_curse_widget_curse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../widget-curse/widget-curse.component */
      "6TYg");

      var McmodpageComponent = /*#__PURE__*/function () {
        function McmodpageComponent(route, modService) {
          var _this2 = this;

          _classCallCheck(this, McmodpageComponent);

          this.route = route;
          this.modService = modService;
          route.params.subscribe(function (params) {
            console.log(params);
            _this2.mod = _this2.modService.getMod(params.slug);
            console.log(_this2.mod);
          });
        }

        _createClass(McmodpageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return McmodpageComponent;
      }();

      McmodpageComponent.ɵfac = function McmodpageComponent_Factory(t) {
        return new (t || McmodpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mcmods_mcmods_service__WEBPACK_IMPORTED_MODULE_2__["McmodsService"]));
      };

      McmodpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: McmodpageComponent,
        selectors: [["app-mcmodpage"]],
        decls: 2,
        vars: 1,
        consts: [[3, "mod"]],
        template: function McmodpageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-widget-curse", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mod", ctx.mod);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _widget_curse_widget_curse_component__WEBPACK_IMPORTED_MODULE_4__["WidgetCurseComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtY21vZHBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McmodpageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mcmodpage',
            templateUrl: './mcmodpage.component.html',
            styleUrls: ['./mcmodpage.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: src_app_services_mcmods_mcmods_service__WEBPACK_IMPORTED_MODULE_2__["McmodsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./material/material.module */
      "hctd");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_tile_minecraftmod_mcmod_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/tile-minecraftmod/mcmod.component */
      "3IZd");
      /* harmony import */


      var _services_mcmods_mcmods_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/mcmods/mcmods.service */
      "E0Oq");
      /* harmony import */


      var _components_widget_curse_widget_curse_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/widget-curse/widget-curse.component */
      "6TYg");
      /* harmony import */


      var _components_widget_github_widget_github_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/widget-github/widget-github.component */
      "+qsO");
      /* harmony import */


      var _services_github_github_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/github/github.service */
      "xMRl");
      /* harmony import */


      var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/page-not-found/page-not-found.component */
      "JzmT");
      /* harmony import */


      var _components_page_home_homepage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/page-home/homepage.component */
      "AUqs");
      /* harmony import */


      var _components_page_minecraft_minecraft_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/page-minecraft/minecraft.component */
      "p5Ce");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");
      /* harmony import */


      var _components_page_minecraftmod_mcmodpage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/page-minecraftmod/mcmodpage.component */
      "W1tW");

      var appRoutes = [{
        path: '',
        redirectTo: '/minecraft?version=1.16',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: _components_page_home_homepage_component__WEBPACK_IMPORTED_MODULE_14__["HomepageComponent"]
      }, {
        path: 'minecraft',
        component: _components_page_minecraft_minecraft_component__WEBPACK_IMPORTED_MODULE_15__["MinecraftPageComponent"]
      }, // { path: 'minecraft/mod/:slug', component: McmodpageComponent },
      {
        path: '**',
        component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"]
      }];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_mcmods_mcmods_service__WEBPACK_IMPORTED_MODULE_9__["McmodsService"], _services_github_github_service__WEBPACK_IMPORTED_MODULE_12__["GithubService"]],
        imports: [[_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes //, { enableTracing: true } // <-- debugging purposes only
        , {
          relativeLinkResolution: 'legacy'
        }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_tile_minecraftmod_mcmod_component__WEBPACK_IMPORTED_MODULE_8__["McmodComponent"], _components_widget_curse_widget_curse_component__WEBPACK_IMPORTED_MODULE_10__["WidgetCurseComponent"], _components_widget_github_widget_github_component__WEBPACK_IMPORTED_MODULE_11__["WidgetGithubComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"], _components_page_home_homepage_component__WEBPACK_IMPORTED_MODULE_14__["HomepageComponent"], _components_page_minecraft_minecraft_component__WEBPACK_IMPORTED_MODULE_15__["MinecraftPageComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"], _components_page_minecraftmod_mcmodpage_component__WEBPACK_IMPORTED_MODULE_18__["McmodpageComponent"]],
          imports: [_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_tile_minecraftmod_mcmod_component__WEBPACK_IMPORTED_MODULE_8__["McmodComponent"], _components_widget_curse_widget_curse_component__WEBPACK_IMPORTED_MODULE_10__["WidgetCurseComponent"], _components_widget_github_widget_github_component__WEBPACK_IMPORTED_MODULE_11__["WidgetGithubComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"], _components_page_home_homepage_component__WEBPACK_IMPORTED_MODULE_14__["HomepageComponent"], _components_page_minecraft_minecraft_component__WEBPACK_IMPORTED_MODULE_15__["MinecraftPageComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"], _components_page_minecraftmod_mcmodpage_component__WEBPACK_IMPORTED_MODULE_18__["McmodpageComponent"]],
            imports: [_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes //, { enableTracing: true } // <-- debugging purposes only
            , {
              relativeLinkResolution: 'legacy'
            }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]],
            providers: [_services_mcmods_mcmods_service__WEBPACK_IMPORTED_MODULE_9__["McmodsService"], _services_github_github_service__WEBPACK_IMPORTED_MODULE_12__["GithubService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "hctd":
    /*!*********************************************!*\
      !*** ./src/app/material/material.module.ts ***!
      \*********************************************/

    /*! exports provided: MaterialModule */

    /***/
    function hctd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+"); // auto format in IDEA is broken now


      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        imports: [[_angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"]], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
          imports: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"]],
          exports: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"]],
            exports: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "p5Ce":
    /*!******************************************************************!*\
      !*** ./src/app/components/page-minecraft/minecraft.component.ts ***!
      \******************************************************************/

    /*! exports provided: MinecraftPageComponent */

    /***/
    function p5Ce(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MinecraftPageComponent", function () {
        return MinecraftPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_mcmods_mcmods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/mcmods/mcmods.service */
      "E0Oq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../header/header.component */
      "2MiI");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _tile_minecraftmod_mcmod_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../tile-minecraftmod/mcmod.component */
      "3IZd");

      function MinecraftPageComponent_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mcmod", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var mod_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mod", mod_r1);
        }
      }

      var MinecraftPageComponent = /*#__PURE__*/function () {
        function MinecraftPageComponent(modService, router, route) {
          var _this3 = this;

          _classCallCheck(this, MinecraftPageComponent);

          this.modService = modService;
          this.router = router;
          this.route = route;
          this.group = null;
          this.mods = [];
          this.mods = modService.getMods();
          this.route.queryParams.subscribe(function (params) {
            _this3.group = params.version;

            _this3.sortByName();
          });
        }

        _createClass(MinecraftPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "sortByName",
          value: function sortByName() {
            if (this.group) {
              this.mods = this.modService.getVersionMods(this.group);
            } else {
              this.mods = this.modService.getMods();
            }

            this.mods.sort(function (a, b) {
              return a.name.localeCompare(b.name);
            });
          }
        }, {
          key: "onChange",
          value: function onChange($event) {
            if ($event.value) {
              this.router.navigate(['/minecraft'], {
                queryParams: {
                  version: $event.value
                }
              });
            } else {
              this.router.navigate(['/minecraft']);
            }
          }
        }]);

        return MinecraftPageComponent;
      }();

      MinecraftPageComponent.ɵfac = function MinecraftPageComponent_Factory(t) {
        return new (t || MinecraftPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mcmods_mcmods_service__WEBPACK_IMPORTED_MODULE_1__["McmodsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      MinecraftPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MinecraftPageComponent,
        selectors: [["app-minecraft"]],
        decls: 15,
        vars: 2,
        consts: [[1, "minecraft-page"], ["aria-label", "Version Filter", 3, "value", "change"], ["value", "1.7.10", 1, "version-17"], ["value", "1.10", 1, "version-110"], ["value", "1.12", 1, "version-112"], ["value", "1.16", 1, "version-116"], ["value", "", 1, "version-other"], [1, "minecraft-container"], [4, "ngFor", "ngForOf"], [1, "minecraft-item", 3, "mod"]],
        template: function MinecraftPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-button-toggle-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MinecraftPageComponent_Template_mat_button_toggle_group_change_2_listener($event) {
              return ctx.onChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-button-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1.7.10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-button-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1.10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1.12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-button-toggle", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "1.16");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-button-toggle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xA0\xA0\xA0All\xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MinecraftPageComponent_ng_container_14_Template, 2, 1, "ng-container", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.group);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mods);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _tile_minecraftmod_mcmod_component__WEBPACK_IMPORTED_MODULE_6__["McmodComponent"]],
        styles: [".minecraft-page[_ngcontent-%COMP%] {\r\n  width:900px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.minecraft-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n}\r\n\r\n.minecraft-item[_ngcontent-%COMP%] {\r\n  padding: 4px;\r\n  width: 100%;\r\n}\r\n\r\n.version[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  border: 2px solid black;\r\n  border-radius: 12px;\r\n  height: 40px;\r\n  width: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmVjcmFmdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0FBQ2IiLCJmaWxlIjoibWluZWNyYWZ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWluZWNyYWZ0LXBhZ2Uge1xyXG4gIHdpZHRoOjkwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubWluZWNyYWZ0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG59XHJcblxyXG4ubWluZWNyYWZ0LWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnZlcnNpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNzBweDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinecraftPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-minecraft',
            templateUrl: './minecraft.component.html',
            styleUrls: ['./minecraft.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_mcmods_mcmods_service__WEBPACK_IMPORTED_MODULE_1__["McmodsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "xMRl":
    /*!***************************************************!*\
      !*** ./src/app/services/github/github.service.ts ***!
      \***************************************************/

    /*! exports provided: GithubService */

    /***/
    function xMRl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GithubService", function () {
        return GithubService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var GithubService = /*#__PURE__*/function () {
        function GithubService(http) {
          _classCallCheck(this, GithubService);

          this.http = http;
        }
        /**
         * @return observable of GithubIssue[]
         * @param githubId
         */


        _createClass(GithubService, [{
          key: "getIssues",
          value: function getIssues(githubId) {
            return this.http.get('https://api.github.com/repos/lothrazar/' + githubId + '/issues?page=0&per_page=100');
          }
        }]);

        return GithubService;
      }();

      GithubService.ɵfac = function GithubService_Factory(t) {
        return new (t || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      GithubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GithubService,
        factory: GithubService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map