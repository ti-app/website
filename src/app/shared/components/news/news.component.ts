import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  news = [
    {
      headline: "Willing Coalition",
      subText: "Scientific American",
      content:
        "The secret sauce of environmental problem solving is voluntary collaboration, writes WCSs David Wilkie.",
      date: "April 8, 2019 ",
      image: "../../../../assets/Merry_and_Jake_eel_mop_Keith_Ellenbogen.jpg"
    },
    {
      headline: "Fishery on the Brink",
      subText: "Mongabay",
      content:
        "The fight to save the Nassau grouper. By one estimate, its population has dropped 60% since 1980.",
      date: "March 28, 2019 ",
      image: "../../../../assets/79obpqb2hi_1_Nassau_Grouper_ATewfik_.jpg"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
