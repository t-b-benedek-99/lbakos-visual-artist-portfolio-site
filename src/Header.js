import selfImage from './img/self_black_and_white.jpg';
import './App.css';
import Navbar from './Navbar';
import './header-styles.css'

const Header = () => {
    return (
        <header id="header">
        <div className='jumbotron d-md-none' id="smallJumbo">
            <h1 className='display-4'>Laszlo Bakos</h1>
            <h5>Master of Visual Arts | Photoshop guru | After Effects expert | Black-belt Premiere Pro ninja</h5>
        </div>
        <div className='row mr-0' id='intro'>
            <div className='d-none d-xl-block col-lg-3 pt-5 pb-5'>
              <img id="selfImg"  src={selfImage} style={{width: '100%', marginTop: '0px', padding: '0px', borderRadius: '0px 20px 20px 0px'}} alt='Laszlo Bakos' />
            </div>
            <div className="col-lg-9">
                <div className='jumbotron myJumbo d-md-block'>  
                    <h1 className='display-4 pl-5 d-none d-md-block'>Laszlo Bakos</h1>
                    <h5 className="pl-5 pb-5 d-none d-md-block">Master of Visual Arts | Photoshop guru | After Effects expert | Black-belt Premiere Pro ninja</h5>
                    <div className='col-lg-3'>
                        <img className="d-md-none" src={selfImage} style={{width: '100%', marginTop: '0px', padding: '0px'}} alt='Laszlo Bakos' />
                    </div>
                    <div className='col-lg-9 pt-4 ml-0 skillset'>
                        <p>
                            Skilled in Photoshop Art, Photo Retouching, Typography, Adobe Illustrator &amp; Premiere Pro.</p><p>Strong interest in video editing and photography.</p><p>Focus on quality work.</p><p>Marketing and advertising industry.
                        </p>
                        <p>
                            Skilled in Photoshop Art, Photo Retouching, Typography, Adobe Illustrator &amp; Premiere Pro.</p><p>Strong interest in video editing and photography.</p><p>Focus on quality work.</p><p>Marketing and advertising industry.
                        </p>
                    </div>
                    
                    <Navbar />
                </div>                
            </div>
          </div>   
      </header>
    );
}

export default Header;