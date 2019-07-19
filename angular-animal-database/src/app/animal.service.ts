import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'  
})

export class AnimalService {

  private animalUrl = 'http://localhost:3000/animals';

  constructor(
    private http : HttpClient,
    private messageService : MessageService ) { }

  private log(message: string) {
    this.messageService.add( `AnimalService: ${message}` );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return ( error : any ) : Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error( error ); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log( `${operation} failed: ${error.message}` );
   
      // Let the app keep running by returning an empty result.
      return of( result as T );
    };
  }
  
  //getting json data of all animals from the server using get
  getAnimals() {
    this.log( `calling getAnimals.` );
    return this.http.get<Animal[]>(this.animalUrl)
      .pipe(
        tap(_ => this.log( 'fetched animals' ) ),
        catchError( this.handleError<Animal[]>( 'getAnimals', [] ) )
    );
  }

  //getting json data of specific animal by id from the server using get
  getAnimal( id : string ) : Observable<Animal> {
    const url = `${this.animalUrl}/${id}`;
    return this.http.get<Animal>(url).pipe(
      tap(_ => this.log( `fetched animal id=${id}` )),
      catchError( this.handleError<Animal>( `getAnimal id=${id}` ) )
    );
  }

  //add animal to the server using post
  addAnimal ( animal : Animal ) : Observable<Animal> {
    return this.http.post<Animal>( this.animalUrl, animal, httpOptions )
      .pipe(
        tap(( newAnimal : Animal ) => this.log(`added animal w/ name=${ newAnimal.name }`)),
        catchError(this.handleError<Animal>( 'addAnimal' ) )
      );
  }

  //delete the animal from the server using delete
  deleteAnimal ( id : string ) : Observable<{}> {
    const url = `${this.animalUrl}/${id}`;
    return this.http.delete( url, httpOptions )
      .pipe(
        catchError( this.handleError( 'deleteAnimal' ) )
    );
  }

  //update the animal on the server, returns the updated animal upon success
  updateAnimal ( animal : Animal, id : string ) : Observable<Animal> {
    const url = `${this.animalUrl}/${id}`;
    return this.http.put<Animal>( url, animal, httpOptions )
      .pipe(
        catchError( this.handleError( 'updateAnimal', animal ) )
    );
}
}