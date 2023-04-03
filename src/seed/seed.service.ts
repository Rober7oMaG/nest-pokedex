import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeAPIResponse } from './interfaces/pokeapi-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeAPIResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=649',
    );

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const number = +segments[segments.length - 2];

      console.log({ name, number });
    });

    return data;
  }
}
