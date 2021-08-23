import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(termino: string) {
    console.log(termino)
    if (termino && termino.length > 1) {
      this.router.navigate(['/country-list',termino], {
        queryParams: { q: termino }
      })
    }else {
      this.router.navigate([''])
    }
  }

}
