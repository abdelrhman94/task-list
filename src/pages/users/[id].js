import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "500px",
  },
}));

const UserDetailsPage = ({ user }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <CardActionArea>
          <Avatar src={user.data.avatar} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {user.data.first_name + " " + user.data.last_name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {user.data.email}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {user.support.text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </CardContent>
    </Card>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://reqres.in/api/users/${params.id}`);
  const user = await res.json();
  return { props: { user } };
}

export default UserDetailsPage;
