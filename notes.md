<!--Navigation: Always use <Link to="..."> or <NavLink to="..."> instead of standard <a> tags to prevent full page reloads and maintain state across pages.

Programmatic Navigation: If you need to navigate inside event handlers or functions, use the useNavigate hook:-->

<!--import { useNavigate } from 'react-router-dom';

function SomeComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Do something...
    navigate('/preview');
  };

  return <button onClick={handleClick}>Go to Preview</button>;
}-->
