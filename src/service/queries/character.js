import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
query {
  characters{
   info{
    pages
    next
    count
  }
    results{
      id
      image
      name
      species
      episode{
        id
        name
        air_date
      }
      
    }
  }
}`;