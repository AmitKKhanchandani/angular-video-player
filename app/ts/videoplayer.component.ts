import { Video } from './video';

import {Component, Input} from 'angular2/core';


@Component({
    selector: "videoplayer",
    templateUrl: "app/views/videoplayer.component.html"
})

export class VideoPlayerComponent {
    @Input() video: Video;
}