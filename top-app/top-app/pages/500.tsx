import Htag  from "../components/Htag/Htag";
import { withLayout } from "../layout/Layout";

function error500(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Ошибка 500</Htag>
    </>
  )
}

export default withLayout(error500);