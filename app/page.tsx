
export default function HomePage() {
  return (
    <main className="home-page">

      {/* Profile Picture */}
      <div className="profile-container">
        <img
          src="/profile.jpg"
          className="profile-image"
        />
      </div>

      {/* Name */}
      <h1>Keth Bibay</h1>

      {/* Welcome Message */}
      <p>
        Hello! Welcome to my website. Here you can know more
        about me, my education, hobbies, and contact information.
      </p>

    </main>
  );
}
