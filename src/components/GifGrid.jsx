import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

//  https://developers.giphy.com/dashboard?
  return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && (<h2> Cargando... </h2>)
        }
        
        <div className="card-grid">
        {
            images.map( ( images ) => (
                <GifItem 
                    key={ images.id } 
                    { ...images } 
                />
            ))  
        }
        </div>
    </>
  )
}
