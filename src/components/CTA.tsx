import styled from "@emotion/styled";

const Section = styled.section`
  padding: 100px 20px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  background: #2e7d32;
  border-radius: 40px;
  padding: 80px 40px;
  text-align: center;
  color: white;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const PrimaryBtn = styled.button`
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

const SecondaryBtn = styled.button`
  padding: 14px 30px;
  border: 2px solid white;
  color: white;
  background: transparent;
  border-radius: 40px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    cursor:pointer;
`;

export default function CTA() {
  return (
    <Section>
      <Container>
        <Title>Ready to start your next season?</Title>

        <Text>
          Join thousands of farmers optimizing their yields with premium
          equipment.
        </Text>

        <ButtonGroup>
          <PrimaryBtn>Browse Catalog</PrimaryBtn>
          <SecondaryBtn>Contact Support</SecondaryBtn>
        </ButtonGroup>
      </Container>
    </Section>
  );
}
