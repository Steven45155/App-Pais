import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string>=new Subject<string>()

  debouncerSuscription?:Subscription;

  @Input()
  public placeholder=''

  @Input()
  public initialValue: string='';

  @Output()
  Emitir: EventEmitter <string> = new EventEmitter();

  @Output()
  onDebounce: EventEmitter <string> = new EventEmitter();

  Enviar( value:string ){
    this.Emitir.emit( value )
  }


  onKeyPress( searchTerm:string ){
    this.debouncer.next( searchTerm )
  }

  ngOnInit(): void {
   this.debouncerSuscription=this.debouncer
  .pipe(debounceTime(500))
  .subscribe(value=>{
    this.onDebounce.emit( value )
})
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }


}
