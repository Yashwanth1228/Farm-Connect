
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from "axios";

type StatItem = {
  label: string;
  value: string;
};

const Container = styled.div`
  grid-column: span 12;

  @media (min-width: 1024px) {
    grid-column: span 4;
  }

  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
`;

const Header = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #f3f4f6;

  display: flex;
  align-items: center;
  gap: 8px;
`;

const Icon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 20px;
  color: #0d631b;

  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
`;

const Title = styled.h3`
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

const Body = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

const Label = styled.span`
  color: #6b7280;
  font-weight: 500;
`;

const Value = styled.span`
  font-weight: 700;
  color: #111827;
`;

const RecommendationWrapper = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #f3f4f6;
`;

const RecommendationBox = styled.div`
  background: rgba(13, 99, 27, 0.05);
  border: 1px solid rgba(13, 99, 27, 0.1);
  padding: 12px;
  border-radius: 8px;
`;

const RecommendationText = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #0d631b;
  font-weight: 600;
  font-style: italic;
  margin: 0;
`;

export default function FieldStatus() {
  // const stats: StatItem[] = [
  //   { label: "Soil Moisture", value: "24%" },
  //   { label: "Temp Range", value: "18° - 24°C" },
  //   { label: "Wind Speed", value: "12 km/h" },
  // ];

  const [stats, setStats] = useState<StatItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=metric`
        );

        const data = res.data;

        setStats([
          {
            label: "Soil Moisture",
            value: `${data.main.humidity}%`, // proxy
          },
          {
            label: "Temp Range",
            value: `${Math.round(data.main.temp_min)}° - ${Math.round(data.main.temp_max)}°C`,
          },
          {
            label: "Wind Speed",
            value: `${data.wind.speed} km/h`,
          },
        ]);

      } catch (error) {
        console.error("Weather fetch error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  // for fetching weather data for every 10 minutes

  // useEffect(() => {
  //   fetchWeather();
  //   const interval = setInterval(fetchWeather, 600000);
  //   return () => clearInterval(interval);
  // }, []);

  if (loading) {
    return <Container>Loading weather...</Container>;
  }

  const getRecommendation = () => {
    const humidity = parseInt(stats[0]?.value || "0");
  
    if (humidity > 70) {
      return "High moisture detected. Avoid heavy machinery to prevent soil damage.";
    }
  
    if (humidity < 30) {
      return "Low moisture. Ideal for plowing and irrigation planning.";
    }
  
    return "Conditions stable. Suitable for regular farming operations.";
  };

  return (
    <Container>
      <Header>
        <Icon>wb_sunny</Icon>
        <Title>Field Status</Title>
      </Header>

      <Body>
        {stats.map((item, index) => (
          <Row key={index}>
            <Label>{item.label}</Label>
            <Value>{item.value}</Value>
          </Row>
        ))}

        <RecommendationWrapper>
          <RecommendationBox>
          <RecommendationText>
              {getRecommendation()}
          </RecommendationText>
          </RecommendationBox>
        </RecommendationWrapper>
      </Body>
    </Container>
  );
}