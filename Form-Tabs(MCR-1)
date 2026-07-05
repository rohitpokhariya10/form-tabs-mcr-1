import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";
import { useState } from "react";

export default Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({});

  console.log("errors-->", errors);

  const [data, setData] = useState({
    name: "shubam",
    age: 22,
    email: "rohit.pokhariya123@gmail.com",
    interests: [],
    theme: "dark",
  });
  const handleNext = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prevData) => prevData + 1);
    }
  };
  const handlePrev = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prevData) => prevData - 1);
    }
  };
  const handleAllData = () => {
    // Make an API Call
    console.log("Final data--->", data);
  };

  const tabs = [
    {
      name: "Profile",
      element: Profile,
      validate: () => {
        const error = {};
        if (!data.name || data.name.length < 3) {
          error.name = "Name is Invalid";
        }
        if (!data.age || data.age < 18) {
          error.age = "Age is Invalid";
        }
        if (!data.email || data.email.length < 3) {
          error.email = "Email is Invalid";
        }
        setErrors(error);
        return error.name || error.age || error.email ? false : true;
      },
    },
    {
      name: "Interest",
      element: Interest,
      validate: () => {
        const error = {};
        if (data.interests.length === 0) {
          error.interests = "Select atleast one Interest";
        }
        setErrors(error);
        return error.interests ? false : true;
      },
    },
    {
      name: "Settings",
      element: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].element;

  return (
    <div>
      <div className="tab">
        {tabs.map((tab, index) => (
          <h3
            key={index}
            className="tab-item"
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </h3>
        ))}
      </div>
      <div className="tab-content">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>

      <div className="btn-div">
        {activeTab > 0 && activeTab <= tabs.length - 1 && (
          <button className="prev-btn" onClick={() => handlePrev()}>
            {" "}
            Prev
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button className="next-btn" onClick={() => handleNext()}>
            Next
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={() => handleAllData()}>Submit</button>
        )}
      </div>
    </div>
  );
};
