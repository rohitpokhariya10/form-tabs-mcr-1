import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";
import { useState } from "react";

export default function Tab() {
  // console.log("hi rendering...");
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({});
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState({
    interests: [],
  });
  console.log("activeTab-->", activeTab);
  console.log("AllData-->", allData);
  //console.log("errors-->", errors);

  //console.log("data-->", data);

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
    //console.log("Final data--->", data);
    setAllData((prev) => [...prev, data]);
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
            // onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </h3>
        ))}
      </div>

      <div className="tab-content">
        {<ActiveTabComponent data={data} setData={setData} errors={errors} />}
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
}
