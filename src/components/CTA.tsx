import { Section4 } from "@/styles/home";
import {
  Container4,
  Title4,
  Text,
  ButtonGroup4,
  PrimaryBtn,
  SecondaryBtn,
} from "@/styles/home";
import { useRouter } from "next/router";
import FadeInSection from "./user/FadeInSection";
export default function CTA() {
  const router = useRouter();
  return (
    <Section4>
      <Container4>
        <FadeInSection delay={0.2}>
          <Title4>Ready to start your next season?</Title4>

          <Text>
            Join thousands of farmers optimizing their yields with premium
            equipment.
          </Text>

          <ButtonGroup4>
            <PrimaryBtn onClick={() => router.push("/equipments")}>
              Browse Catalog
            </PrimaryBtn>
            <SecondaryBtn onClick={() => router.push("/contact")}>
              Contact Support
            </SecondaryBtn>
          </ButtonGroup4>
        </FadeInSection>
      </Container4>
    </Section4>
  );
}
