import { Text, VStack, Image, FormControl, FormLabel, Card, Button} from '@chakra-ui/react';
import { Input, Center, Flex, CardBody, Stack, HStack, Link as ChakraLink} from '@chakra-ui/react';
import  { Link as ReactRouterLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import  KhorasanLogo  from './../../assets/WebIcon.png'
import { useEffect, useState } from 'react';
import agent from '../../api/Agent';
import { User, UserFormValues } from '../../models/User';

export const Login = () => {
  const linkProps = CreateAccountLink();
  const LoginButtonProps = LoginButton();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    
  }, []);

  function handleSignupSubmitting(user: UserFormValues) {
    setSubmitting(true);
    agent.Account.login(user).then(()=>{

    });
  }
  
  return (
    <>    
      <Center marginTop={['0px', '50px']}>
        <Flex direction='column' align='center' >
          <VStack as='header' spacing='6' mt='5'>
            <Image src={KhorasanLogo} {...Logo} />
          </VStack>
          <Card {...ParentCard} >
            <Text  {...signInHeader} > Sign in to Khorasan Technology</Text>
            <CardBody style={{ position: 'relative' }} > 
              <Card {...CardOuter}>
                <CardBody style={{ position: 'relative' }} > 
                  <Stack>
                    <VStack >
                      <FormControl >
                        <FormLabel htmlFor='email' {...LoginTextLabel('white')}> Email address</FormLabel>
                        <Input id='email' {...InputFormText} 
                          onChange={(e) => setEmail(e.target.value)}
                        ></Input>
                      </FormControl>
                    </VStack>
                    <FormControl>
                      <HStack justifyContent='space-between'>
                        <FormLabel htmlFor='password' {...LoginTextLabel('white')}> Password</FormLabel>
                        <ChakraLink {...LoginTextLabel('#001a2e')}> Forgot password?</ChakraLink>
                      </HStack>
                      <Input id='password' {...InputFormPassword}
                        onChange={(e) => setPassword(e.target.value)}
                      ></Input>                  
                    </FormControl>
                  </Stack>
                  <Button id='submit' {...LoginButtonProps}  
                    style={{ position: 'absolute', right: 0 }}
                    onClick={handleSignupSubmitting} > Login 
                  </Button>

                </CardBody>
              </Card>
            </CardBody>
            <ChakraLink {...linkProps} 
              as={ReactRouterLink} to='/register' >Create account
            </ChakraLink>
          </Card>
        </Flex>
      </Center>
    </>
  );
}


// Firestore fra minut: 29:45
const Logo = {
  alt:'Login Logo', 
  maxW:'100px',
  maxH: '100px'
};

const signInHeader = {
  position: 'absolute' as const,
  top: '5px',
  left: '50%',
  transform: 'translateX(-50%)',
  fontWeight:'bold',
  fontSize: ['10px', '12px', '15px', '20px'],
  textColor: 'white',
};

const CreateAccountLink = () =>{
  return {
    position: 'absolute' as const,
    bottom: '5px' as const,
    right: '6vw' as const,
    textColor:'black' as const,
    as:'ins' as const,
    fontSize: ['12px', '15', '20px']
  }
}

const ParentCard = {
  bg: '#db3e00', // Background
  borderRadius: '10px',
  justifyContent: 'center',
  marginTop: '10px',
  padding: '3vw',
}

const CardOuter= {
  bg: '#db3e00', // Background
  variant: 'outline',
  borderRadius: '10px',
  borderWidth: '2px',
  w: ['80vw', 200, 300, 400, 500, 600],
  justifyContent: 'flex-start',
  padding: '3vw',
}

const LoginTextLabel = (tColor: string) => {
  return {
    fontSize:['xs', 'sm', 'md'],
    textColor: tColor != ""? tColor : 'black',
  };
}

const InputFormText = {
  type:'text',
  bg:'white',
  borderColor:'#2f2724',
  borderRadius:'10px',
  height: '30px',
  autoComplete:"email",
}

const InputFormPassword = {
  type:'password',
  bg:'white',
  borderColor:'#2f2724',
  borderRadius:'10px',
  height: '30px',
  autoComplete:'off',
  
}

const LoginButton = () =>{
  return {
    position: 'absolute' as const,
    marginTop: '5px' as const,
    marginRight: '20px',
    bg: 'green' as const,
    size: 'sm' as const,
    borderRadius: '10px' as const,
    padding: '15px' as const,
    _hover:{ bg: '#81b182'} as const,
    href:'#',
  }
}