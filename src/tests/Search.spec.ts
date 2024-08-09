import { it, describe, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Search from "../components/Search.vue";

describe("Search", () => {
  const SearchElement = shallowMount(Search, {
    props: {
      placeholder: "Search Text",
    },
  });

  it("check placeholder of search component", () => {
    expect(SearchElement.find("input").element.placeholder).toBe("Search Text");
  });

  it("check snapshot of search component", () => {
    const currentSearch = SearchElement.element;
    expect(currentSearch).toMatchSnapshot();
  });
});
