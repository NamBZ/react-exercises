function Header({ children }) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

function Main() {
    const apps = [
        { name: "Counter App", path: "counter.html" },
        { name: "Todo List App", path: "todo.html" },
        { name: "Profile Card", path: "profile.html" },
        { name: "Product List", path: "products.html" },
        { name: "Comment System", path: "comments.html" },
        { name: "Weather App", path: "weather.html" }
    ];

    return (
        <main>
            <div className="section">
                <h2>List Exercises</h2>
                <p>Click on any of the links below to view:</p>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {apps.map((app, index) => (
                        <li key={index} style={{ margin: "10px 0" }}>
                            <a
                                href={app.path}
                                style={{
                                    display: "block",
                                    padding: "10px 15px",
                                    backgroundColor: "#f0f0f0",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                    color: "#333",
                                    fontWeight: "bold"
                                }}
                            >
                                {app.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

function Footer() {
    return (
        <footer className="section">
            <span>&copy; NamPT.Me</span>
        </footer>
    );
}

function App() {
    return (
        <>
            <Header>ReactJS Exercise Day 34</Header>
            <Main />
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);