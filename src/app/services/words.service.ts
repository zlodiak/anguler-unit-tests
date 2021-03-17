import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  words: string[] = [
    'qqq',
    'www',
    'eee',
    'rrr',
    'ttt',
    'yyy',
  ];

  constructor() { }

}
