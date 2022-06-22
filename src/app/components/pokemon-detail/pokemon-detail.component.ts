import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonService } from './../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon;
  moves = [];
  abilities = [];

  constructor(public activeModal: NgbActiveModal, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.moves = JSON.parse(this.pokemon.moves);
    this.abilities = JSON.parse(this.pokemon.abilities);
  }

  deletePokemon(id) {
    this.pokemonService.deletePokemon(id).subscribe(
      res => {
        this.activeModal.close('Close click')
        alert('Pokemón eliminado con éxito');
        window.location.reload();
      }
    );
  }

  updatePokemon(id) {
    const pokemonToUpdate = {
      name: this.pokemon.name,
      height: this.pokemon.height,
      weight: this.pokemon.weight,
      location: this.pokemon.location,
      image: this.pokemon.image
    }
    
  }

}
