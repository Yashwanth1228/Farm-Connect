import styled from "@emotion/styled";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

export const mq = {
  sm: "@media (max-width: 480px)",
  md: "@media (max-width: 768px)",
  lg: "@media (max-width: 1024px)",
};

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 95%;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  z-index: 50;
  margin: 20px auto;
  left: 0;
  right: 0;
  border-radius: 30px;

  ${mq.md} {
    width: 100%;
    border-radius: 0;
    margin: 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px;

  ${mq.md} {
    height: 65px;
    padding: 0 12px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;

  ${mq.md} {
    display: none; // 👈 change from none
    gap: 10px; // ✅ hide for mobile
  }
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

  ${mq.md} {
    display: none; //  hide in mobile (we’ll add icon later)
  }
`;

export const Hamburger = styled(FiMenu)`
  display: none;
  font-size: 24px;
  cursor: pointer;

  ${mq.md} {
    display: block;
  }
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

  ${mq.md} {
    margin-right: 10px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  ${mq.md} {
    gap: 10px;
  }
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

  ${mq.md} {
    display: none;
  }
`;

export const ProfileWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #0d631b;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  ${mq.md} {
    width: 35px;
    height: 35px;
    display: none;
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
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    font-size: 20px;
    color: #0d631b;
  }

  ${mq.md} {
    width: 35px;
    height: 35px;
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: -5px;
  right: -10px;
  background: red;
  color: white;
  font-size: 10px;
  border-radius: 50%;
  padding: 3px 6px;
`;

// MOBILE MENU

export const MobileSearchIcon = styled(FiSearch)`
  display: none;
  font-size: 22px;
  cursor: pointer;

  ${mq.md} {
    display: block;
  }
`;

// export const MobileSearchInput = styled.input`
//   display: none;

//   ${mq.md} {
//     display: block;
//     position: absolute;
//     top: 70px;
//     left: 10px;
//     right: 10px;
//     padding: 12px;
//     border-radius: 8px;
//     border: 1px solid #ccc;
//     background: white;
//     z-index: 1000;
//   }
// `;

export const MobileSearchWrapper = styled.div`
  display: none;

  ${mq.md} {
    display: flex;
    align-items: center;
    flex: 1;
    margin: 0 10px;
  }
`;

export const MobileSearchInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
`;
