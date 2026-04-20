import styled from "@emotion/styled";
import { Button, BtnLogout } from "./Button";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { CartContext } from "@/context/CartContext";
import { UserContext } from "@/context/UserContext";
import Avatar from "@/components/Avatar";

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

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  margin-left: 190px;
`;

const NavLink = styled(Link)`
  font-weight: 500;
  color: #555;
  font-size: 22px;

  &:hover {
    color: #0d631b;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

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

export const ProfileWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #0d631b;
`;

export const ProfileFallback = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #0d631b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
`;

export default function Navbar() {
  const router = useRouter();

  const { cart } = useContext(CartContext);
  const { user, setUser, loading, mounted } = useContext(UserContext);

  const totalItems = cart.length;

  useEffect(() => {
    console.log("USER DATA:", user);
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  if (!mounted) {
    return (
      <Header>
        <Container />
      </Header>
    );
  }

  return (
    <Header>
      <Container>
        {/* Logo */}
        <Image src="/images/logos.png" alt="logo" width={130} height={60} />

        {/* Navigation */}
        <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/equipments">Equipment</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </Nav>

        {/* Search */}
        <SearchContainer>
          <SearchIcon />
          <SearchInput placeholder="Search Equipment" />
        </SearchContainer>

        {/* Buttons */}
        <ButtonGroup>
          {!user ? (
            <Button onClick={() => router.push("/login")}>Login</Button>
          ) : (
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              {/* Cart */}
              <div
                onClick={() => router.push("/equipments/carts")}
                style={{ position: "relative", cursor: "pointer" }}
              >
                🛒
                {totalItems > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "-10px",
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "2px 6px",
                      fontSize: "12px",
                    }}
                  >
                    {totalItems}
                  </span>
                )}
              </div>
              {/* Profile */}
              <ProfileWrapper onClick={() => router.push("/profile")}>
                <Avatar user={user} />
              </ProfileWrapper>
              {/* Logout */}
              <BtnLogout onClick={handleLogout}>Logout</BtnLogout>
            </div>
          )}
        </ButtonGroup>
      </Container>
    </Header>
  );
}
