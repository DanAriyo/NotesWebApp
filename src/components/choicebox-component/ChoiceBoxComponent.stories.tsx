import { SetStateAction, useState } from "react";
import ChoiceBoxComponent from "./ChoiceBoxComponent";
import { Story } from "@ladle/react";
import { IoIosSunny } from "react-icons/io";
import { BsMoonStars } from "react-icons/bs";
import { MdMonitor } from "react-icons/md";

export const DefaultChoiceBox: Story = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.theme || "os"
  );

  const handleChange = (event: { target: { id: SetStateAction<string> } }) => {
    setSelectedTheme(event.target.id);
  };
  return (
    <ChoiceBoxComponent
      lightModeIcon={<IoIosSunny size='2rem' />}
      darkModeIcon={<BsMoonStars size='1.5rem' />}
      osModeIcon={<MdMonitor size='1.5rem' />}
      size='flex flex-row  p-1 mb-2 mr-3 items-center'
      selectedTheme={selectedTheme}
      handleChange={handleChange}
    />
  );
};
