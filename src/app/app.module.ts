import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { GameAreaComponent } from './game-area/game-area.component';
import { TitleComponent } from './title/title.component';
import { ConsoleComponent } from './console/console.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    GameAreaComponent,
    TitleComponent,
    ConsoleComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
