"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by johannesC on 2016/06/24.
 */
var core_1 = require("@angular/core");
var ApplicationSettings = require("application-settings");
var page_1 = require("ui/page");
var WebformPage = (function () {
    function WebformPage(_page) {
        this._page = _page;
        this.formUrl = ApplicationSettings.getString("JewREll");
    }
    WebformPage.prototype.ngAfterViewInit = function () {
        this.webview = this._page.getViewById('web');
        // this.webview.on(WebView.loadFinishedEvent, function (args: WebView.loadFinishedEvent) {
        //
        //
        // });
        this.webview.on("loadFinished", function (changeArgs) {
            console.log("Load Finished");
            // Do something with the URL here.
            // E.g. extract the token and hide the WebView.
        });
        this.webview.url = this.formUrl;
    };
    WebformPage = __decorate([
        core_1.Component({
            selector: "webform",
            templateUrl: "pages/webform/webform.html",
            styleUrls: ["./pages/webform/webform-common.css", "./pages/webform/webform.css"],
        }), 
        __metadata('design:paramtypes', [page_1.Page])
    ], WebformPage);
    return WebformPage;
}());
exports.WebformPage = WebformPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJmb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQsSUFBWSxtQkFBbUIsV0FBTSxzQkFDckMsQ0FBQyxDQUQwRDtBQUUzRCxxQkFBbUIsU0FBUyxDQUFDLENBQUE7QUFTN0I7SUFLSSxxQkFBb0IsS0FBVTtRQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELHFDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLDBGQUEwRjtRQUMxRixFQUFFO1FBQ0YsRUFBRTtRQUNGLE1BQU07UUFFTixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxVQUFVO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0Isa0NBQWtDO1lBQ2xDLCtDQUErQztRQUNuRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDcEMsQ0FBQztJQTdCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLDZCQUE2QixDQUFDO1NBQ25GLENBQUM7O21CQUFBO0lBMEJGLGtCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxtQkFBVyxjQXdCdkIsQ0FBQSJ9