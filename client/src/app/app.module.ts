import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DetailComponent } from './components/post/detail/detail.component'
import { FeedComponent } from './components/post/feed/feed.component'
import { CategoryComponent} from './components/category/category.component'

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    FeedComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
