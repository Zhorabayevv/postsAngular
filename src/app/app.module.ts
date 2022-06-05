import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContainerComponent } from './component/posts/container.component';
import { MyButtonComponent } from './component/my-button/my-button.component';
import { AddPostComponent } from './component/add-post/add-post.component';
import { AboutPostComponent } from './component/about-post/about-post.component';
import { PostComponent } from './component/container/post.component';


const appRoutes: Routes =[
	{path: '', component: PostComponent},
	{path: 'about/:id', component: AboutPostComponent}
]
@NgModule({
	declarations: [
		AppComponent,
		ContainerComponent,
		MyButtonComponent,
		AddPostComponent,
  AboutPostComponent,
  PostComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes, {enableTracing: true})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
