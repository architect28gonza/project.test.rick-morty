import { gql } from '@apollo/client';
import { client } from '../../ApolloClient';

export function useQueryGql() {

    const GET_CHARACTERS: any = gql`
        query GetCharacters($page: Int!) {
            characters(page: $page) {
                results {
                    id
                    name
                    image
                    status
                    species
                    gender
                    created
                }
            }
        }
    `;

    const GET_CHARACTERS_FILTER: any = gql`
        query GetCharacters($page: Int!, $nameFilter: String!) {
            characters(page: $page, filter: { name: $nameFilter }) {
                results {
                    id
                    name
                    image
                    status
                    species
                    gender
                    created
                }
            }
        }
    `;

    const GET_LOCATION: any = gql`
        query getLocation($id: ID!) {
            location(id: $id) {
                id
                name
                type
                dimension
                created
            }
        }
    `;

    const GET_EPISODIES: any = gql`
        query getEpisodies($page: Int!) {
            episodes(page: $page) {
                results {
                    id
                    name
                    air_date
                    episode
                    created
                }
            }
        }
    `;

    const dataListCharacters = async (page: number, isFilter: boolean, nameFilter: string): Promise<any> => {
        try {
            const { data } = await client.query({
                query: !isFilter ? GET_CHARACTERS : GET_CHARACTERS_FILTER,
                variables: !isFilter ? { page } : { page, nameFilter }
            });
            return {
                results: data.characters.results
            }
        } catch (error) {
            return [];
        }
    }

    const dataListTable = async (id: number, isLocation: boolean): Promise<any> => {
        try {
            const { data } = await client.query({
                query: isLocation ? GET_LOCATION : GET_EPISODIES,
                variables: isLocation ? { id } : { page: id }
            });
            return {
                results: isLocation
                    ? data.location
                    : data.episodes.results
            }
        } catch (error) {
            return [];
        }
    }

    return {
        dataListCharacters,
        dataListTable
    }
}
