const LoginPage = ({ username, setUsername, password, setPassword, login }) => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="mb-5">請先登入</h1>
        <form className="d-flex flex-column mb-5 gap-3">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email address"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Email address"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={login}
          >
            登入
          </button>
        </form>
        <p className="text-secondary">2024~∞ - 六角學院</p>
      </div>
    </>
  );
};

export default LoginPage;
