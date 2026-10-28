import { useParams } from "react-router-dom";
import { dishes } from "../../data/dishes";

export function Dish() {
  const { id } = useParams();
  const dish = dishes.find((item) => item.id === Number(id));

  if (!dish) {
    return <h1>Prato não encontrado</h1>;
  }

  return <h1>{dish.title}</h1>;
}