import axios from 'axios';
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Navbar() {
  const Navigate = useNavigate();
  const logout = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/users/logout");
      if(res.data.success){
        toast.success(res.data.message);
        Navigate('/login');
      } 
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <>
        <nav className="max-w-full p-2 flex justify-center gap-x-96">
                <h1 className='text-white font-bold text-2xl'>Movie</h1>
                <Button onClick={logout}>Logout</Button>
        </nav>
    </>
  )
}

export default Navbar;