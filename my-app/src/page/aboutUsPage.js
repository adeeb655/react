import '../components';
import './style.css'

const AboutUsPage = () => {
    return (

        <div className="wrapper">

            <header>
                <div className="img_container">
                    {/* <img className="manImg" src={img1}></img> */}
                    <p>f_karayannopoulops@klclawfirm.com</p>
                </div>
                <div className="heading">
                    <h1>Fotis Karayannopoulos</h1>
                    <h5>SENIOR ASSOCIATE</h5>
                    <h5 id="lawyer">SUPREME COURT LAWYER</h5>
                    <h5>Admitted ti Athens Bar in 1992</h5>
                </div>
            </header>
            <section className="banner">
                <div className="langs">
                <h1>Languages: </h1>
                <h5>GREEK,ENGLISH,FRENCH,ITALIAN</h5>
                <div className="card">
            {/* <img className="downloadImg" src ={download}></img> */}
                <h4>DOWNLOAD V.CARD</h4>
                </div>
                </div>
            </section>
        </div>
    );
}
export default AboutUsPage;
