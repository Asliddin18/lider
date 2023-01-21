import React, { Component } from 'react';
import "../css/Home.css"
import HomeImage from "../images/scnd.png"
import HomeImage2 from "../images/frst.png"
import HomeImage3 from "../images/scnd2.png"
import HomeImage4 from "../images/trd.png"
import Logo from "../images/logo.svg"
import Fade from 'react-reveal/Fade';
import { Menu, Burger } from "./Menu"



class Home extends Component {
    state = {
        time: false,
        scroll:true
    }

    scrolling = () => {
          
            setInterval(() => {
              if(this.state.scroll){  window.scrollBy(0, 1)}else{
           /*  setInterval(() => { */
                window.scrollBy(0, 0)
      /*       }, 120) */
          }
            }, 120)
          
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({ time: true })
        }, 2000);

            setTimeout(() => {
                this.scrolling()
            }, 5000);

            setInterval(() => {
               this.setState({scroll:true}) 
            }, 15000);
    }
    render() {
        return (
            <div >

                <Menu />

                <div className='home'>

                    <Fade duration={800} delay={1000}>

                        <div className='home_left' onClick={()=>{this.setState({scroll:false})}}>

                            <div className='home_first'>

                                <div className='card'>
                                    <img src={HomeImage} alt="HomePng" />
                                    <Fade bottom duration={700}>
                                        <h3>Корпус 2</h3>
                                        <p>на ул.Буденного, 129 (ЖК Центральный)8(918)165-89-46 Юлия Георгиевна</p>
                                    </Fade>
                                </div>

                                <div className='card'>
                                    <img src={HomeImage4} alt="HomePng" />
                                    <Fade bottom duration={700}>
                                        <h3>Корпус 3</h3>
                                        <p>на ул.Буденного, 129 (ЖК Центральный)8(918)165-89-46 Юлия Георгиевна</p>
                                    </Fade>
                                </div>

                                <div className='card'>
                                    <img src={HomeImage} alt="HomePng" />
                                    <Fade bottom duration={700}>
                                        <h3>Корпус 5</h3>
                                        <p>на ул.Буденного, 129 (ЖК Центральный)8(918)165-89-46 Юлия Георгиевна</p>
                                    </Fade>
                                </div>

                                <div className='card'>
                                    <img src={HomeImage4} alt="HomePng" />
                                    <Fade bottom duration={700}>
                                        <h3>Корпус 7</h3>
                                        <p>на ул.Буденного, 129 (ЖК Центральный)8(918)165-89-46 Юлия Георгиевна</p>
                                    </Fade>
                                </div>

                            </div>

                            <div className='home_second'>

                                <div className='card'>
                                    <img src={HomeImage2} alt="HomePng" />

                                    <Fade bottom duration={700} >
                                        <h3>Корпус 1</h3>
                                        <p>на ул.Буденного, 129 (ЖК Центральный)8(918)165-89-46 Юлия Георгиевна</p>
                                    </Fade>
                                </div>

                                <div className='card'>
                                    <img src={HomeImage3} alt="HomePng" />

                                    <Fade bottom duration={700} >
                                        <h3>Корпус 4</h3>
                                        <p>на ул.Буденного, 129 (ЖК Центральный)8(918)165-89-46 Юлия Георгиевна</p>
                                    </Fade>
                                </div>

                                <div className='card'>
                                    <img src={HomeImage2} alt="HomePng" />

                                    <Fade bottom duration={700} >
                                        <h3>Корпус 6</h3>
                                        <p>на ул.Буденного, 129 (ЖК Центральный)8(918)165-89-46 Юлия Георгиевна</p>
                                    </Fade>
                                </div>

                            </div>

                        </div>

                    </Fade>

                    <div className='home_right'>

                        <Fade duration={800} delay={1000}>
                            <div className='home_top'>

                                <ul className="top_item">
                                    <a className='top_link' href="#!">Главная</a>
                                    <a className='top_link' href="#!">О гимназии</a>
                                    <a className='top_link' href="#!">Преимущества</a>
                                    <a className='top_link' href="#!">Отзывы</a>
                                    <a className='top_link' href="#!">Контакты</a>
                                    <a className='top_link' href="#!">Сведения</a>
                                </ul>

                                <a href='/'>
                                    <img src={Logo} alt="logo" className='logo' />
                                </a>

                            </div>
                        </Fade>
                        <div className='home_center'>
                            <h2><h4>ГИМНАЗИЯ</h4><div className="card1"></div></h2>

                            <h3><h5>ЛИДЕР</h5> <div className="card2"></div></h3>

                        </div>
                    </div>

                    <Burger />
                </div>
            </div >
        );
    }
}

export default Home;
