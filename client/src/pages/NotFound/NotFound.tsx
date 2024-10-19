import { Central as Layout } from "@/layouts";
import "./NotFound.style.scss";

function NotFound() {
  return (
    <Layout title={"Page Not Found"}>
      <h1>404</h1>
      <img src="/Kratos_Throwing.gif"/>
    </Layout>
  );
}

export default NotFound;
