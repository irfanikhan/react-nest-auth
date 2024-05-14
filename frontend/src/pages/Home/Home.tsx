import Layout from "components/Layout/Layout";
import TextButton from "components/TextButton/TextButton";
import useAuth from "context/useAuth";

const Home = () => {
  const { logout } = useAuth();
  return (
    <Layout>
      <div className='gap-5 flex flex-col'>
        <div className="text-lg text-gray-800">Welcome to the applciation!</div>
        <TextButton onClick={logout}>Logout</TextButton>
      </div>
    </Layout>
  );
};

export default Home;
