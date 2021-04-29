import { shallow, mount } from "enzyme";
import TodoListView from "./TodoListView";
import TodoList from "../components/TodoList";
import "../setupTests";
import toJson from "enzyme-to-json";

it("renders without crashing", () => {
  // shallow used to render a single component - it doesn't render child components
  shallow(<TodoListView />);
});

it("renders header", () => {
  const wrapper = shallow(<TodoListView />);
  const welcome = <h1>Todo List</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("renders correctly", () => {
  const tree = shallow(<TodoListView />);
  // if we change the component then we need to update the snapshop to match - otherwise the test will fail
  expect(toJson(tree)).toMatchSnapshot();
});

const todoListItems = [{ id: 1, name: "walk dog", priority: true }];

describe("checking that view accepts todoListItems props", () => {
  it("accepts todoListItems props", () => {
    // mount is used  to render the full DOM, including child components of the parent running the tests
    const wrapper = mount(<TodoList todoListItems={todoListItems} />);
    expect(wrapper.props().todoListItems).toEqual(todoListItems);
  });
});

// will only work on class components
// it("renders correctly with no error message", () => {
//   const wrapper = mount(<TodoListView />);
//   expect(wrapper.state("error")).toEqual(null);
// });
