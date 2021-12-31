import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export function RightCards() {
  return (
    <div className='rightCard-container'>
       <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
        alt="green iguana"
      />
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
        Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Development Approach
        </Typography>
        <Typography variant="body2" color="text.secondary">
        SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
        <br/><br/>
        Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );

}
