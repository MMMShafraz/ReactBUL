import logo from '../logo.png';
import Me from '../IMG.jpg';
import yt from '../youtube.png';
import fb from '../facebook.png';
import ln from '../linkedin.png';
import './Home.css';
function HomePage(props) {
  return (
    <div>
      <div className="nav" role="navigation" aria-label='main navigation'>
        <div className="navbar-start">
        <a className="navbar-item">
            <img src={logo}></img>
          </a>
          <a className="navbar-item" href='/'>
            Home
          </a>
          <a className="navbar-item" href="/#about">
            About
          </a>
          <a className="navbar-item" href="/#Work">
            Work
          </a>
          <a className="navbar-item" href='/#Contact'>
            Contact
          </a>
        </div>
        <div>
        <div className='columns'>
          <div className='column is-half'>
          <section className="section">
            <div className="container">
              <div className="name">
                <h1 className="started"><b>Hi,My name is</b><br></br><b className='qualification'>Mohamed Shafraz</b><br></br>Design|Development|Freelance<div class="block">
                  <a class="button is-black">Resume</a>
                  <a class="description ">
    <h2>I design for my project and competitions<br></br> with creative ideas</h2>
  </a>
                </div></h1>
                </div>
                </div>
          </section>
          </div>
          <br></br>
          <section className='section is-medium'>
        <img className='profile' src={Me}></img>
        </section>
        </div>
        </div>
        <div className='aligning'>
        <span className='profile'>&ensp;Branding&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;Development&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;Design&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;Strategy</span>
      </div>
      <br></br>
      </div>
      <br></br>
      <br></br>
      <div className='columns'>
      <div className='column is-three-fifths'></div>
      <div className='column is-one-fourths'>
      <section className='section'>
      <div className='connect'>CONNECT WITH</div></section>
      <section className='section'>
      <img className='yt' src={yt}></img> <img className='yt' src={fb}></img> <img className='yt' src={ln}></img></section>
      
      </div>
      </div>
      </div>
      
  );
}

export default HomePage;
