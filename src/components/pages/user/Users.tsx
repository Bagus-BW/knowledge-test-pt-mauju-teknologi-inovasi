import UserContentHeader from "@/components/organisms/user/UserContentHeader";
import UserContentList from "@/components/organisms/user/UserContentList";

const Users: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <UserContentHeader />
      <UserContentList />
    </div>
  );
}

export default Users;