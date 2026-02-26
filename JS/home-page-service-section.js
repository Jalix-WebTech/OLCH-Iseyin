
  const wrapper = document.getElementById("storiesWrapper");

  document.querySelector(".scroll-btn.left").onclick = () => {
    wrapper.scrollLeft -= 200; // scroll left
  };

  document.querySelector(".scroll-btn.right").onclick = () => {
    wrapper.scrollLeft += 200; // scroll right
  };
