import { Text } from 'react-native';
const array = [
    {name: "p1", age: 1}, 
    {name: "p2", age: 2}, 
    {name: "p3", age: 3},
];

const newArray = array.map((item) => {
    return <Text key = {item.name}>{item.name}</Text>;
});     

console.log(newArray);