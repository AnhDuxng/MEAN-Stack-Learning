import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  theatreMovies : any;
  popularMovies: any;

  isMobile: boolean = false;

  constructor(private http: HttpClient, private router: Router, private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  
    this.getTrendingMovies(); 
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) =>{
      this.trendingMovies = movies;
      console.log(this.trendingMovies);
    });
  }

  getTheatreMovies() {
    this.http
      .get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe((movies) => {
        this.theatreMovies = movies;
      });
  }

  getPopularMovies() {
    this.http
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
      });
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }
}
