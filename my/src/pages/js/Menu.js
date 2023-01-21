import React, { Component } from 'react'
import { Obj } from "./Hover"
import "../css/Home.css"
import Fade from 'react-reveal/Fade';
var lastMobile


function getStyle(el, styleProp) {

  var value, defaultView = (el.ownerDocument || document).defaultView;
  // W3C standard way:
  if (defaultView && defaultView.getComputedStyle) {
    // sanitize property name to css notation
    // (hypen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  } else if (el.currentStyle) { // IE
    // sanitize property name to camelCase
    styleProp = styleProp.replace(/\\-(\w)/g, function (str, letter) {
      return letter.toUpperCase();
    });
    value = el.currentStyle[styleProp];
    // convert other units to pixels on IE
    if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
      return (function (value) {
        var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
        el.runtimeStyle.left = el.currentStyle.left;
        el.style.left = value || 0;
        value = el.style.pixelLeft + "px";
        el.style.left = oldLeft;
        el.runtimeStyle.left = oldRsLeft;
        return value;
      })(value);
    }
    return value;
  }
}
export class Menu extends Component {
  state = {
    aboutus: [{ "text": "lorem ipsum dolor sit amet." }, { "text": "lorem ipsum dolor." }, { "text": "lorem ipsum." }, { "text": "lorem ipsum dolor sit amet duojin la." },],
    kindergarten: [{ "text": "lorem ipsum dolor sit amet2." }, { "text": "lorem ipsum dolor2." }, { "text": "lorem ipsum2." }, { "text": "lorem ipsum dolor sit amet duojin la2." },],
    gimnasia: [{ "text": "lorem ipsum dolor sit amet3." }, { "text": "lorem ipsum dolor3." }, { "text": "lorem ipsum3." }, { "text": "lorem ipsum dolor sit amet duojin la3." },],
    education: [{ "text": "lorem ipsum dolor sit amet4." }, { "text": "lorem ipsum dolor4." }, { "text": "lorem ipsum4." }, { "text": "lorem ipsum dolor sit amet duojin la4." },],
    news: [{ "text": "lorem ipsum dolor sit ame5t." }, { "text": "lorem ipsum dolor5." }, { "text": "lorem ipsum5." }, { "text": "lorem ipsum dolor sit amet duojin la5." },],
    ourachievments: [{ "text": "lorem ipsum dolor sit amet6." }, { "text": "lorem ipsum dolor6." }, { "text": "lorem ipsum6." }, { "text": "lorem ipsum dolor sit amet duojin la6." },],
  }

  openMobile = (classname) => {

    if (lastMobile !== undefined) {
      lastMobile.style = ""
    }
    if (getStyle(document.querySelector(classname), "display") !== "none") {
      lastMobile = document.querySelectorAll(classname)[0]
      document.querySelector(classname).style = "opacity: 1 !important;overflow: unset;height: calc(fit-content);margin: 20px 0 40px 27px;"
    } else {
      lastMobile = document.querySelectorAll(classname)[1]
      document.querySelectorAll(classname)[1].style = "opacity: 1 !important;overflow: unset;height: calc(fit-content);margin: 20px 0 40px 27px;"
    }
  }

  componentDidMount() {
    new Obj(".mobile_li", "opacity: 0.4;", "opacity: 1")


    var links = document.querySelectorAll(".modal_list")
    links.forEach(item => {
      item.addEventListener('mousemove', () => {
        links.forEach(link => link.classList.remove("activeLink"))
        item.classList.add("activeLink")
      })
    })

    document.querySelector(".modal").addEventListener("click", () => {
      document.querySelectorAll(".mobile").forEach(item => {
        item.style = ''
        links.forEach(link => link.classList.remove("activeLink"))
      })
    })
  }
  render() {
    return (
      <div className='modal dn'>
        <div className="submodal">

          <ul className='mobile sall aboutus'>
            {this.state.aboutus.map(i => {
              return (<li className='mobile_li'>{i.text}</li>)
            })}
          </ul>
          <ul className='mobile sall kindergarten'>
            {this.state.kindergarten.map(i => {
              return (<li className='mobile_li'>{i.text}</li>)
            })}
          </ul>
          <ul className='mobile sall gimnasia'>
            {this.state.gimnasia.map(i => {
              return (<li className='mobile_li'>{i.text}</li>)
            })}
          </ul>
          <ul className='mobile sall education'>
            {this.state.education.map(i => {
              return (<li className='mobile_li'>{i.text}</li>)
            })}
          </ul>
          <ul className='mobile sall news'>
            {this.state.news.map(i => {
              return (<li className='mobile_li'>{i.text}</li>)
            })}
          </ul>
          <ul className='mobile sall ourachievments'>
            {this.state.ourachievments.map(i => {
              return (<li className='mobile_li'>{i.text}</li>)
            })}
          </ul>

        </div>

        <ul className='modal_item'>
          <Fade bottom delay={200}>
            <li className='modal_list' onMouseMove={() => { this.openMobile(".aboutus") }}>О нас</li>
          </Fade>

            <ul className='mobile aboutus'>
              {this.state.aboutus.map(i => {
                return (<li className='mobile_li'>{i.text}</li>)
              })}
            </ul>

          <Fade bottom delay={350}>
            <li className='modal_list' onMouseMove={() => { this.openMobile(".kindergarten") }}>Детский сад</li>
          </Fade>
          <ul className='mobile kindergarten'>
            {this.state.kindergarten.map(i => {
              return (<li className='mobile_li'>{i.text}</li>)
            })}
          </ul>


          <Fade bottom delay={500}>
            <li className='modal_list' onMouseMove={() => { this.openMobile(".gimnasia") }}>Гимназия</li>
          </Fade>

          <ul className='mobile gimnasia'>
            {this.state.gimnasia.map(i => {
              return (<li className='mobile_li'>{i.text}</li>)
            })}
          </ul>


          <Fade bottom delay={650}>
            <li className='modal_list' onMouseMove={() => { this.openMobile(".education") }}>Образование</li>
          </Fade>
          <ul className='mobile education'>
            {this.state.education.map(i => {
              return (<li className='mobile_li'>{i.text}</li>)
            })}
          </ul>


          <Fade bottom delay={800}>
            <li className='modal_list' onMouseMove={() => { this.openMobile(".news") }}>Новости</li>
          </Fade>
          <ul className='mobile news'>
            {this.state.news.map(i => {
              return (<li className='mobile_li'>{i.text}</li>)
            })}
          </ul>


          <Fade bottom delay={950}>
            <li className='modal_list' onMouseMove={() => { this.openMobile(".ourachievments") }}>наши достижения</li>
          </Fade>
          <ul className='mobile ourachievments'>
            {this.state.ourachievments.map(i => {
              return (<li className='mobile_li'>{i.text}</li>)
            })}

          </ul>

        </ul>



        <div className="modal_right">
            
          <ul className='right_ul'>
          <Fade bottom delay={200}><a className='right_li' href="#!">Главная</a></Fade>
          <Fade bottom delay={350}><a className='right_li' href="#!">О гимназии</a></Fade>
          <Fade bottom delay={500}><a className='right_li' href="#!">Преимущества</a></Fade>
          <Fade bottom delay={650}><a className='right_li' href="#!">Отзывы</a></Fade>
          <Fade bottom delay={800}><a className='right_li' href="#!">Контакты</a></Fade>
          <Fade bottom delay={950}><a className='right_li' href="#!">Сведения</a></Fade>
          </ul>

        </div>

      </div>
    )
  }
}
export class Burger extends Component {
  openModal = () => {
    document.querySelector(".burger_menu").classList.toggle("active")
    document.querySelector(".burger").classList.toggle("colorChange")
    var links = document.querySelectorAll(".modal_list")
    if (document.querySelector(".modal").className.includes("df")) {
      if (lastMobile !== undefined) {
        lastMobile.style = ""
        links.forEach(link => link.classList.remove("activeLink"))
      }
      document.querySelector(".modal").classList.remove("df")
      setTimeout(() => {
        document.querySelector(".modal").classList.add("dn")
      }, 500);
    } else {
      document.querySelector(".modal").classList.remove("dn")
      setTimeout(() => {
        document.querySelector(".modal").classList.add("df")
      }, 10);
    }
    document.querySelector(".home_right").classList.toggle("rightRight")
  }
  render() {
    return (
      <div className='burger' onClick={this.openModal}>

        <div className="burger_menu">
          <div className="menu_item"> <div className='box_item'></div> </div>
          <div className="menu_item"><div className='box_item box_item2'></div> </div>
          <div className="menu_item"><div className='box_item'></div> </div>
        </div>


      </div>
    )
  }
}
