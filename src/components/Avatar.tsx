import styled from "@emotion/styled";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Fallback = styled.div`
  width: 100%;
  height: 100%;
  background: #0d631b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const Wrapper = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  overflow: hidden;
`;

export default function Avatar({ user }: any) {
  const hasImage = user?.profilePic && user.profilePic.trim() !== "";

  return (
    <Wrapper>
      {hasImage ? (
        <Img src={user.profilePic} alt="profile" />
      ) : (
        <Fallback>{user?.name?.charAt(0)?.toUpperCase() || "U"}</Fallback>
      )}
    </Wrapper>
  );
}