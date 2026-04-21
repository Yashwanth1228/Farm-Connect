import styled from "@emotion/styled";

export const Page = styled.div`
  background: #fafaf5;
  min-height: 100vh;
`;

export const Main = styled.div`
  padding: 120px 20px 40px;
  max-width: 1200px;
  margin: auto;
`;

export const ProfileCard = styled.div`
  display: flex;
  gap: 40px;
  background: #f4f4ef;
  padding: 40px;
  border-radius: 30px;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

export const Left = styled.div``;

// const Avatar = styled.div`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   overflow: hidden;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

export const Center = styled.div`
  flex: 1;
`;

export const Name = styled.h1`
  font-size: 32px;
  font-weight: 800;
`;

export const Email = styled.p`
  color: #555;
`;

export const SubText = styled.p`
  font-size: 13px;
  color: #888;
  margin-top: 5px;
`;

export const ButtonRow = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
`;

export const PrimaryBtn = styled.button`
  background: #0d631b;
  color: white;
  padding: 10px 18px;
  border-radius: 20px;
  font-weight: 600;
`;

export const SecondaryBtn = styled.button`
  background: #e3e3de;
  padding: 10px 18px;
  border-radius: 20px;
`;

export const Right = styled.div`
  display: flex;
  gap: 15px;
`;

export const Stat = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  text-align: center;

  h2 {
    color: #0d631b;
    font-size: 22px;
  }

  span {
    font-size: 12px;
    color: #777;
  }
`;

export const Section = styled.div`
  margin-top: 50px;
`;

export const SectionHeader = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 26px;
    font-weight: 800;
  }

  p {
    color: #666;
  }
`;

export const BookingCard = styled.div`
  display: flex;
  background: #f4f4ef;
  border-radius: 25px;
  overflow: hidden;
  margin-top: 30px;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  }
`;

export const Image = styled.div`
  width: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 25px;
  flex: 1;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Badge = styled.span`
  background: #d6c953;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12px;
`;

export const Title = styled.h3`
  font-size: 20px;
  margin-top: 8px;
`;

export const Dates = styled.p`
  color: #666;
  margin-top: 5px;
`;

export const Price = styled.div`
  text-align: right;

  h3 {
    color: #0d631b;
  }
`;

export const Actions = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
`;

export const Btn = styled.button`
  background: #e3e3de;
  padding: 8px 14px;
  border-radius: 12px;
`;

///

export const LoadingWrapper = styled.div`
  padding: 120px 20px;
  text-align: center;
`;

export const SkeletonCard = styled.div`
  height: 150px;
  background: #e3e3de;
  border-radius: 20px;
  margin-bottom: 20px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`;

///empty state

export const EmptyWrapper = styled.div`
  padding: 120px 20px;
  text-align: center;
`;

export const EmptyTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const EmptyText = styled.p`
  color: #666;
`;

export const BrowseBtn = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #0d631b;
  color: white;
  border-radius: 20px;
`;

export const CameraButton = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;

  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: none;

  background: #0d631b;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Avatar = styled.div`
  position: relative; /* 🔥 ADD THIS LINE */

  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// export const CameraButton = styled.div`
//   position: absolute; /* ✅ IMPORTANT */
//   bottom: 0;
//   right: 0;
//   background: #0d631b;
//   color: white;
//   border-radius: 50%;
//   padding: 6px;
//   cursor: pointer;
// `;
