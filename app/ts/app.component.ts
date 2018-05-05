import {Component} from 'angular2/core';
import {Config} from './config.service';
import {PlaylistComponent} from './playlist.component';
import {Video} from './video';
import { VideoPlayerComponent } from './videoplayer.component';

@Component({
    selector: 'my-app',
    templateUrl:'app/views/app.component.html',
    styleUrls:['app/styles/app.component.css'],
    directives:[PlaylistComponent, VideoPlayerComponent]
})


export class AppComponent {
    mainHeading=Config.MAINHEADING;
    videos:Array<Video>;
    video: Video;
    constructor(){
        this.videos=[
            new Video(1,'Angular - The Complete Guide','htPYk6QxacQ','Published on 3 Apr 2017'),
            new Video(2,'Angular 4 In 60 Minutes','KhzGSHNhnbI','Published on 7 Jul 2017'),
            new Video(3,'Great Progressive Web App Experiences with Angular (Google I/O)','C8KcW1Nj3Mw','Published on 18 May 2017'),
            new Video(4,'Angular 4 HTTP Get Example with Params','76nZ9q_BUn8','Published on 15 May 2017')
        ]
        this.video = this.videos[0];
    }
    onVideoSelected(video: Video) {
        this.video = video;
    }
}
