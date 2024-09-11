import { Button } from "@/components/atoms/button";
import { Link } from "react-router-dom";

const UserContentHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Resources</h1>
      <Button 
        asChild 
        className="bg-[#0575E6] hover:bg-[#0575E6] hover:bg-opacity-85 p-6"
      >
        <Link to={"create"}>Add User</Link>
      </Button>
    </div>
  )
}

export default UserContentHeader;