import { it, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import OptionsDropdown from "../components/OptionsDropdown.vue";

describe("OptionsDropdown", () => {
  const firstVariant = mount(OptionsDropdown, {
    props: {
      text: "This is header text",
      arrowIcon: "dx-icon dx-icon-spindown dx-icon-right",
    },
    slots: {
      "dropdown-items": `<div class="w-[94.97px] bg-[rgba(0,0,0,.12)] mt-1">
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
      </div>`,
    },
  });

  const secondVariant = mount(OptionsDropdown, {
    props: {
      icon: "dx-icon dx-icon-export",
      arrowIcon: "dx-icon dx-icon-spindown dx-icon-right",
    },
    slots: {
      "dropdown-items": `
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
    `,
    },
  });

  
  const profileVariant = mount(OptionsDropdown, {
    props: {
      profileUrl:
        "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png",
    },
    slots: {
      "dropdown-items": `<div class="py-2.5 px-[11px] border-b border-[#e0e0e0]">
    <span class="block font-normal text-nowrap font-sm leading-[17.9998px] text-[14px] text-center">John Heart</span>
    </div>
    <div class="my-1">
    <div class="px-[11px] pt-2.5 pb-[9px] flex items-center">
    <div class="w-[29px] h-[18px]">
    <i class="default-icon dx-icon dx-icon-runner dx-list-item-icon leading-[18px] w-[18px] h-[18px] text-[18px] mr-4"/>
    </div>
    <span class="block leading-4 text-[13px]">Logout</span>
    </div>
    </div>`,
    },
  });

  it("check the snapshot variant 1", () => {
    expect(firstVariant.element).toMatchSnapshot();
  });

  it("check text prop", () => {
    expect(firstVariant.find("#heading-text").text()).toBe(
      "This is header text"
    );
  });

  it("check the snapshot variant 2", () => {
    expect(secondVariant.element).toMatchSnapshot();
  });


  it("check the snapshot of profile variant", () => {
    expect(profileVariant.element).toMatchSnapshot();
  });

  // it('check profile click event',() => {
  //   const header = firstVariant.element
  // })

});
