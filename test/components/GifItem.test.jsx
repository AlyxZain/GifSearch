import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Prueba en <GifItem />", () => {
  const title = "Goku";
  const url = "https://media.giphy.com/media/CY3A9zOlZR8uhFbeok/giphy.gif";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el Url y el alt indicado", () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = document.querySelector("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("Debe de mostrar el titulo indicado", () => {
    render(<GifItem title={title} url={url} />);
    expect(document.querySelector("p").textContent).toBe(title);
  });
});
