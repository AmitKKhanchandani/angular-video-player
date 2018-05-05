System.register(['angular2/core', './config.service', './playlist.component', './video', './videoplayer.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_service_1, playlist_component_1, video_1, videoplayer_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            },
            function (playlist_component_1_1) {
                playlist_component_1 = playlist_component_1_1;
            },
            function (video_1_1) {
                video_1 = video_1_1;
            },
            function (videoplayer_component_1_1) {
                videoplayer_component_1 = videoplayer_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.mainHeading = config_service_1.Config.MAINHEADING;
                    this.videos = [
                        new video_1.Video(1, 'Angular - The Complete Guide', 'htPYk6QxacQ', 'Published on 3 Apr 2017'),
                        new video_1.Video(2, 'Angular 4 In 60 Minutes', 'KhzGSHNhnbI', 'Published on 7 Jul 2017'),
                        new video_1.Video(3, 'Great Progressive Web App Experiences with Angular (Google I/O)', 'C8KcW1Nj3Mw', 'Published on 18 May 2017'),
                        new video_1.Video(4, 'Angular 4 HTTP Get Example with Params', '76nZ9q_BUn8', 'Published on 15 May 2017')
                    ];
                    this.video = this.videos[0];
                }
                AppComponent.prototype.onVideoSelected = function (video) {
                    this.video = video;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/views/app.component.html',
                        styleUrls: ['app/styles/app.component.css'],
                        directives: [playlist_component_1.PlaylistComponent, videoplayer_component_1.VideoPlayerComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map