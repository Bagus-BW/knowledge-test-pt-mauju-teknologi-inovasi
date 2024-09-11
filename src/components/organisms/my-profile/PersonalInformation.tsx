import { Input } from "@/components/atoms/input"

interface PersonalInformationProps {
  firstName: string
  lasttName: string
  email: string
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ firstName, lasttName, email }) => {
  return (
    <div className="w-full flex flex-col gap-5 pl-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input 
          className="w-full bg-white text-[#333333] border-[#333333] rounded-md px-[18px] py-[26px]"
          value={firstName}
          disabled
        />
        <Input 
          className="w-full bg-white text-[#333333] border-[#333333] rounded-md px-[18px] py-[26px]"
          value={lasttName}
          disabled
        />
      </div>
      <Input 
        className="w-full bg-white text-[#333333] border-[#333333] rounded-md px-[18px] py-[26px]"
        value={email}
        disabled
      />
    </div>
  )
}

export default PersonalInformation