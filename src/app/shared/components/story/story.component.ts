import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.scss"]
})
export class StoryComponent implements OnInit {
  stories = [
    {
      header: "Thriving in Tanzania",
      subText: "NEWS",
      content:
        "The latest from the Southern Highlands, where zebras were reintroduced last October. This is one of 22 individuals translocated to Kitulo National Park.",
      image: "url(../../../../assets/wildlife/tdzeblogowhite.jpg)",
      cta: "Read More"
    },
    {
      header: "Communities",
      subText: "OUR WORK",
      content:
        "We collaborate with Indigenous Peoples and local communities around the world to achieve a shared vision fora more secure and resilient future.",
      image: "../../../../assets/Julie_Larsen_Maher.jpg",
      cta: "Read More"
    },
    {
      header: "Run for the Wild",
      subText: "STAND FOR WILDLIFE",
      content:
        "Make tracks for giraffes at our annual 5K through the Bronx Zoo. Sign up today to run on Saturday, April 27.",
      image: "../../../../assets/wildlife/Rothschild_Giraffes_in_wild.jpg",
      cta: "Register"
    },
    {
      header: "Chimpanzees At Risk",
      subText: "NEWS",
      content:
        "WCS’s Dr. Emma Stokes: “We risk destroying these forests before even discovering what secrets they hold.” Check out a fascinating new ten-year study.",
      image: "url(../../../../assets/wildlife/Nobrega_Goualougo.jpg)",
      cta: "Read More"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
