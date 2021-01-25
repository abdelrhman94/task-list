import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "500px",
  },
}));

const UserCard = ({ user }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Link href={"/users/" + user.id}>
          <a>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={user.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={user.first_name + " " + user.last_name}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {user.email}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </a>
        </Link>
      </CardContent>
    </Card>
  );
};

export default UserCard;
