const situationDefault = [
  // 'delay',
  'loop',
  'during',
  'after'
]

let animeLoad = (situationDefault) => (ins,aniConfig) => {
  const { config={ time:5000, easing:'<', delay: 0, attr:{} }, situation } = aniConfig
  let newIns = ins
    .animate(config.time,config.easing,config.delay)
    .attr(config.attr)
  situationDefault.map(sit=>{
    if(situation[sit]!=undefined) {
      if(sit=='loop') {
        newIns = newIns.loop(...situation[sit])
      }
      else newIns = newIns[sit](situation[sit])
    }
  })
}

export default animeLoad(situationDefault)
