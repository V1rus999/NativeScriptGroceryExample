/**
 * Created by johannesC on 2016/06/24.
 */
import {Component, AfterViewInit} from "@angular/core";
import * as ApplicationSettings from "application-settings"
import {WebView} from "ui/web-view";
import {Page} from "ui/page";
import {android} from "application";

@Component({
    selector: "webform",
    templateUrl: "pages/webform/webform.html",
    styleUrls: ["./pages/webform/webform-common.css", "./pages/webform/webform.css"],
})

export class WebformPage implements AfterViewInit {

    formUrl:string;
    webview:any;

    constructor(private _page:Page) {
        this.formUrl = ApplicationSettings.getString("JewREll");
    }

    ngAfterViewInit():any {
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
    }
}

