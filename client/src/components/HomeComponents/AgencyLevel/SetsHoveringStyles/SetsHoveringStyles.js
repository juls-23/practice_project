const iconColors=[
  {dark:'#de4437', light:'#de44371a'},
  {dark:'#00c9a7', light:'#00c9a71a'},
  {dark:'#377dff', light:'#377dff1a'},
]


export default function SetsHoveringStyles (isHovering, i) {
  const styles = {
    color: !isHovering && iconColors[i].dark,
    backgroundColor: isHovering ? iconColors[i].dark : iconColors[i].light
  }
  return styles
}

