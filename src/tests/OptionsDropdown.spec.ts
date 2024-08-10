import { it, expect, describe } from "vitest";
import { shallowMount } from "@vue/test-utils";
import OptionsDropdown from "../components/OptionsDropdown.vue";

describe("OptionsDropdown", () => {
  const optionsDropdown = shallowMount(OptionsDropdown, {
    props: {
      text: "This is header text",
    },
  });
  it("check the snapshot", () => {
    expect(optionsDropdown.element).toMatchSnapshot();
  });

  it("check text prop", () => {
    expect(optionsDropdown.find("#heading-text").text()).toBe(
      "This is header text"
    );
  });
});
