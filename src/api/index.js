import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';




export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-key': 'c6f5967fd2msh3ff16a0d784c8ecp152ec2jsne520d946c82a',
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            }
          });

        return data;
    } catch (error) {
        console.log(error)
    }
}