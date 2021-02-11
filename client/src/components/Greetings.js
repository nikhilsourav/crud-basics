import { Link } from 'react-router-dom';
const Greetings = () => {
  return (
    <div className='greetings'>
      <h1 className='greetHeading'>Welcome</h1>
      <p className='greetContent'>This is how things work</p>
      <Link to='/form' className='greetBtn'>OK</Link>
    </div>
  );
};

export default Greetings;
