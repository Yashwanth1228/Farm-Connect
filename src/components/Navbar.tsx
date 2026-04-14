import styled from "@emotion/styled";
import { Button } from "./Button";
// import { FaSearch } from "react-icons/fa";
// import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AppContent } from "@/context/Appcontext";
import { useRouter } from "next/router";
import axios from "axios";
import { FaSearch } from "react-icons/fa";


const Header = styled.header`
  position: fixed;
  top: 0;
  width: 95%;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  z-index: 50;
  margin-top: 20px;
  margin-left: 3%;
  border-radius: 30px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
`;

// const Logo = styled.div`
//   font-size: 24px;
//   font-weight: 800;
//   color: #0d631b;
// `;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  margin-left: 190px;
`;

const NavLink = styled(Link)`
  font-weight: 500;
  color: #555;
  cursor: pointer;
  font-size: 22px;
  margin-top: 5px;

  &:active {
    color: #0d631b;
    border-bottom: 2px solid #0d631b;
  }

  &:hover {
    color: #0d631b;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

// const Login = styled.button`
//   padding: 8px 16px;
//   background: transparent;
//   border-radius: 6px;
//   cursor: pointer;
// `;

// const Signup = styled.button`
//   padding: 10px 18px;
//   background: #0d631b;
//   color: white;
//   border-radius: 30px;
//   font-weight: bold;
// `;

const SearchInput = styled.input`
  width: 170px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  margin-left: 10px;
  border-radius: 30px;
  font-size: 16px;

  &:focus {
    outline-color: #0d631b;
  }
`;

const SearchIcon = styled(FaSearch)`
  color: #555;
  font-size: 18px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 150px;
`;

const Logout = styled.button`
    padding: 8px 16px;
    background: transparent;
    
    cursor: pointer;
    border: none;
    &:hover {
        color: #0d631b;
      }
    
`

const Profileicon = styled.div`
    width: 50px;
    height: 45px;
    border-radius: 50%;
    background: #0d631b;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
`


export default function Navbar() {

   const {user , setUser} : any= useContext(AppContent);

    console.log("this is user data from app context " , user )
    
    const router = useRouter();

    const handlelogout = async () => {

        try {

            let res = await axios.post('/api/logout',{},{withCredentials:true});
        
        if(res.data.success) {
            alert("Logged out successfully");
            setUser(false);
            router.push('/');
        }
        else {
            alert("Logout failed");
        }


        }
        catch(error) {
            console.log("Logout error " , error);
            alert("An error occurred during logout");
        }

        


    }
  return (
    <Header>
      <Container>
        {/* <Logo>Farm Connect</Logo> */}
        <Image src="/images/logos.png" alt="logo" width={130} height={60} />

        <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/equipment">Equipment</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </Nav>

        <SearchContainer>
          <SearchIcon />
          <SearchInput placeholder="Search Equipment" />
          {/* <SearchInput placeholder="🔎Search Equipment" /> */}
        </SearchContainer>

        {/* <ButtonGroup>
          <Button href="/login">Login</Button>
          <Button>Signup</Button>
        </ButtonGroup> */}

          {user ?  <ButtonGroup>

                {/* <Logo>{user.name[0]}</Logo> */}
                <Profileicon>{user?.name?.[0]}</Profileicon>
                <Logout onClick={handlelogout}>Logout</Logout>
                </ButtonGroup>  
                :  <ButtonGroup>

                    <Button onClick={() => {router.push('/login')}} >Login</Button>

                    {/* <Login onClick={() => {router.push('/login')}}>Login</Login> */}
                      {/* <Signup>Signup</Signup> */}

                    </ButtonGroup>}
      </Container>
    </Header>
  );
}