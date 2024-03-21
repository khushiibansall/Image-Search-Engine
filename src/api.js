import axios from 'axios';

const searchImages= async(term)=>{
    const response=await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID b6fqRp0fPbHyh7dFsb07ulRkOBReYXQxG1wLXD5XESc'
        },
        params:{
            query:term,
        },
    });
    
    return response.data.results;
};

export default searchImages;