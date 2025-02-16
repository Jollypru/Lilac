
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import SingleFeature from "./components/SingleFeature";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <SingleFeature></SingleFeature>
      <Categories></Categories>
    </div>
  );
}
