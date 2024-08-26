// import type { MetaFunction } from "@remix-run/node";
import DemoCard from "../components/Card";
import Layout from "../components/Layout";

// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

export default function Index() {
  return (
    <div className="font-sans p-4">
      <Layout>
      <DemoCard />
      </Layout>
    </div>
  );
}
