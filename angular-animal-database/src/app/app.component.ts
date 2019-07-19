import {
  Component,
  OnInit
} from '@angular/core';
import { Animal } from './animal.model';
import { AnimalService } from './animal.service';
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {
  title = 'Animal Database';
  animalDescription = 'Select an animal to see its description.';
  //all color options for select dropdown
  colorOptions = [ 'Black', 'Blue', 'Brown', 'Gray', 'Green', 'Orange', 'Pink', 'Red', 'Violet', 'White', 'Yellow' ];
  //all size options for select dropdown
  sizeOptions = [ 'Tiny', 'Small', 'Medium', 'Large', 'Huge' ];
  rowExpanded : Boolean[];
  animal : Animal;
  animals : Animal[];

  
  constructor( private animalService : AnimalService ) {
  }
  
  ngOnInit() {
    //calls the server on init of website
    this.showAnimals();
  }

  //gets the animals from the server
  showAnimals() {
    this.animalService.getAnimals()
      .subscribe(( data : Animal[] ) => {
        this.animals = data;
      });
    
  }

  //formats date into a readable format and converts to a string
  dateFormatter( dob : Date ) : String {
    const format = 'MM/dd/yyyy';
    const locale = 'en-US';
    if ( dob ) {
      return formatDate( dob, format, locale );
    } else {
      return 'undefined';
    }
  }

  //shows description of animal selected by index
  animalSelected( index : number ) : void {
    //check if all fields are defined
    if (!this.animals[ index ].name ||
      !this.animals[ index ].color ||
      !this.animals[ index ].size ||
      !this.animals[ index ].dob) {
        this.animalDescription = 'One or more of the criteria is undefined.'
    } else {
      //setting up the date format for date of birth to be displayed
      let formattedDate = this.dateFormatter( this.animals[ index ].dob );
      //writing out the description for the animal that is at index
      this.animalDescription = `The ${ this.animals[ index ].name.toLocaleLowerCase() }
        is a ${ this.animals[ index ].color.toLocaleLowerCase() } colored,
        ${ this.animals[ index ].size.toLocaleLowerCase() } sized animal
        and was born on ${ formattedDate }.`;
    }
  }

  //calls add from service and subscribes
  add( name : string, color : string, size : string, dob : Date ) : void {
    //check if all fields are filled out
    if ( !name || !color || !size || !dob ) {
        alert( 'All fields are required. Please finish filling out the form.' );
    } else {
      //add animal to server7
      this.animalService
        .addAnimal( { name, color, size, dob } as Animal )
        .subscribe( animal => {
          this.animals.push( animal );
      });
    }
  }

  //calls delete from service and subscribes
  delete( animal : Animal ) {
    this.animalService
      .deleteAnimal( animal._id )
      .subscribe();
    this.animals.splice( this.animals.indexOf( animal ), 1 );
  }

  expandCompareRow(fields) {
    fields.expanded = ! fields.expanded;
  }

  //calls update from service and subscribes
  update( name : string, color : string, size : string, dob : Date, animal : Animal ) {
    //check if all fields are filled out
    if ( !name || !color || !size || !dob ) {
      alert( 'All fields are required. Please finish filling out the form or hit cancel.' );
    } else {
      this.expandCompareRow( animal );
      this.animalService
        .updateAnimal( { name, color, size, dob } as Animal, animal._id )
        .subscribe();
      this.animals.splice( this.animals.indexOf( animal ), 1, { name, color, size, dob } as Animal );
    }
  }
}

export interface Animal {
  animalUrl : string;
}