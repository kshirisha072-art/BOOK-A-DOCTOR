function DoctorProfile() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "40px" }}>

      <h1>Doctor Profile</h1>

      <h2>{user?.name}</h2>

      <p>Email : {user?.email}</p>

      <p>Phone : {user?.phone}</p>

      <p>Role : {user?.role}</p>

    </div>
  );
}

export default DoctorProfile;