import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPokemon(id) {
    return this.http.get<any>(`${this.baseUrl}/api/api-pokemon/${id}`);
  }

  getAllPokemons() {
    return this.http.get<any>(`${this.baseUrl}/api/api-pokemon`);
  }

  deletePokemon(id) {
    return this.http.delete<any>(`${this.baseUrl}/api/api-pokemon/${id}`);
  }

  updatePokemon(id, pokemonToUpdate) {
    return this.http.put<any>(`${this.baseUrl}/api/api-pokemon/${id}`, pokemonToUpdate);
  }
}
