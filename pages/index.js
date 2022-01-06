import Outlinebtn from "../components/buttons/outlinebtn";
import Secondarybtn from "../components/buttons/Secondarybtn";
import Button from "@/components/buttons/Button";

export default function Home() {
  return (
    <>
      <h1 className={styles.header}>Welcome to Amcovad</h1>
      <Outlinebtn />
      <Secondarybtn />
      <Button
        style="text-[#5D6677]  border border-[#5D6677] rounded-md focus:shadow-outline hover:bg-[#01A1DF] hover:border-[#01A1DF] hover:text-white"
        value="Sign in"
      />
      <Button
        style="text-white bg-[#01A1DF] rounded-md focus:shadow-outline hover:bg-[#5D6677] hover:text-white"
        value=" try it now"
      />
    </>
  );
}

const styles = {
  header: "text-3xl font-bold underline text-red-500",
};
