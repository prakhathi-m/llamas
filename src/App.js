import React from 'react';
import './App.css';
import { FaHome } from 'react-icons/fa';
import Author from './Author';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showllamaContent: false,
      tab: 'origin',
      slide: 1,
      aboutMe: false,
    };
  }

  moveSlide(slidenum) {
    let slide = slidenum;
    if (slidenum > 3) { slide = 1 }
    else if(slidenum < 1) { slide = 3 }
    this.setState({slide});
  }

  render() {
    return (
      <div className="App">
      <div className={this.state.showllamaContent || this.state.aboutMe ? "hide" : ""}>
          <header className="App-header">
            <button className="primary-button small" onClick={() => this.setState({aboutMe: true})}>About Me</button>
          </header>
          <section className="intro-wrapper">
            <div>Aren't Llamas so cute that we all want to keep it as a pet. Lets learn more about llamas.</div>
            <button className="primary-button" onClick={() => this.setState({showllamaContent: true})}>Get Started</button>
          </section>
        </div>
        <main>
          <section className={this.state.showllamaContent ? "" : "hide"}>
            <nav className="navbar">
            <button className="tab" onClick={() => this.setState({showllamaContent: false, tab: 'origin'})}><FaHome size={20}/></button>
            <button className={this.state.tab === 'origin' ? 'tab active' : 'tab'} onClick={() => this.setState({tab: 'origin'})}>Origin</button>
            <button className={this.state.tab === 'char' ? 'tab active' : 'tab'} onClick={() => this.setState({tab: 'char'})}>Characteristics</button>
            <button className={this.state.tab === 'facts' ? 'tab active' : 'tab'} onClick={() => this.setState({tab: 'facts'})}>Facts</button>
            <button className={this.state.tab === 'trivia' ? 'tab active' : 'tab'} onClick={() => this.setState({tab: 'trivia'})}>Trivia</button>
            </nav>
            <article id="origin" className={this.state.tab === 'origin' ? 'tabcontent active' : 'tabcontent'}>
              <img src={require("./assets/Llama-2.jpg")} alt="llama" width={500} height='100%'/>
              <ul style={{'listStyleType': 'none', 'textAlign': 'left'}}>
              <li><b>Common Name: </b>Llama</li>
              <li><b>Scientific Name: </b>Lama glama</li>
              <li><b>Origin: </b>Central Plain of North America</li>
              <li><b>Type: </b>Mammals</li>
              <li><b>Diet: </b>Herbivore</li>
              <li><b>Family: </b>Camelid</li>
              <li><b>Height: </b>5 feet 6 inches to 5 feet 6 inches</li>
              <li><b>Weight: </b>250 to 450 pounds</li>
              </ul>
            </article>

            <article id="char" className={this.state.tab === 'char' ? 'tabcontent active' : 'tabcontent'}>
              <img src={require("./assets/llamas.jpg")} alt="llama" width={500} height='100%'/>
              <ul>
              <li>Llamas are smart and easy to train.</li>
              <li>Llamas are hardy and well suited to harsh environments. They are quite sure-footed, easily navigating rocky terrain at high altitudes.</li>
              <li>Llamas have been used as guard animals for livestock like sheep or even alpacas</li>
              <li>Llamas are vegetarians and have very efficient digestive systems.</li>
              <li>Llamas live to be about 20 years old. Though some only live for 15 years and others live to be 30 years old.</li>
              <li>Mama llamas usually only have one baby at a time and llama twins are incredibly rare. Pregnancy lasts for about 350 days, nearly a full year. Baby llama - Cria, weighs 20 to 35 pounds at birth</li>
              <li>Llamas can reach speeds up to 35mph.</li>
              </ul>
            </article>
            <article id="facts" className={this.state.tab === 'facts' ? 'tabcontent active' : 'tabcontent'}>
            <img src={require("./assets/Bullet.jpg")} alt="llama" width={500} height='100%'/>
            <ul>
            <li>Llamas know their own limits. If you try to overload a llama with too much weight, the llama is likely to lie down or simply refuse to move.</li>
            <li>Llamas don't bite. They spit when they're agitated, but that's mostly at each other. Llamas also kick and neck wrestle each other when agitated.</li>
            <li>Llama dung has almost no odor. Llama farmers refer to llama manure as "llama beans." It makes for a great, eco-friendly fertilizer. The Incas in Peru burned dried llama poop for fuel</li>
            <li>Llamas have a domesticated cousin, the alpaca and two wild "cousins" that have never been domesticated: the vicuña and the guanaco. The Guanaco is closely related to the llama. Vicuñas are thought to be the ancestors of alpacas.</li>
            </ul>
            </article>

            <article id="trivia" className={this.state.tab === 'trivia' ? 'tabcontent active' : 'tabcontent'}>
              <div className="slideshow-wrapper">
                <div className={this.state.slide === 1 ? "slides active fade" : "slides fade"}>
                  <div className="numbertext">1 / 3</div>
                  <img src={require("./assets/llam.jpg")} alt="llama" width={'100%'} />
                  <div className="text">Trying to tell the difference between a llama and an alpaca? Two obvious things to look for: Llamas are generally about twice the size of alpacas, and alpacas have short, pointy ears, whereas llamas have much longer ears that stand straight up and give them an alert look.</div>
                </div>

                <div className={this.state.slide === 2 ? "slides active fade" : "slides fade"}>
                  <div className="numbertext">2 / 3</div>
                  <img src={require("./assets/toy.jfif")} alt="llama" width={'100%'} />
                  <div className="text">Yarn made from llama fiber is soft and lightweight, yet remarkably warm. The soft, undercoat is used for garments and handicrafts while the coarse, outer coat is frequently used for rugs and ropes.</div>
                </div>

                <div className={this.state.slide === 3 ? "slides active fade" : "slides fade"}>
                  <div className="numbertext">3 / 3</div>
                  <img src={require("./assets/wed.jpg")} alt="llama" width={'100%'} />
                  <div className="text">Llamas and Alpacas are trained to be service animals. Not only that, they can be a fun and furry wedding guest.</div>
                </div>

                <span className="prev" onClick={() => this.moveSlide(this.state.slide-1)}>&#10094;</span>
                <span className="next" onClick={() => this.moveSlide(this.state.slide+1)}>&#10095;</span>
                <br />
                <div style={{"textAlign":"center"}}>
                  <span className={this.state.slide === 1 ? "dot active" : "dot"} onClick={() => this.moveSlide(1)}></span>
                  <span className={this.state.slide === 2 ? "dot active" : "dot"} onClick={() => this.moveSlide(2)}></span>
                  <span className={this.state.slide === 3 ? "dot active" : "dot"} onClick={() => this.moveSlide(3)}></span>
                </div>
              </div>
            </article>
          </section>
          {this.state.aboutMe && <Author goBack={() => this.setState({aboutMe: false})}/>}
        </main>
      </div>
    );

  }
}

export default App;
