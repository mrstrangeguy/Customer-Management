import { it, describe, expect } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Search from "../components/Search.vue";

describe("Search", () => {
  const searchElement = shallowMount(Search, {
    props: {
      placeholder: "Search Text",
    },
  });

  it("check placeholder of search component", () => {
    expect(searchElement.find("input").element.placeholder).toBe("Search Text");
  });

  it("check snapshot of search component", () => {
    const currentSearch = searchElement.element;
    expect(currentSearch).toMatchSnapshot();
  });

  it("check if input emits a function when input event is triggered", async () => {
    const searchInput = mount(searchElement);
    searchInput.vm.$emit("emitInputValue", "This is a value");
    await searchInput.vm.$nextTick();

    expect(searchInput.emitted().emitInputValue[0]).toEqual([
      "This is a value",
    ]);
  });
});
