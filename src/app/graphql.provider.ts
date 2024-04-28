import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { PersonInPort } from './domain/ports/in/PersonInPort';
import { PersonInAdapter } from './application/usesCases/PersonInAdapter';
import { PersonOutPort } from './domain/ports/out/personOutPort';
import { PersonOutAdapter } from './infrastructure/adapters/out/restApi/controllers/PersonOutAdapter';

const uri = 'localhost:8090'; // <-- add the URL of the GraphQL server here
export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },{provide:PersonInPort, useClass:PersonInAdapter},{provide:PersonOutPort, useClass:PersonOutAdapter}
];
