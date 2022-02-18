import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";


const GameSelector = ({ games, onGameSelected }) => {
  console.log(games);

  return (
    <>
      <h2>Select A Game</h2>
      <List>
        {games.map((game) => {
          return (
            <ListItem key={game.id} onClick={() => onGameSelected(game)}>
              <ListItemText
                primary={game.name}
                secondary={<Platforms platforms={game.platforms} />}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

const Platforms = ({ platforms }) => {
  if (!platforms) return;
  return (
    <>
      {platforms.map((item) => {
        return (
          <>
            <Chip key={item.platform.id} label={item.platform.name} />
          </>
        );
      })}
    </>
  );
};
export default GameSelector;
