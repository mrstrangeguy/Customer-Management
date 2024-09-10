import { it, describe, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Text from "../components/IconTextField.vue";

describe("Text", () => {
  const primaryText = shallowMount(Text, {
    props: {
      title: "Position",
      descriptionColor: "#03a9f4",
      description: "This is description",
    },
  });

  const secondaryText = shallowMount(Text, {
    props: {
      icon: "dx-icon dx-icon-tel",
      description: "sample5@gmail.com",
    },
  });

  it("test snapshot of primary text component", () => {
    expect(primaryText.element).toMatchSnapshot();
  });

  it("test snapshot of secondary text component", () => {
    expect(secondaryText.element).toMatchSnapshot();
  });
});
