import * as React from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useUser } from '@/context/userAuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { IUserSignIn } from '../../types/types';


const initialValue = {
  name: '', 
  email: '', 
  password: ''
}

interface ISignUpProps {
}

const SignUp: React.FunctionComponent<ISignUpProps> = (props) => {
  const [userInfo, setUserInfo] = React.useState<IUserSignIn>(initialValue)
  const { googleSignIn, logIn } = useUser();
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

  const handleSubmitForm = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const newUser = await logIn(userInfo.email, userInfo.password);
      console.log(newUser.user);
      
      navigate('/login');

      /**
       * TODOOO
       * Just after successfull creation of user, you have to store the user data in the database. 
       * So we have to configure the firestore to store the future data of other user.
       * 
       */
      
    } catch (err) {
      console.log('Erreur : ', err)
    }
  }

  
  return (
    <div className='flex items-center justify-center h-screen bg-primary'>
      <div className='w-[25%] border rounded-md py-4 bg-background px-6'>
        <form onSubmit={handleSubmitForm}>
        
          <h1 className='my-4 text-4xl font-bold text-center text-transparent bg-custom-gradient bg-clip-text'>PHOTOGRAM </h1>
          
          <p className='my-4 text-center'>Creating a account</p>
          
          <div className='flex justify-center my-4 space-x-4'>
            <Button label='Google' onClick={signUpWithGoogle} />
            <Button label='Facebook' onClick={signUpWithGoogle} />
          </div>

          <div className='flex items-center justify-center'><span className='z-10'>OR</span></div>

          {/* Input elements for collect data from user  */}
          <div className='flex-col my-4 space-y-2'>
            <Input type='text' onChange={handleNameInput} placeholder='Enter your name' value={userInfo.name} label='Name' />
            <Input type='email' onChange={handleEmailInput} placeholder='Enter your email account' value={userInfo.email} label='Email' />
            <Input type='password' onChange={handlePasswordInput} placeholder='Enter your your password' value={userInfo.password} label='Password' />
          </div>

          <div className='flex items-center justify-center'>
            <button type='submit' className='px-6 py-2 text-white ease-in rounded-lg bg-primary hover:bg-slate-700'>
              Create an account
            </button>
          </div>

          {/* Footer card sign up */}
          <div className='my-4 text-center'>
            <p>You already have a account ? <Link className='font-semibold' to='/login'>Log In</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
