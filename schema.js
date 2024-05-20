export const typeDefs = `#graphql
type Game {
    id:ID!,
    title:string!,
    platform: [String!]!
}

type Review {
    id:ID!,
    rating:int!
    content:String!
}

type Author {
    id:ID!,
    name:String!
    verified:Boolean!
}

type Query{
    Reviews: [Review]
    Games: [Game]
    Author: [Author]
}

`