import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-light-story",
  templateUrl: "./light-story.component.html",
  styleUrls: ["./light-story.component.scss"]
})
export class LightStoryComponent implements OnInit {
  @Input() story: any;

  constructor() {}

  ngOnInit() {}
}
