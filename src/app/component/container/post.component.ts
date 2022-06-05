import { PostService } from './../../services/post.service';
import { TASKS } from './../../mosk-task';
import { Component, Output, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

	headerPost = 'Посты про JS'
	title = 'first-ang';
	tasks: Task[] = []
	toggle = false

	constructor(private postService: PostService) {

	}

	ngOnInit(): void {
		this.postService.getPosts().subscribe((tasks) => this.tasks = tasks)
	}
	deletePost(task: Task){
		this.postService.deletePost(task).subscribe(
			() => this.tasks = this.tasks.filter(t=>t.id! === task.id))
	}

	addPost(task: Task){
		this.postService.addPost(task).subscribe((tasks) => (this.tasks.push(task)))
	}
	toggleBtns(){
		this.toggle = !this.toggle
	}
}
