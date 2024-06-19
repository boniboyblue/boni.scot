import './main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div id="wrapper">
			<div id="bg"></div>
			<div id="overlay"></div>
			<div id="main">
					<header id="header">
						<h1>Christopher Boni</h1>
						<p>Senior IT Engineer &nbsp;&bull;&nbsp; Gamer &nbsp;&bull;&nbsp; Addicted to Irn-Bru</p>
						<nav>
							<ul>
								<li><a href="https://www.linkedin.com/in/christophergboni/" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
								<li><a href="https://x.com/BoniBoyBlue" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
								<li><a href="https://www.youtube.com/channel/UCZzTVDXG9AlKABoGim6sDEg" class="icon brands fa-youtube"><span class="label">YouTube</span></a></li>
								<li><a href="https://www.twitch.tv/boniboyblue" class="icon brands fa-twitch"><span class="label">Twitch</span></a></li>
							</ul>
						</nav>
					</header>
					<footer id="footer">
						<span class="copyright">&copy; Christopher Boni</span>
					</footer>
			</div>
		</div>
      </header>
    </div>
    
  );
}

export default App;
