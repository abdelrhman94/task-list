import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const UserDetailsPage = ({ user }) => {
  return (
    <Card>
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
    </Card>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://reqres.in/api/users/${params.id}`);
  const user = await res.json();
  return { props: { user } };
}

export default UserDetailsPage;
