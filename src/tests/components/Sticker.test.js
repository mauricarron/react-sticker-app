import { shallow } from "enzyme";
import Sticker from "../../components/Sticker";

describe("tests on SearchResults Component", () => {
  const id = "abc123";
  const title = "sticker title";
  const url = "https://mi.image.jpg";
  const setCopyState = () => {};

  const wrapper = shallow(
    <Sticker id={id} title={title} url={url} setCopyState={setCopyState} />
  );

  test("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should show props correctly", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
});
