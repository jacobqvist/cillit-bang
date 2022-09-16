import { Component } from '@angular/core';
import { DirtService } from 'src/services/dirt.service';

@Component({
  selector: 'app-dirt',
  templateUrl: './dirt.component.html',
  styleUrls: ['./dirt.component.scss']
})
export class DirtComponent {
	constructor(private dirtService: DirtService){
	}
	public dirt$ = this.dirtService.dirt$;

	public sendDirt(){
		this.dirtService.updateDirt({form: "Slimy", color: "brown"});
	}

	// public sendDirt(){
	// 	this.dirtService.updateDirt({} as Dirt);
	// }

}
