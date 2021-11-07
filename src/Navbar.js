import './navbar-styles.css';

const Navbar = () => {
    return (
        <div className="navigation-wrap bg-light start-header start-style">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<nav className="navbar navbar-expand-md navbar-light">
					
						<a className="navbar-brand" href="#"><h4><strong>L.B.</strong></h4></a>	
						
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto py-4 py-md-0">
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active d-block d-lg-none" data-toggle="collapse" data-target="#navbarSupportedContent">
									<a className="nav-link" href="#">Home</a>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active d-lg-block d-none">
									<a className="nav-link" href="#">Home</a>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 d-block d-lg-none" data-toggle="collapse" data-target="#navbarSupportedContent">
									<a className="nav-link" href="#about">About</a>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 d-lg-block d-none">
									<a className="nav-link" href="#about">About</a>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 d-block d-lg-none" data-toggle="collapse" data-target="#navbarSupportedContent">
									<a className="nav-link" href="#contactus">Contact</a>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 d-lg-block d-none">
									<a className="nav-link" href="#contactus">Contact</a>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 d-block d-lg-none" data-toggle="collapse" data-target="#navbarSupportedContent">
									<a className="nav-link" href="#work">WORK</a>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 d-lg-block d-none">
									<a className="nav-link" href="#work">WORK</a>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 d-block d-lg-none" data-toggle="collapse" data-target="#navbarSupportedContent">
									<a className="nav-link" href="#portfolio">PORTFOLIO</a>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 d-lg-block d-none">
									<a className="nav-link" href="#portfolio">PORTFOLIO</a>
								</li>
							</ul>
						</div>						
					</nav>		
				</div>
			</div>
		</div>
	</div>
    );
}
 
export default Navbar;