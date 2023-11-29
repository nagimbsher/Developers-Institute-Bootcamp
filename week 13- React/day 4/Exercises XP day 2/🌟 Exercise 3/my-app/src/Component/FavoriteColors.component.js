export function UserFavoriteColors(props) {
    const favorites = props.favorites;
    console.log("favorites:", favorites);
  return favorites.map((favorite,i) =><li key= {i}>{favorite}</li>);
}