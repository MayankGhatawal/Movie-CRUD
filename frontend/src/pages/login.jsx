import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/users/login",
        user,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if(res.data.success){
        toast.success(res.data.message);
        navigate('/');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center pt-6 pb-28 h-screen p-16 bg-gray-800 gap-7">
      <h1 className="text-3xl font-bold text-white">Login</h1>
      <Input
        className="border-2 text-white border-gray-300 p-3 rounded-lg"
        value={user.email}
        name="email"
        onChange={changeHandler}
        type="text"
        placeholder="Email"
      />
      <Input
        className="border-2 text-white border-gray-300 p-3 rounded-lg"
        value={user.password}
        name="password"
        onChange={changeHandler}
        type="password"
        placeholder="Password"
      />
      <Button className="rounded-lg hover:border-s-blue-700" onClick={handleClick}>login</Button>
    </div>
  );
}

export default Login;
