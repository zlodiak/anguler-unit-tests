import { Component, OnInit } from '@angular/core';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  serviceWords: string[] = [];
  componentWords: string[] = [];

  constructor(private wordsService: WordsService) { }

  ngOnInit(): void {
  }

  getWordsFromService() {
    this.serviceWords = this.wordsService.words;
  }

  getWordsFromComponets() {
    this.componentWords = [
      'zz',
      'xx',
      'cc',
    ];
  }

}
