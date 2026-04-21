import styled from "@emotion/styled";

//home 

export const Section = styled.section`
  position: relative;
  min-height: 870px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(75%);
`;

export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255),
    rgba(0, 0, 0, 0.3),
    transparent
  );
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1120px;
  margin: auto;
  padding: 5rem 1.5rem;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 32rem;
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 1.5rem;
  background: #d1fae5;
  background-color: #f6be00;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

  export const Highlight = styled.span`
  color: #2e7d32;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 32rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const PrimaryButton = styled.button`
  padding: 16px 32px;
  background: linear-gradient(135deg, #2e7d32, #66bb6a);
  color: white;
  border: none;
  border-radius: 999px;
  font-size: 1.125rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const SecondaryButton = styled.button`
  padding: 16px 32px;
  background: #e5e7eb;
  border: none;
  border-radius: 999px;
  font-size: 1.125rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

//features


export const Section1 = styled.section`
  padding: 6rem 0;
  background: #fafaf5;
`;

export const Container1 = styled.div`
  max-width: 1120px;
  margin: auto;
  padding: 0 1.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 24px;
  background: #f4f4ef;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  }
`;

export const IconBox = styled.div<{ color: string }>`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const Icon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 32px;
  color: white;
`;

export const Title1 = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

export const Description1 = styled.p`
  color: #40493d;
  line-height: 1.6;
`;

//equipment

export const Section2 = styled.section`
  padding: 6rem 0;
  background: #f3f3ee;
`;

export const Container2 = styled.div`
  max-width: 1120px;
  margin: auto;
  padding: 0 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
`;

export const Title2 = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  color: #40493d;
  max-width: 400px;
`;

export const ViewEquipment = styled.a`
  display: none;
  align-items: center;
  font-weight: bold;
  color: #2e7d32;
  background: none;
  border: none;
  cursor: pointer;

  span {
    margin-left: 6px;
    transition: transform 0.2s;
    font-family: "Material Symbols Outlined";
  }

  &:hover span {
    transform: translateX(4px);
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card2 = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.15);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const ImageWrapper = styled.div`
  height: 260px;
  overflow: hidden;
  position: relative;
`;

export const EquipmentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s;
`;

export const Badge2 = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(210, 255, 210, 0.9);
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: bold;
`;

export const CardBody = styled.div`
  padding: 2rem;
`;

export const EquipmentName = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Category = styled.p`
  font-size: 0.8rem;
  color: #40493d;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.div`
  span {
    font-size: 1.6rem;
    font-weight: 800;
    color: #2e7d32;
  }

  small {
    color: #40493d;
  }
`;

export const AddButton = styled.button`
  padding: 10px;
  border-radius: 50%;
  border: none;
  background: #f1f1f1;
  cursor: pointer;
  transition: 0.3s;

  span {
    font-family: "Material Symbols Outlined";
  }

  &:hover {
    background: #2e7d32;
    color: white;
  }
`;

//Testimonials

export const Section3 = styled.section`
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  background: #fafaf5;
`;

export const Container3 = styled.div`
  max-width: 1120px;
  margin: auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;
`;

export const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Heading = styled.h2`
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

export const SubText = styled.p`
  color: #40493d;
  max-width: 32rem;
  margin: auto;
`;

export const Grid3 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const TestimonialsColumn = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const Card3 = styled.div<{ offset?: boolean }>`
  padding: 2rem;
  background: #f4f4ef;
  border-radius: 1.5rem;
  position: relative;

  ${(props) =>
    props.offset &&
    `     @media (min-width:1024px){
      margin-left:3rem;
    }
  `}
`;

export const UserRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  object-fit: cover;
`;

export const Name = styled.h4`
  font-weight: 700;
`;

export const Role = styled.p`
  font-size: 0.875rem;
  color: #40493d;
`;

export const Stars = styled.div`
  display: flex;
  margin-bottom: 1rem;
  color: #686000;
  font-family: "Material Symbols Outlined";
`;

export const Quote = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.7;
`;

export  const ImageWrapper3 = styled.div`
  display: none;
  position: relative;
  min-height: 400px;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const BackgroundShape = styled.div`
  position: absolute;
  inset: 0;
  background: #2e7d32;
  border-radius: 40px;
  transform: rotate(3deg);
  opacity: 0.2;
`;

export const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 40px;
  transform: rotate(-2deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

//CTA

export const Section4 = styled.section`
  padding: 100px 20px;
`;

export const Container4 = styled.div`
  max-width: 1100px;
  margin: auto;
  background: #2e7d32;
  border-radius: 40px;
  padding: 80px 40px;
  text-align: center;
  color: white;
`;

export const Title4 = styled.h2`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 40px;
`;

export const ButtonGroup4 = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const PrimaryBtn = styled.button`
  padding: 14px 30px;
  background: white;
  color: #0d631b;
  font-weight: bold;
  border-radius: 40px;
  border: none;

  &:hover {
    background: #f0f0f0;
    cursor: pointer;
  }
`;

export const SecondaryBtn = styled.button`
  padding: 14px 30px;
  border: 2px solid white;
  color: white;
  background: transparent;
  border-radius: 40px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    cursor:pointer;
`;