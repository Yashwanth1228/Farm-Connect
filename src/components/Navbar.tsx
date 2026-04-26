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
} from "@/components/style/navbar";

export default function Navbar() {
  const { user, setUser }: any = useContext(AppContent);
  const [query, setQuery] = useState("");
  const { cartCount, setCartCount }: any = useContext(AppContent);
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
  useEffect(() => {
    const delay = setTimeout(() => {
      handleSearch();
    }, 1000);

    return () => clearTimeout(delay);
  }, [query]);

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
    <Header>
      <Container>
        {/* <Logo>Farm Connect</Logo> */}
        <Image src="/images/logos.png" alt="logo" width={130} height={60} />

        <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/equipments">Equipment</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </Nav>

        <SearchContainer>
          <SearchIcon />
          <SearchInput
            placeholder="Search Equipment"
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* <SearchInput placeholder="🔎Search Equipment" /> */}
        </SearchContainer>

        {/* <ButtonGroup>
          <Button href="/login">Login</Button>
          <Button>Signup</Button>
        </ButtonGroup> */}

        {user ? (
          <ButtonGroup>
            {/* <Logo>{user.name[0]}</Logo> */}
            {/* <Profileicon onClick={() => { router.push("/profile")}}>{user?.name?.[0]}</Profileicon> */}
            <Profileicon
              src={user?.profilePic}
              onClick={() => {
                router.push("/profile");
              }}
            ></Profileicon>
            <CartIcon>
              <span
                onClick={() => {
                  router.push("/equipments/carts");
                }}
                className="material-symbols-outlined"
              >
                shopping_cart
              </span>
              {cartCount > 0 && <Badge>{cartCount}</Badge>}
              {/* <Badge>{cartCount}</Badge> */}
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
  );
}
