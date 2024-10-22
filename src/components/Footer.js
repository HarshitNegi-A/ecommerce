import classes from "./Footer.module.css"

const Footer=()=>{
    return <div className={classes.foot}>
        <span>The Generics</span>
        <div className={classes.button}>
            <button>Youtube</button>
            <button>Spotify</button>
        </div>
        
    </div>
}

export default Footer;