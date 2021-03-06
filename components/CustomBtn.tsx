import { Button } from '@chakra-ui/react';

interface CustomBtnProps {
  children?: React.ReactNode;
  clicked?: () => void;
}

const CustomBtn: React.FC<CustomBtnProps> = ({ children, clicked }) => (
  <Button
    bgColor="black"
    color="white"
    border="1px solid black"
    _hover={{
      backgroundColor: 'black',
      border: '1px solid white',
      animation: '0s',
    }}
    _focus={{ backgroundColor: 'black' }}
    _active={{ backgroundColor: 'black' }}
    h="100%"
    onClick={clicked}
  >
    {children}
  </Button>
);

export default CustomBtn;
