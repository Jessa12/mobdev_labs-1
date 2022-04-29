import { FavouriteService } from './../../services/favourite.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
 
  film: any;
  isFavourite = false;
  filmId = null;
 
  constructor(private activatedRoute: ActivatedRoute, private favouriteService: FavouriteService) { }
 
  ngOnInit() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
    
 
    this.favouriteService.isFavourite(this.filmId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
 
  favouriteFilm() {
    this.favouriteService.favouriteFilm(this.filmId).then(() => {
      this.isFavourite = true;
    });
  }
 
  unfavouriteFilm() {
    this.favouriteService.unfavouriteFilm(this.filmId).then(() => {
      this.isFavourite = false;
    });
  }
 
}