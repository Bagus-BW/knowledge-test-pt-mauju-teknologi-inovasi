import { useCallback, useState } from "react";

import { useDeleteUser, useUser } from "@/hooks/useUser";

import { Checkbox } from "@/components/atoms/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/atoms/table";
import { LoaderCircleIcon, SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";


const UserContentList: React.FC = () => {
  const [selectedResources, setSelectedResources] = useState<number[]>([]);

  const { id } = useParams<{id: string}>()
  const { data: users = [], isLoading } = useUser();
  const { mutate: deleteUser } = useDeleteUser()

  const toggleAll = useCallback((checked: boolean) => {
    if (checked) {
      const allIds = users.map((_, idx) => idx);
      setSelectedResources(allIds);
    } else {
      setSelectedResources([]);
    }
  }, [users]);

  const toggleResource = useCallback((idx: number) => {
    setSelectedResources((prevSelected) =>
      prevSelected.includes(idx)
        ? prevSelected.filter((id) => id !== idx)
        : [...prevSelected, idx]
    );
  }, []);

  const isAllSelected: boolean = users.length > 0 && selectedResources.length === users.length;

  const onDelete = useCallback(() => {
    deleteUser({ id: id || "" })
  }, [deleteUser, id])

  return (
    <div className="bg-white rounded">
      <div className="flex items-center pr-3">
        <Input 
          placeholder="Search user" 
          className="w-full text-[#333333] placeholder:text-[#333333] placeholder:text-opacity-30 border-none focus-visible:ring-0 px-[18px] py-[26px] rounded-none"
        />
        <SearchIcon  className="text-[#333333]"/>
      </div>
      <Table className="border">
        <TableHeader className="bg-[#F6F6F6]">
          <TableRow>
            <TableHead>
              <Checkbox
                checked={isAllSelected}
                onCheckedChange={(checked) => toggleAll(!!checked)}
              />
            </TableHead>
            <TableHead className="text-[#000000DE] font-medium">No</TableHead>
            <TableHead className="text-[#000000DE] font-medium">Avatar</TableHead>
            <TableHead className="text-[#000000DE] font-medium">Full Name</TableHead>
            <TableHead className="text-[#000000DE] font-medium">Email</TableHead>
            <TableHead className="text-[#000000DE] font-medium">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isLoading && (
            <>
              {users.length > 0 && users?.map((user, idx) => (
                <TableRow key={idx}>
                  <TableCell height={50}>
                  <Checkbox
                      checked={selectedResources.includes(idx)}
                      onCheckedChange={() => toggleResource(idx)}
                    />
                  </TableCell>
                  <TableCell height={50}>{idx + 1}</TableCell>
                  <TableCell height={50}>
                    <Avatar className="border-2 border-[#0571E1] w-10 h-10">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell height={50}>{user.first_name + " " + user.last_name}</TableCell>
                  <TableCell height={50}>{user.email}</TableCell>
                  <TableCell height={50}>
                    <div className="flex flex-col md:flex-row items-center">
                      <Link 
                        to={"edit/2"} 
                      >
                        <img 
                          src="./images/icon/pencil.png" 
                          alt="Pencil Icon" 
                          className="bg-[#e6e6e6] rounded-full p-2"
                        />
                      </Link>
                      <Button
                        className="bg-transparent shadow-none hover:bg-transparent p-0"
                        onClick={onDelete}
                      >
                        <img 
                          src="./images/icon/trash.png" 
                          alt="Pencil Icon" 
                          className="p-2"
                        />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}

              {users.length < 1 && (
                <TableRow>
                  <TableCell 
                    colSpan={7}
                    height={50}
                    align="center"
                  >
                    <p>Resources Not Available</p>
                  </TableCell>
                </TableRow>
              )}
            </>
          )}
          {isLoading && (
            <TableRow>
              <TableCell 
                colSpan={7} 
                height={50}
                align="center"
              >
                <LoaderCircleIcon className="animate-spin icon" />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default UserContentList;