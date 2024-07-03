/* || Scroll section active hyperlink
  Na navbar exibe um pequeno traçado destacando
  qual sessão está sendo visualizada
*/

sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive => {
  const scroll_y_offset = window.pageYOffset

  sections.forEach(current => {
    const section_top_offset = current.offsetTop;
    const section_height_offset = current.offsetHeight;

    section_id = current.getAttribute('id')

    if (scroll_y_offset > section_top_offset && scroll_y_offset <= section_top_offset + section_height_offset) {
      // document.querySelector('.nav_item a[href*=' + section_id + ']').classList.add('active-session')
      document.querySelector('.nav_item').classList.add('active-session')
    } else {
      // document.querySelector('.nav_item a[href*=' + section_id + ']').classList.remove('active-session')
      document.querySelector('.nav_item').classList.remove('active-session')
    }
  }
  )
})
