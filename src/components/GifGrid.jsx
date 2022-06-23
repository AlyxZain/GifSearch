import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, del }) => {
  const { images, isLoading } = useFetchGifs(category);

  //borrar images

  return (
    <>
      <h3>{category}</h3>

      <div className='card-grid'>
        {images.map((images) => (
          <GifItem key={images.id} {...images} />
        ))}
      </div>
    </>
  );
};
