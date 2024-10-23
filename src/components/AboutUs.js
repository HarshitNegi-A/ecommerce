import CartProvider from "../store/CartProvider";
import Footer from "./Footer";
import Header from "./Header";
import classes from "./AboutUs.module.css"
import Title from "./Title";

const AboutUs=()=>{
    return <CartProvider>
        <Header/>
        <Title/>
        <div className={classes.main}>
            Hello There
        </div>
        <Footer/>
    </CartProvider>
}

export default AboutUs;