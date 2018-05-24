const situationDefault = [
  // 'delay',
  'x',
  'cy',
  'clear',
  'move',
  'path',
  'radius',
  'plot',
  'fill',
  'stroke',
  'load',
  'size',
  'center',
  'width'
]

let attrLoad = (sitList) => (ins,attrConfig) => {
  const situation = attrConfig
  let newIns = ins

  sitList.map(sit=>{
    if(situation[sit]!=undefined) {
      if(sit=='size'||sit=='move'||sit=='center') {
        // if(Array.isArray(situation[sit])&&situation[sit].length==2) {
        newIns = newIns[sit](...situation[sit])
        // }
        // else console.log(`${sit} should be a array with 2 parameters`)
      }
      else if(sit=='path')
        newIns = newIns.d(situation[sit])
      else if(sit=='clear'||sit=='move') {
        newIns[sit]()
        return newIns
      }

      else newIns = newIns[sit](situation[sit])
    }
  })

  return newIns
}

export default attrLoad(situationDefault)
