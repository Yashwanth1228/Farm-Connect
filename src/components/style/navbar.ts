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
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  margin-left: 80px;
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  color: #555;
  cursor: pointer;
  font-size: 22px;

  &:hover {
    color: #0d631b;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  // background: #f4f4ef;
  padding: 6px 12px;
  border-radius: 30px;
  margin-left: 60px;
`;

export const SearchInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 15px 12px;
  outline: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  width: 200px;
`;

export const SearchIcon = styled(FaSearch)`
  color: #555;
  font-size: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Logout = styled.button`
  padding: 8px 14px;
  background: #9ca3af;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 50px;
  padding: 15px;
  font-weight: bold;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #0d631b;
  }
`;

export const Profileicon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;

export const CartIcon = styled.div`
  position:relative
  width: 40px;
  height: 40px;
  border-radius: 50%;
  // background: #f4f4ef;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    font-size: 20px;
    color: #0d631b;
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: 12px;
  right: 105px;
  background: red;
  color: white;
  font-size: 10px;
  // font-weight: bold;
  border-radius: 50%;
  padding: 3px 6px;
`;
