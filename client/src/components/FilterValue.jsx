const React = require('react');

const FilterValue = (props) =>{

  const onChange = function(event){
    props.onChange(event.target.value)
  }

  if (props.focusFeature !== "default"){
    let featureValueOptions = props.remainingWhos
    .map( (whoObject) => { return whoObject[props.focusFeature] } )
    .filter( (feature, index, self) => { return feature === undefined ? false : (self.indexOf(feature) === index )})
    .map((feature, index)=>{
      return <option key={index} value={feature}>{feature}</option>
    })

    return (
      <div id="value-filter">
        <select id="feature-types" value={props.focusValue} onChange={onChange}>
          <option disabled="disabled" value="default">---</option>
          {featureValueOptions}
        </select>
        <div className="button" onClick={props.onSubmit}>Submit</div>
      </div>
      )
  } else {
    return (<div></div>)
  }
}


module.exports = FilterValue