import { createLocalVue, mount } from "@vue/test-utils";
import UserTable from "@/components/UserTable.vue";
import Buefy from "buefy";

function getWrapper() {
    return mount (UserTable, {
      localVue,
      propsData: {
        isAdminUser: true
      },
      mocks: {
       $i18n: { locale: "test" }        
      }      
    });    
}

const localVue = createLocalVue();
localVue.use(Buefy);
describe("UserTable.vue", () => {
test("Test UserTable", async () => {
    const wrapper = getWrapper();    
    await wrapper.vm.$nextTick();
    expect(wrapper.find("users-table--b-table--email").exists()).toBe(
      true
    );
    expect(wrapper.element).toMatchSnapshot(); 
});

});