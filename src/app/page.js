
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import SingleFeature from "./components/SingleFeature";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <Categories></Categories>
      <SingleFeature></SingleFeature>
      <Testimonials></Testimonials>
    </div>
  );
}
