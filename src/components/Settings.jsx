const Settings = ({ data, setData }) => {
  let { theme } = data;

  const handleSettings = (e) => {
    setData((prevData) => ({
      ...prevData,
      theme: e.target.value,
    }));
  };

  return (
    <div>
      <div className="settings">
        <div>
          <label>Dark</label>
          <input
            type="radio"
            name="dark"
            value="dark"
            checked={data.theme === "dark"}
            onChange={handleSettings}
          />
        </div>

        <div>
          <label>Light</label>
          <input
            type="radio"
            name="light"
            value="light"
            checked={data.theme === "light"}
            onChange={handleSettings}
          />
        </div>
      </div>
    </div>
  );
};
export default Settings;
