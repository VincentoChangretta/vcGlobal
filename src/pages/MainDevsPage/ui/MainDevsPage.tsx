import { HelperForm } from "widgets/HelperForm/HelperForm";
import { MainDevsAdvantages } from "./sections/MainDevsAdvantages";
import { MainDevsServices } from "./sections/MainDevsServices";
import { MainDevsTop } from "./sections/MainDevsTop";

const MainDevsPage = () => {
  return (
    <>
      <MainDevsTop />
      <MainDevsServices />
      <MainDevsAdvantages />
      <HelperForm/>
    </>
  );
};

export default MainDevsPage;
