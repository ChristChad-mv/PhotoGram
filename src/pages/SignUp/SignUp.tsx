import * as React from 'react';
import Button from '@/components/ui/Button';
import { useUser } from '@/context/userAuthContext';
import { useNavigate } from 'react-router-dom';

interface IUserInfo {
  name: string, 
  email: string, 
  password: string,
}

const initialValue = {
  name: '', 
  email: '', 
  password: ''
}


interface ISignUpProps {
}

const SignUp: React.FunctionComponent<ISignUpProps> = (props) => {
  const [userInfo, setUserInfo] = React.useState<IUserInfo>(initialValue)
  const { googleSignIn } = useUser();
  const navigate = useNavigate();

  const signUpWithGoogle = async () => {
    try {
      await googleSignIn();
      if(userInfo) {
        console.log('Connection with google');
        navigate('/');
      }
    } catch (err) {
      console.log('Erreur survenu : ', err)
    }
  }

  
  return (
    <div className='flex items-center justify-center'>
      <div className='w-[60%] border text-center  '>
        <form>
          <h1 className='my-2'>PHOTOGRAM</h1>
          
          <p>You can connect with your Facebook or Google Account</p>
          
          <div className='flex justify-center my-2 space-x-4'>
            <Button label='Google' onClick={signUpWithGoogle} />
            <Button label='Facebook' onClick={signUpWithGoogle} />
          </div>

          <div className='w-full '><span className='z-10'>OR CONNECT WITH EMAIL AND PASSWORD</span></div>

        
        </form>
      </div>
    </div>
  );
};

export default SignUp;
