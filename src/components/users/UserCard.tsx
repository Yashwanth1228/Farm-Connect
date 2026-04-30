import { Card, UserInfo, Avatar , RoleSelect } from "../../styles/userStyles";
import styled from "@emotion/styled";


type Props = {
  name: string;
  email: string;
  img: string;
  role: string;
  onRoleChange: (role: string) => void;
};

export default function UserCard({ name, email, img , role , onRoleChange}: Props) {
  return (
    <Card>
      <UserInfo>
        {/* ✅ IMAGE */}
        <Avatar src={img} alt="user" />

        <div>
          <h3>{name}</h3>
          <p>{email}</p>
        </div>

        <div style={{ minWidth: "120px" }}>
  <RoleSelect
    value={role}
    onChange={(e) => onRoleChange(e.target.value)}
  >
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </RoleSelect>
</div>
      </UserInfo>
    </Card>
  );
}