import { it, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import OptionsDropdown from "../components/OptionsDropdown.vue";

describe("OptionsDropdown", () => {
  const firstVariant = mount(OptionsDropdown, {
    props: {
      text: "This is header text",
      arrowIcon:"dx-icon dx-icon-spindown dx-icon-right"
    },
    slots: {
      'dropdown-items':`<div class="w-[94.97px] bg-[rgba(0,0,0,.12)] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>
      <div class="w-[94.97px] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>
      <div class="w-[94.97px] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>
      <div class="w-[94.97px] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>`
    }
  });

  const secondVariant = mount(OptionsDropdown,{
    props:{
    icon:"dx-icon dx-icon-export",
    arrowIcon:"dx-icon dx-icon-spindown dx-icon-right"
    },
    slots:{
     'dropdown-items': `
     <div class="w-[94.97px] mt-1 flex w-[220.53px]">
        <div
          class="flex items-center text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
        >
          <div class="w-[29px]">
            <i
              class="default-icon font-medium text-[#0000008a] w-[18px] h-[18px] block dx-icon dx-icon-xlsxfile dx-list-item-icon text-[18px] leading-[18px]"
            ></i>
          </div>
          <div class="leading-[15px]">Export all data to Excel</div>
        </div>
      </div>
    `
    }
  })
  
  it("check the snapshot variant 1", () => {
    expect(firstVariant.element).toMatchSnapshot();
  });

  it("check text prop", () => {
    expect(firstVariant.find("#heading-text").text()).toBe(
      "This is header text"
    );
  });

  it("check the snapshot variant 2",() => {
    expect(secondVariant.element).toMatchSnapshot()
  })
});
