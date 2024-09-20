import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import * as React from 'react';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { UserSignIn } from '@/types/types';
import { Icons } from '@/components/ui/icons';
import { useUserAuth } from '@/context/userAuthContext';
import { Link, useNavigate } from 'react-router-dom';

const initialValue: UserSignIn =  {
  email: "",
  password: "",
  confirmPassword: "",
}

interface ISignUpProps {
}

const SignUp: React.FunctionComponent<ISignUpProps> = () => {

  const { googleSignIn, signUp } = useUserAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = React.useState<UserSignIn>(initialValue);

  /**
   * @description These three functions is for manage the email, password and confirmPassword field.
   * @param e Event to pass to our functions
   */

  const handleEmailUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo, 
      email: e.target.value,
    })
  }

  const handlePasswordUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo, 
      password: e.target.value,
    })
  }

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo, 
      confirmPassword: e.target.value,
    })
  }

  
  
  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/');
    } catch (error) {
      console.log("Erreur : ", error)
    }
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("User Info us", userInfo);
      await signUp(userInfo.email, userInfo.password);
      navigate('/');
    } catch (error) {
      console.log("Error : ", error)
    }
  }


  return (
    <div className='flex items-center justify-center h-screen bg-primary'>
      <div className='w-[25%]'>
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader className="space-y-1">
              <h1 className='mt-4 text-2xl font-bold text-center text-primary'>PhotoGram 📸</h1>
              <CardHeader className="text-2xl text-center">Create a account</CardHeader>
              <CardDescription className='text-center '>
                Enter your email below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-6">
                <Button variant="outline" onClick={handleGoogleSignIn}>
                  <Icons.google className="w-4 h-4 mr-2" />
                  Google
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="px-2 bg-background text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="m@example.com" 
                  onChange={handleEmailUser} />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password"
                  onChange={handlePasswordUser} 
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="confirmpassword" 
                  type="password"
                  onChange={handleConfirmPassword} 
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Create account</Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
};

export default SignUp;
