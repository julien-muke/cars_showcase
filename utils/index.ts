export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': '3f51740716mshe88464ad4e2d9bbp1fd232jsn7cc7a69de1af',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }

        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}

    
