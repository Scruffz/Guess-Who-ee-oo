const React = require('react');
const FilterValue = require('./FilterValue')

const FilterFeature = React.createClass({
  getInitialState: function(){
    return {focusFeature: "default"}
  },
  handleFeatureFilterChange: function(event){
    this.setState({focusFeature: event.target.value,
      focusFilterValue: "default"})
  },
  handleFilterValueChange: function(valueFilterValue){
    this.setState({focusFilterValue: valueFilterValue})
  },
  handleFilterSubmit: function(){
    this.setState({focusFeature: "default"})
    this.props.onSubmit({
      category: this.state.focusFeature,
      value: this.state.focusFilterValue
    })
  },
  render: function(){
    let featureTypeOptions = []
    // get list of ALL features across all Whos
    this.props.remainingWhos.forEach( (whoObject) => {
      featureTypeOptions = featureTypeOptions.concat( Object.keys(whoObject) )
    })
    //get unique elements and map into ReactDOM elements
    featureTypeOptions = featureTypeOptions
    .filter((featureType, index, self) => {return self.indexOf(featureType) === index ;})
    .map((featureType, index)=>{
      return <option key={index} value={featureType}>{featureType}</option>
    })

    return(
      <div>
        <select id="feature-types" value={this.state.focusFeature} onChange={this.handleFeatureFilterChange}>
        <option  disabled="disabled" value="default">Select Feature</option>
        {featureTypeOptions}
      </select>

      <FilterValue 
        focusFeature={this.state.focusFeature} 
        focusValue={this.state.focusFilterValue} 
        remainingWhos={this.props.remainingWhos} 
        onChange={this.handleFilterValueChange}
        onSubmit={this.handleFilterSubmit}/>
      </div>
    )
  }
})

module.exports = FilterFeature;