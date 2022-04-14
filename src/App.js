import PropTypes from "prop-types";

function Food({name, picture, rating}) {
  //console.log(props);
  return (
  <div>
    <h3>I love {name}</h3>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

const foodILike = [

{
  id: 1,
  name: 'Kimchi',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Im3CyjFllnHYNhKLSjh2LAHaGp%26pid%3DApi&f=1',
  rating: 5.0,
},
{
  id: 2,
  name: 'Samgyeopsal',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nlYzHbggcvJ_xXQPRqcazwHaFS%26pid%3DApi&f=1',
  rating: 4.9,
},
{
  id: 3,
  name: 'Bibimbap',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.TyqKdm936XUIYdpzHOOetgHaE8%26pid%3DApi&f=1',
  rating: 3.9,
},
{
  id: 4,
  name: 'Doncasu',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6dFBZJtvv3FjaTkXvaTlWQHaE8%26pid%3DApi&f=1',
  rating: 4.2,
},
{
  id: 5,
  name: 'Kimbap',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XiO-APPrmYLstQXFFJDGrgHaE-%26pid%3DApi&f=1',
  rating: 4.8,
}
];

function App() {
  return (
  <div>
    {foodILike.map(dish => <Food  key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;
