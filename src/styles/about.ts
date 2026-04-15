import styled from "@emotion/styled";
import Link from "next/link"

export const theme = {
    colors: {
      primary: "#0d631b",
      primaryContainer: "#2e7d32",
      background: "#fafaf5",
      surface: "#ffffff",
      surfaceContainer: "#eeeee9",
      text: "#1a1c19",
      textVariant: "#40493d",
      tertiaryContainer: "#b9ad3a",
    },
  }

  // hero section

  export const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 6rem 1.5rem;
  
  @media (min-width:768px){
    padding: 8rem 1.5rem;
  }
`

export const HeroContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  display: grid;
  gap: 3rem;
  align-items: center;

  @media (min-width:1024px){
    grid-template-columns: repeat(12, 1fr);
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 10;

  @media (min-width:1024px){
    grid-column: span 7;
  }
`

export const Badge = styled.span`
  display: inline-block;
  padding: 6px 16px;
  margin-bottom: 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  border-radius: 999px;
  background: #b9ad3a;
  color: #464000;
`

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;

  span{
    color:#0d631b;
    font-style: italic;
  }

  @media (min-width:768px){
    font-size:4.5rem;
  }
`

export const Description = styled.p`
  font-size:1.1rem;
  max-width:600px;
  color:#40493d;
  line-height:1.6;

  @media (min-width:768px){
    font-size:1.25rem;
  }
`

export const ImageWrapper = styled.div`
  position: relative;

  @media (min-width:1024px){
    grid-column: span 5;
  }
`

export const Glow = styled.div`
  position:absolute;
  top:-3rem;
  right:-3rem;
  width:260px;
  height:260px;
  background:#88d982;
  opacity:.2;
  border-radius:50%;
  filter: blur(80px);
`

export const ImageCard = styled.div`
  position:relative;
  border-radius:20px;
  overflow:hidden;
  transform: rotate(2deg);
  transition: transform .5s;
  box-shadow:0 20px 40px rgba(0,0,0,0.06);

  &:hover{
    transform: rotate(0deg);
  }`
// mission vision

  export const Section = styled.section`
  padding:6rem 1.5rem;
  background:#f4f4ef;
`

export const Container = styled.div`
  max-width:1280px;
  margin:auto;
`

export const Grid = styled.div`
  display:grid;
  gap:2rem;

  @media (min-width:768px){
    grid-template-columns:1fr 1fr;
  }
`

export const Card = styled.div`
  background:#ffffff;
  padding:2.5rem;
  border-radius:20px;
  border-bottom:4px solid #0d631b;
  box-shadow:0 20px 40px rgba(26,28,25,0.06);

  @media (min-width:768px){
    padding:3.5rem;
  }
`

export const IconBox = styled.div`
  width:56px;
  height:56px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:12px;
  margin-bottom:2rem;
  background:#2e7d32;
  color:white;
`

export const Title = styled.h2`
  font-size:1.8rem;
  font-weight:700;
  margin-bottom:1rem;
`

export const Text = styled.p`
  font-size:1.1rem;
  color:#40493d;
  line-height:1.7;
  `
// story section

  export const StorySection = styled.section`
  padding: 8rem 1.5rem;
  background: #fafaf5;
`

export const StoryContainer = styled.div`
  max-width: 1280px;
  margin: auto;
`

export const StoryGrid = styled.div`
  display: grid;
  gap: 5rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  order: 2;

  @media (min-width: 1024px) {
    order: 1;
  }
`

export const ImgWrapper = styled.div<{ $offset?: boolean }>`
  width: 100%;
  height: 320px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(26, 28, 25, 0.06);
  margin-top: ${({ $offset }) => ($offset ? "3rem" : "0")};
`

export const TextContent = styled.div`
  order: 1;

  @media (min-width: 1024px) {
    order: 2;
  }
`

export const StoryTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
`

export const ParagraphGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.7;
  color: #40493d;
`

export const Highlight = styled.p`
  font-weight: 600;
  color: #0d631b;
`

// values Section

export const ValueSection = styled.section`
  padding: 8rem 1.5rem;
  background: #f3f4ef;
`

export const ValueContainer = styled.div`
  max-width: 1280px;
  margin: auto;
`

export const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`

export const ValueTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`

export const Divider = styled.div`
  width: 80px;
  height: 6px;
  background: #0d631b;
  margin: auto;
  border-radius: 999px;
`

export const ValueGrid = styled.div`
  display: grid;
  gap: 3rem;

  @media (min-width:768px){
    grid-template-columns: repeat(3,1fr);
  }
`

export const ValueCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const IconWrapper = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 999px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
`

export const Icon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-size: 48px;
  color: #0d631b;
  font-variation-settings: 'FILL' 1;
`

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const ValueDescription = styled.p`
  color: #40493d;
  line-height: 1.7;
`

export const values = [
  {
    icon: "handshake",
    title: "Trust",
    description:
      "Integrity is our topsoil. Every transaction on Farm Connect is backed by verified users and secure agreements, fostering a community of mutual respect."
  },
  {
    icon: "psychology",
    title: "Innovation",
    description:
      "We don't just use technology; we refine it. Our platform continuously evolves to meet the changing demands of the modern agricultural landscape."
  },
  {
    icon: "groups",
    title: "Community",
    description:
      "Farming is collaborative by nature. We provide the digital town square where farmers support each other’s success through shared resources."
  }
]

// CTA section

export const CTASection = styled.section`
  padding: 6rem 1.5rem;
`

export const CTAContainer = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 4rem 3rem;
  border-radius: 24px;
  text-align: center;
  position: relative;
  overflow: hidden;

  background: linear-gradient(135deg, #0d631b, #1b8a2f);
`

export const BlurCircle = styled.div`
  position: absolute;
  top: -120px;
  right: -120px;
  width: 260px;
  height: 260px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  filter: blur(60px);
`

export const CTAContent = styled.div`
  position: relative;
  z-index: 10;
`

export const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 2rem;

  @media (min-width:768px){
    font-size: 3rem;
  }
`

export const CTADescription = styled.p`
  color: rgba(255,255,255,0.9);
  font-size: 1.125rem;
  margin-bottom: 3rem;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;

  @media (min-width:640px){
    flex-direction: row;
  }
`

export const PrimaryButton = styled.button`
  background: white;
  color: #0d631b;
  padding: 1rem 2.5rem;
  border-radius: 16px;
  font-weight: 700;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;

  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  transition: all 0.25s ease;

  &:hover{
    background: #f5f5f4;
  }

  &:active{
    transform: scale(0.9);
  }
`

export const SecondaryButton = styled.button`
  background: rgba(255,255,255,0.1);
  color: white;
  border: 1px solid rgba(255,255,255,0.2);
  padding: 1rem 2.5rem;
  border-radius: 16px;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;

  transition: all 0.25s ease;

  &:hover{
    background: rgba(255,255,255,0.2);
  }

  &:active{
    transform: scale(0.9);
  }
`

// Footer

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 3rem 1.5rem;
  margin-top: auto;
  background: #f5f5f4;
  border-top: 1px solid #e7e5e4;
`

export const FooterContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  display: grid;
  gap: 2rem;

  @media (min-width:768px){
    grid-template-columns: repeat(4,1fr);
  }
`

export const BrandSection = styled.div`
  @media (min-width:768px){
    grid-column: span 1;
  }
`

export const BrandName = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #14532d;
  display: block;
  margin-bottom: 1rem;
`

export const BrandText = styled.p`
  font-size: 0.875rem;
  color: #78716c;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

export const Column = styled.div``

export const ColumnTitle = styled.h4`
  font-weight: 700;
  color: #166534;
  margin-bottom: 1rem;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  margin-bottom: 0.75rem;
`

export const StyledLink = styled(Link)`
  color: #78716c;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: rgba(34,197,94,0.3);
  transition: color 0.2s ease;

  &:hover{
    color: #16a34a;
  }
`

export const ActiveLink = styled(Link)`
  color: #15803d;
  font-weight: 500;
`

export const footerLinks = {
  platform: [
    {name: "Equipment Rental", href:"#"},
    {name: "List Your Machinery", href:"#"},
    {name: "Safety Guidelines", href:"#"},
  ],
  company: [
    {name: "About Us", href:"#", active:true},
    {name: "Impact Report", href:"#"},
    {name: "Careers", href:"#"},
  ],
  legal: [
    {name: "Privacy Policy", href:"#"},
    {name: "Terms of Service", href:"#"},
    {name: "Sitemap", href:"#"},
  ]
}