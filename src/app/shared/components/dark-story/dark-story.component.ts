import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-dark-story",
  templateUrl: "./dark-story.component.html",
  styleUrls: ["./dark-story.component.scss"]
})
export class DarkStoryComponent implements OnInit {
  @Input() story: any;

  constructor() {}

  ngOnInit() {}
}
