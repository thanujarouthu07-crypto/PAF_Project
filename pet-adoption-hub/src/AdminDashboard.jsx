import { useState } from "react";

function readData(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function AdminDashboard({ setPage }) {
  const [users] = useState(() => {
    const savedUsers = readData("registeredUsers", []);

    if (
      savedUsers.length === 0 &&
      localStorage.getItem("email")
    ) {
      return [{ email: localStorage.getItem("email") }];
    }

    return savedUsers;
  });

  const [loginHistory] = useState(() =>
    readData("loginHistory", [])
  );

  const [adoptionRequests] = useState(() =>
    readData("adoptionRequests", [])
  );

  const totalLogins = Number(
    localStorage.getItem("totalLogins") || 0
  );

  return (
    <div className="admin-page">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Pet Adoption</h2>

        <p className="admin-sidebar-label">
          ADMIN PANEL
        </p>

        <button
          className="admin-nav-button"
          onClick={() => setPage("menu")}
        >
          🐶 View Pets
        </button>

        <button
          className="admin-nav-button"
          onClick={() => setPage("start")}
        >
          🚪 Logout
        </button>
      </aside>

      {/* Main Dashboard */}
      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <h1>Admin Dashboard</h1>
            <p>
              Manage users, pets and adoption activity
            </p>
          </div>

          <span className="admin-badge">
            Administrator
          </span>
        </header>

        {/* Registered Users */}
        <section className="admin-section">
          <h2>Registered Users</h2>

          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Email Address</th>
                </tr>
              </thead>

              <tbody>
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr
                      key={(user.email || "user") + index}
                    >
                      <td>{index + 1}</td>

                      <td>
                        {[user.fname, user.lname]
                          .filter(Boolean)
                          .join(" ") || "—"}
                      </td>

                      <td>
                        {user.email || "Not provided"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">
                      No registered users yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Login History */}
        <section className="admin-section">
          <h2>
            Successful Logins up to date - {totalLogins}
          </h2>

          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Email Address</th>
                  <th>Login Time</th>
                </tr>
              </thead>

              <tbody>
                {loginHistory.length > 0 ? (
                  loginHistory.map((login, index) => (
                    <tr
                      key={(login.email || "login") + index}
                    >
                      <td>{index + 1}</td>

                      <td>
                        {login.email || "Not provided"}
                      </td>

                      <td>
                        {login.time || "Not provided"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">
                      No successful logins yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Adoption Requests */}
        <section className="admin-section">
          <h2>
            Saved Adoptions - {adoptionRequests.length}
          </h2>

          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Applicant Email</th>
                  <th>Pet</th>
                  <th>Submission Time</th>
                </tr>
              </thead>

              <tbody>
                {adoptionRequests.length > 0 ? (
                  adoptionRequests.map((request, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>

                      <td>
                        {request.email ||
                          request.applicantEmail ||
                          "Not provided"}
                      </td>

                      <td>
                        {request.pet ||
                          request.petName ||
                          "Not provided"}
                      </td>

                      <td>
                        {request.time || "Not provided"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">
                      No adoption requests yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="admin-footer">
          Pet Adoption Hub — Administration
        </footer>
      </main>
    </div>
  );
}

export default AdminDashboard;