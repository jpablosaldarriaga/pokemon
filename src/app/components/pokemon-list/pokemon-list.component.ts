import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons = [];
  pokemonFound;
  selectedPokemon;
  
  constructor(private pokemonService: PokemonService, private modalService: NgbModal) { 
  }

  ngOnInit(): void {
    this.getAllPokemons();
    // console.log(this.pokemons);
  }

  getAllPokemons() {
    this.pokemonService.getAllPokemons().subscribe(
      res => {
        this.pokemons = res.data;
    });
    // console.log(this.pokemons);
  }
  
  getPokemonById(id) {
    console.log(id);
    this.pokemonService.getPokemon(id).subscribe(
      res => {
        alert('Pokemón encontrado');
        this.getAllPokemons();
      }
    );
    // console.log(this.pokemonFound);
  }

  openDetails(pokemon) {
    console.log(pokemon);
    const modalRef = this.modalService.open(PokemonDetailComponent);
    modalRef.componentInstance.pokemon = pokemon;
    // this.selectedPokemon = pokemon;
  }
}
