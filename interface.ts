import houses from '/houses';

interface House {
    name: string,
    planets: string | string[]
}
    
interface HouseWithID {
    id: number,
    name: string,
    planets: string | string[]
}

function addHouseId(houses)
    
    function findHouses(house: string): HouseWithID[];
    function findHouses(
      houses: string,
      filter: (house: House) => boolean
    ): HouseWithID[];
    function findHouses(houses: House[]): HouseWithID[];
    function findHouses(
      houses: House[],
      filter: (house: House) => boolean
    ): HouseWithID[];
    
    console.log(
      findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
    );
    
    console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));