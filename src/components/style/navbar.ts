import styled from "@emotion/styled";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";


export const Header = styled.header`
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

export const Container = styled.div`
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

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  margin-left: 190px;
`;

export const NavLink = styled(Link)`
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

export const ButtonGroup = styled.div`
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

export const SearchInput = styled.input`
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

export const SearchIcon = styled(FaSearch)`
  color: #555;
  font-size: 18px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 150px;
`;

export const Logout = styled.button`
  padding: 8px 16px;
  background: transparent;

  cursor: pointer;
  border: none;
  &:hover {
    color: #0d631b;
  }
`;

export const Profileicon = styled.img`
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
`;

export const CartIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f4f4ef;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    font-size: 20px;
    color: #0d631b;
  }
`;