import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { StoryComponent } from './components/story/story.component';
import { DarkStoryComponent } from './components/dark-story/dark-story.component';
import { LightStoryComponent } from './components/light-story/light-story.component';
import { NewsComponent } from './components/news/news.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';

@NgModule({
  declarations: [HeroComponent, StoryComponent, DarkStoryComponent, LightStoryComponent, NewsComponent, NewsCardComponent, SignUpComponent, LearnMoreComponent],
  imports: [CommonModule],
  exports: [HeroComponent, StoryComponent, DarkStoryComponent, LightStoryComponent, NewsComponent, NewsCardComponent, SignUpComponent, LearnMoreComponent]
})
export class SharedModule { }
