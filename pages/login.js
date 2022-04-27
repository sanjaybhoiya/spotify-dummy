
import { getProviders, signIn } from 'next-auth/react';
import {
  FaAngleDoubleRight,
  FaGithub,
  FaGoogle,
  FaLinkedinIn,
  FaSpotify,
  FaTwitter,
} from 'react-icons/fa';

function Login({ providers }) {
  return (
    <div
      className="text-center h-screen w-screen flex items-center justify-center relative"
      style={{ backgroundColor: 'whitesmoke' }}
    >
      <div className="bg-black space-x-4 w-screen h-40 flex items-center justify-center relative">
        <FaSpotify className="h-28 w-28 text-green-400 "
        />
        <h1
          className="text-4xl lg:text-9xl md:text-7xl  uppercase font-bold"
          style={{
            color: '#1ed760',
          }}
        >
          spotify
        </h1>
        <small className="absolute top-[6.5rem] right-[32rem] font-extrabold uppercase text-lg text-white hidden lg:block">
          Dummy
        </small>

        {Object.values(providers).map((provider) => (
          <div
            key={provider.name}
            className="absolute top-auto w-20 h-20 bg-transparent right-10 justify-center flex flex-col cursor-pointer"
          >
            <FaAngleDoubleRight
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              className="w-10 h-10 animate-pulse  "
              style={{ color: '#1ed760' }}
            />
          </div>
        ))}
      </div>
      <footer
        className="absolute bottom-0 w-96 h-16 bg-gray-300 rounded-t-md"
        style={{
          textAlign: 'center',
          display: 'flex',
          marginTop: '1rem',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <a
          href="https://github.com/sanjaybhoiya"
          target="_blank noreferrer"
        >
          <FaGithub className="h-5 w-5" />
        </a>
        <a
          href="https://google.com/"
          target="_blank noreferrer"
        >
          <FaGoogle className="h-5 w-5" />
        </a>

        <a href="https://twitter.com" target="_blank noreferrer">
          <FaTwitter className="h-5 w-5"
          />
        </a>

        
        <a
          href="https://linkedin.com"
          target="_blank noreferrer"
        >
          <FaLinkedinIn className="h-5 w-5"
          />
        </a>
      </footer>
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}