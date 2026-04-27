import styled from "@emotion/styled";
import { Button } from "./Button";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AppContent } from "@/context/Appcontext";
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Header,
  Container,
  Nav,
  NavLink,
  ButtonGroup,
  SearchInput,
  SearchIcon,
  SearchContainer,
  Logout,
  Profileicon,
  CartIcon,
  Badge,
  ProfileWrapper,
  Hamburger,
} from "@/components/style/navbar";
import MobileMenu from "./user/MobileMenu";
import { MobileSearchIcon } from "@/components/style/navbar";

export default function Navbar() {
  const { user, setUser }: any = useContext(AppContent);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [query, setQuery] = useState("");
  const { cartCount, setCartCount }: any = useContext(AppContent);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }, []);
  //  const [results, setResults] = useState<any[]>([]);
  // const [searchdata , setSearchdata] = useState();

  console.log("this is user data from app context ", user);

  const handleSearch = async () => {
    if (!query) return;

    // const res = await axios.get(`/api/search?query=${query}`);
    // console.log("the search results are ", res.data) ;
    // setResults(res.data);
    router.push(`/search?q=${query}`);
  };

  // 🔥 Auto search

  const router = useRouter();

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const res = await axios.get("/api/cart/all");
        setCartCount(res.data.data.length);
      } catch (err) {
        console.log(err);
      }
    };

    if (user && cartCount === 0) {
      fetchCartCount(); // ✅ only initial load
    }
  }, [user]);

  const handlelogout = async () => {
    try {
      let res = await axios.post("/api/logout", {}, { withCredentials: true });

      if (res.data.success) {
        toast.success("Logged out successfully");
        setUser(false);
        router.push("/");
      } else {
        toast.error("Logout failed");
      }
    } catch (error) {
      console.log("Logout error ", error);
      toast.error("An error occurred during logout");
    }
  };
  return (
    <>
      <Header>
        <Container>
          <Hamburger onClick={() => setMenuOpen(true)} />
          {/* <Logo>Farm Connect</Logo> */}
          <Image src="/images/logos.png" alt="logo" width={130} height={60} />

          <Nav>
            <NavLink
              href="/"
              style={{
                color: router.pathname === "/" ? "#0d631b" : "#555",
              }}
            >
              Home
            </NavLink>
            <NavLink
              href="/equipments"
              style={{
                color: router.pathname.startsWith("/equipments")
                  ? "#0d631b"
                  : "#555",
              }}
            >
              Equipments
            </NavLink>
            <NavLink
              href="/about"
              style={{
                color: router.pathname === "/about" ? "#0d631b" : "#555",
              }}
            >
              About
            </NavLink>
            <NavLink
              href="/contact"
              style={{
                color: router.pathname === "/contact" ? "#0d631b" : "#555",
              }}
            >
              Contact
            </NavLink>
          </Nav>

          <SearchContainer>
            <SearchIcon />
            <SearchInput
              placeholder="Search Equipment"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </SearchContainer>

          {user ? (
            <ButtonGroup>
              {/* 👇 ADD HERE */}
              <MobileSearchIcon onClick={() => router.push("/search")} />

              <ProfileWrapper onClick={() => router.push("/profile")}>
                {user?.profilePic ? (
                  <Profileicon src={user.profilePic} alt="profile" />
                ) : (
                  user?.name?.charAt(0)?.toUpperCase() || "U"
                )}
              </ProfileWrapper>

              <CartIcon onClick={() => router.push("/equipments/carts")}>
                <span className="material-symbols-outlined">shopping_cart</span>
                {cartCount > 0 && <Badge>{cartCount}</Badge>}
              </CartIcon>

              <Logout onClick={handlelogout}>Logout</Logout>
            </ButtonGroup>
          ) : (
            <ButtonGroup>
              <Button
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
              </Button>
            </ButtonGroup>
          )}
        </Container>
      </Header>

      <MobileMenu
        open={menuOpen}
        setOpen={setMenuOpen}
        user={user}
        handlelogout={handlelogout}
      />
    </>
  );
}
