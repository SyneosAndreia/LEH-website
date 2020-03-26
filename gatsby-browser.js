/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */


// exports.onClientEntry = () => {
//     React.navigate("/modal")
//   }


exports.onClientEntry = () => {

    document.cookie = "pop=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // document.cookie = "name='pop', value=''";

    // this.setcookie('pop', null, -1, '/');

    // setTimeout(() => {
    //     // React.navigate("/modal", { state: { modal: true } })
    //   }, 3000);

    // React.navigate("/modal", state={{ modal: true }})
    // <Link to="/modal" state={{ modal: true }}>Login</Link>
    // React.navigate("/modal", { state: { modal: true } })
    

    // const fp = window.location.pathname.split('/');
    // if ( fp[1] === 'hcp' ) {
    //     React.navigate("/hcp")
    // } else {
    //     React.navigate("/about")
    // }
    console.log(window.location.pathname)
  }


// exports.onRouteUpdate = ({ location }) => {
//   if ( location.hash === "#how-it-works" ) {
//     var element = document.getElementById("how-it-works");
//     var headHeight = document.getElementById('header-wrapper').clientHeight;
//     var headerOffset = 200;
//     var elementPosition = element.offsetTop;
//     var offsetPosition = elementPosition - headerOffset;
//     document.documentElement.scrollTop = offsetPosition;
//     document.body.scrollTop = offsetPosition; // For Safari
//   }
// }

// /* global window, document */
// const scrollTo = (id) => () => {
//   const el = document.querySelector(id)
//   if (el) return window.scrollTo(0, el.offsetTop - 118, 'smooth')
//   return false
// }

// export const onRouteUpdate = ({ location: { hash } }) => {
//   // console.log(location)
//   console.log('=== to hash ' + hash);
//   if (hash) {
//     window.setTimeout(scrollTo(hash), 10)
//   }
// }


exports.onRouteUpdate = ({ location, prevLocation }) => {
    const element = Array.prototype.slice.call(document.querySelectorAll(".header__link"));
    

    element.forEach(function(userItem) {
        userItem.classList.remove("header__link--active");
        // console.log("hh")
    });

    element.forEach(function(userItem) {
        const currentPathArray = location.href.split('/');
        const currentPath = currentPathArray[currentPathArray.length-1];
        const array = userItem.href.split('/');
        const lastsegment = array[array.length-1];
        if ( currentPath === lastsegment) {
            userItem.className += " header__link--active"
        }
    });
  }
