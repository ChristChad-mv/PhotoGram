import * as React from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useUser } from '@/context/userAuthContext';
import { Link, useNavigate } from 'react-router-dom';

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

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo, 
      email: e.target.value
    });
  }

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo, 
      name: e.target.value,
    })
  }

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo, 
      password: e.target.value,
    })
  }

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
    <div className='flex items-center justify-center h-screen bg-primary'>
      <div className='w-[25%] border rounded-md text-center p-4 bg-background'>
        <form>
          <h1 className='my-4 font-bold'>PHOTOGRAM</h1>
          
          <p className='my-4'>Create your account</p>
          
          <div className='flex justify-center my-4 space-x-4'>
            <Button label='Google' onClick={signUpWithGoogle} />
            <Button label='Facebook' onClick={signUpWithGoogle} />
          </div>

          <div className='w-full '><span className='z-10'>OR CONNECT WITH EMAIL AND PASSWORD</span></div>

          {/* Input elements for collect data from user  */}
          <div className='flex-col my-4 space-y-2'>
            <Input type='text' onChange={handleNameInput} placeholder='Enter your name' value={userInfo.name} />
            <Input type='email' onChange={handleEmailInput} placeholder='Enter your email account' value={userInfo.email} />
            <Input type='password' onChange={handlePasswordInput} placeholder='Enter your your password' value={userInfo.password} />
          </div>

          {/* Footer card sign up */}
          <div className='my-4'>
            <p>You already have a account ? <Link className='font-semibold' to='/login'>Log In</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
