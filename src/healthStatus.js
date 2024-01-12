export default function healthStatus(character) {
    if (character.health > 50) {
        return 'healthy'; 
    } else if (character.health >= 15 && character.health <= 50) {
        return 'wounded'; 
    } else {
        return 'critical'; 
    }
}

const character = { name: 'Маг', health: 90 };
console.log(healthStatus(character))