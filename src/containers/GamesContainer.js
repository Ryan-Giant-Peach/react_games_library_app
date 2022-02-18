import { useState, useEffect } from "react";
import GameSelector from "../components/GameSelector";
import Game from "../components/Game";
import FavouriteGames from "../components/FavouriteGames";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";

const GamesContainer = () => {
  const [game, setGame] = useState(undefined);
  const [games, setGames] = useState([]);
  const [favouriteGames, setFavouriteGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    const getGames = async () => {
      const results = await axios(
        "https://api.rawg.io/api/games?key=34215d85e9af4cc8bc17c24baa3be0a3&dates=2019-09-01,2019-09-30&platforms=18,1,7"
      );
      setGames(results.data.results);
    };
    getGames();
  }, []);

  useEffect(() => {
    if (!games.length) return;
    console.log(games);
  }, [games]);

  if (games.length == 0) return <LinearProgress color="secondary" />;

  const onGameClick = function(game){
    setSelectedGame(game);
}

  const onAddFavourite = function (game) {
    const newGames = Array.from(new Set([...favouriteGames, game]));
    setFavouriteGames(newGames);
  };

  return (
    <>
      <h2>This is the Games Container</h2>
      {game && <Game game={game} />}
      <GameSelector games={games} onGameSelected={(g) => setGame(g)} />
      {selectedGame ? <Game game={selectedGame} onAddFavourite={onAddFavourite} /> : null}

      <FavouriteGames games={favouriteGames} />
    </>
  );
};

export default GamesContainer;
