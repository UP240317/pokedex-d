import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from "react-native";
import PokemonCard from "../components/PokemonCard";

export default function Index() {

  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {

    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);

    setResults(data.results);
  };

  return (
    <ScrollView>
      <Text>{results[250]?.name}</Text>
      {
        results.map((item) => {
          return <PokemonCard
            key={item.name}
            name={item.name}
            url={item.url} />
        })}
    </ScrollView>
  );
}