import {Article} from "./article.model";
import {
  Component,
  OnInit ,
  HostBinding,
  Input
} from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article ;


  constructor() {
    this.article = {
      link: "", title: "", votes: 0, domain(): string {
        return "";
      }, voteDown(): void {
      }, voteUp(): void {
      }
    };
  }
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }


  ngOnInit() {
    }

}
