import type { MetaFunction } from "@remix-run/node";
import Layout from "../components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <Layout>
        <h1 className="text-3xl">Welcome to Remix</h1>  
      </Layout>
    </div>
  );
}
