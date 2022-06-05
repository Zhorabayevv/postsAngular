import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { ActivatedRoute } from '@angular/router';
import { TASKS } from 'src/app/mosk-task';


@Component({
  selector: 'app-about-post',
  templateUrl: './about-post.component.html',
  styleUrls: ['./about-post.component.css']
})
export class AboutPostComponent implements OnInit {
	//@Input() task!: Task
  
	
	task: any | undefined;
	
	constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
	const routeParams = this.route.snapshot.paramMap;
	const productIdFromRoute = Number(routeParams.get('id'));
 



	// Find the product that correspond with the id provided in route.
	this.task = TASKS.find(task => task.id === productIdFromRoute);
  }

}
