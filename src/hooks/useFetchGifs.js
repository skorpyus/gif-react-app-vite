import {useEffect,useState} from 'react'
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category) => {
    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    const getImages = async() => {
      const listaImagenes = await getGifs( category );
      setImagenes(listaImagenes);
      setisLoading(false);
    }

    useEffect(() => {
        getImages();    
    }, []);

    return {
        imagenes,
        isLoading
    };


}

export default useFetchGifs