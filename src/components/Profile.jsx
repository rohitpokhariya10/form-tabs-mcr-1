export default Profile = ({ data, setData, errors }) => {
  let { name, email, age } = data;

  const handleProfileData = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div className="profile-fields">
        <div>
          <label>Pofile</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleProfileData}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleProfileData}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleProfileData}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
      </div>
    </div>
  );
};
