import CommonHeader from "./CommonHeader";
import Footer from "./Footer";
import Title from "./Title";
import classes from "./Home.module.css"

const Home=()=>{
    return <>
        <CommonHeader/>
        <Title/>
        <div className={classes.main}>
            <h2>TOURS</h2>
            <ul className={classes.list}>
                <li><div>JUL16</div>     <div>DETROIT, MI</div>     <div>DTE ENERGY MUSIC THEATRE</div>     <div><button className={classes.button}>BuyTickets</button></div></li><hr/>
                <li><div>JUL16</div>     <div>DETROIT, MI</div>     <div>DTE ENERGY MUSIC THEATRE</div>     <div><button className={classes.button}>BuyTickets</button></div></li><hr/>
                <li><div>JUL16</div>     <div>DETROIT, MI</div>     <div>DTE ENERGY MUSIC THEATRE</div>     <div><button className={classes.button}>BuyTickets</button></div></li><hr/>
                <li><div>JUL16</div>     <div>DETROIT, MI</div>     <div>DTE ENERGY MUSIC THEATRE</div>     <div><button className={classes.button}>BuyTickets</button></div></li><hr/>
                <li><div>JUL16</div>     <div>DETROIT, MI</div>     <div>DTE ENERGY MUSIC THEATRE</div>     <div><button className={classes.button}>BuyTickets</button></div></li><hr/>
                <li><div>JUL16</div>     <div>DETROIT, MI</div>     <div>DTE ENERGY MUSIC THEATRE</div>     <div><button className={classes.button}>BuyTickets</button></div></li><hr/>
                
            </ul>
        </div>
        <Footer/>
    </>
}

export default Home;