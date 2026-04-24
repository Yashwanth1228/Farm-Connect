import { Card, UserInfo, Avatar } from "../../styles/userStyles";

type Props = {
  name: string;
  email: string;
  img: string; // ✅ ADD IMAGE PROP
};

export default function UserCard({ name, email, img }: Props) {
  return (
    <Card>
      <UserInfo>
        {/* ✅ IMAGE */}
        <Avatar src={img} alt="user" />

        <div>
          <h3>{name}</h3>
          <p>{email}</p>
        </div>
      </UserInfo>
    </Card>
  );
}