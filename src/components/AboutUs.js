import CartProvider from "../store/CartProvider";
import Footer from "./Footer";
import classes from "./AboutUs.module.css"
import Title from "./Title";
import CommonHeader from "./CommonHeader";

const AboutUs=()=>{
    return <CartProvider>
        <CommonHeader/>
        <Title/>
        <div className={classes.main}>
            Hello There
        </div>
        <Footer/>
    </CartProvider>
}

export default AboutUs;