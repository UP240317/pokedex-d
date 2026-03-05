import React from 'react';
import { Image, Text, View } from 'react-native';

interface PokemonCardsProps {
    name: string;
    url: string;

}
export default function PokemonCard(props: PokemonCardsProps) {
    const id = props.url.split("/")[6];

    const pokemonImageURL =
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png';

    return (
        <View>
            <Image source={{ uri: pokemonImageURL }} style={{ width: 100, height: 100 }}></Image>
            <Text>{props.name}</Text>
            <Text>{props.url}</Text>
        </View>
    )
}