const FavouriteGames = ({games}) => {

  const favouriteGames = games.map((game) => <li>{game.name}</li>);

  return (
    <div className="favourite-games">
      <h3>Your favourite games!</h3>
      <ul>{favouriteGames}</ul>
    </div>
  );
};

export default FavouriteGames;
