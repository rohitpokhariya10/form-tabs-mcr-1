const Interest = ({ data, setData, errors }) => {
  const interestsOption = ["Gym", "Coding", "Music", "Traveling", "test"];

  let interests = data.interests;
  console.log("Interests-->", interests);

  const handleInterest = (e) => {
    const { value, checked } = e.target;
    console.log("value==>", value);
    console.log("checked==>", checked);
    setData((prevData) => ({
      ...prevData,
      //key:value
      interests: checked
        ? [...prevData.interests, value]
        : prevData.interests.filter((interest) => {
            console.log(interest, value);
            return interest != value;
          }),
    }));
  };
  return (
    <div>
      <div className="interests">
        {interestsOption.map((interest, index) => (
          <div key={index}>
            <label>{interest}</label>
            <input
              type="checkbox"
              value={interest}
              name={interest}
              checked={interests.includes(interest)}
              onChange={handleInterest}
            />
            {errors.interests && <p className="error">{errors.interests}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interest;
