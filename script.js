* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: #f5f5f5;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #2c3e50;
    padding: 15px 30px;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo h2 {
    color: #fff;
    font-size: 24px;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 25px;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    transition: 0.3s;
}

.nav-links a:hover {
    color: #3498db;
}

.hamburger {
    display: none;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .nav-links {
        position: absolute;
        top: 60px;
        left: -100%;
        width: 100%;
        height: 100vh;
        background: #2c3e50;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
        transition: 0.5s;
    }

    .nav-links.active {
        left: 0;
    }

    .hamburger {
        display: block;
    }
}