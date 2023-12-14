// scrolling navbar
const navigation = document.querySelector("nav-bar");

const navigationHeight = navigation.OffsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding", navigationHeight + "px"
);