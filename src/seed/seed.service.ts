import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios, { AxiosInstance } from 'axios';
import { PokeAPIResponse } from './interfaces/pokeapi-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    // Delete all data
    await this.pokemonModel.deleteMany({});

    // Get data from PokeAPI
    const data = await this.http.get<PokeAPIResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=649',
    );

    // Format data
    const pokemons = data.results.map(({ name, url }) => {
      const segments = url.split('/');
      const number = +segments[segments.length - 2];

      return { name, number };
    });

    // Save data to database
    await this.pokemonModel.insertMany(pokemons);

    return 'Data seeded successfully.';
  }
}
