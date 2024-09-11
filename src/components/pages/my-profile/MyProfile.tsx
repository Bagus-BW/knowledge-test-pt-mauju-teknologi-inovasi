import PersonalInformation from "@/components/organisms/my-profile/PersonalInformation";
import PhotoProfile from "@/components/organisms/my-profile/PhotoProfile";
import { useProfile } from "@/hooks/useProfile";

const MyProfile: React.FC = () => {
  const { myProfile: data } = useProfile()

  return (
    <div className="grid grid-cols-12 items-start gap-x-5">
      <div className="col-span-12 md:col-span-2 lg:col-span-1 flex justify-center md:block">
        <PhotoProfile avatar={data?.avatar || ""} />
      </div>
      <div className="col-span-12 md:col-span-10 lg:col-span-11 mt-5">
        <PersonalInformation 
          firstName={data?.first_name || ""}
          lasttName={data?.last_name || ""}
          email={data?.email || ""}
        />
      </div>
    </div>
  )
}

export default MyProfile;