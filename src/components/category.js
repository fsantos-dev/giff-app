import { GifItem } from "./gifItem"
import { UseGetGif } from '../hooks/useGetGif'
export const Category = ({ category }) => {

    let { data: imagenes } = UseGetGif(category);

    console.log('imagenes: ', imagenes);


    return (
        <>
            <label className="titulo-categoria">--{category}--</label>
            <div className="row">
                {
                    imagenes.map((item, i) =>
                        <GifItem key={item.id} url={item.url} title={item.title} category={category}></GifItem>
                    )
                }
            </div>
        </>

    )
}